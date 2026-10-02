"use server";

import {
  contactFormSchema,
  demoFormSchema,
  livePreviewLeadSchema,
  type ContactFormValues,
  type DemoFormValues,
  type LivePreviewLeadValues,
} from "@/lib/validation";

/**
 * ---------------------------------------------------------------------------
 * CRM / EMAIL INTEGRATION POINT
 * ---------------------------------------------------------------------------
 * Both actions below validate the payload and hand it to `deliverSubmission`,
 * which POSTs the submission to whatever endpoint you configure:
 *
 *   QRION_CRM_WEBHOOK_URL   (required) — CRM, automation platform, or your own
 *                                        API route that forwards to email.
 *   QRION_CRM_WEBHOOK_TOKEN (optional) — sent as `Authorization: Bearer <token>`.
 *   QRION_FORM_FALLBACK_EMAIL (optional) — shown to the visitor as an
 *                                        alternative when the webhook is off.
 *
 * Nothing is faked here: if the webhook is not configured, the visitor is told
 * that the integration is not active yet instead of seeing a false success
 * message. No personal data is ever written to logs — only a submission id and
 * field names are logged so operations can confirm traffic is arriving.
 */

export type FormStatus = "success" | "error" | "not_configured";

export type FormState = {
  status: FormStatus;
  message: string;
  /** Random id echoed back so a visitor can reference their submission. */
  reference?: string;
  fieldErrors?: Record<string, string>;
};

type SubmissionKind = "kontak" | "demo" | "live-preview";

/** Outcome copy per form, so each journey gets wording that fits its context. */
const successMessages: Record<SubmissionKind, string> = {
  kontak:
    "Pesan Anda sudah terkirim. Tim QRION akan menghubungi Anda melalui email atau WhatsApp.",
  demo: "Permintaan demo Anda sudah terkirim. Tim QRION akan menghubungi Anda untuk mengatur jadwal.",
  "live-preview":
    "Terima kasih. Data Anda sudah terkirim dan tim QRION akan menghubungi Anda melalui WhatsApp untuk membahas kebutuhan sekolah Anda.",
};

const fallbackEmail = process.env.QRION_FORM_FALLBACK_EMAIL ?? null;

function supabaseConfig(): { url: string; secretKey: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) return null;
  return { url: url.replace(/\/+$/, ""), secretKey };
}

/**
 * Insert a Live Preview lead into the `live_preview_leads` table using the
 * server-only secret key (RLS is bypassed; the key never reaches the browser).
 */
async function insertLivePreviewLead(row: {
  name: string;
  whatsapp: string;
  institution: string;
  product?: string;
}): Promise<{ ok: boolean; reason: string }> {
  const config = supabaseConfig();
  if (!config) return { ok: false, reason: "supabase_not_configured" };

  try {
    const response = await fetch(`${config.url}/rest/v1/live_preview_leads`, {
      method: "POST",
      headers: {
        apikey: config.secretKey,
        Authorization: `Bearer ${config.secretKey}`,
        "content-type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: row.name,
        whatsapp: row.whatsapp,
        institution: row.institution,
        product: row.product ?? null,
        source: "live-preview-lead-gate",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      // Log status and error code only — never the submitted personal data.
      const body = await response.text().catch(() => "");
      console.error(
        `[QRION] live-preview lead insert failed (status ${response.status}): ${body.slice(0, 300)}`,
      );
      return { ok: false, reason: `http_${response.status}` };
    }

    return { ok: true, reason: "ok" };
  } catch (error) {
    console.error(
      "[QRION] live-preview lead insert request failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return { ok: false, reason: "network_error" };
  }
}

function validationErrorState(
  issues: { path: PropertyKey[]; message: string }[],
): FormState {
  const fieldErrors: Record<string, string> = {};

  for (const issue of issues) {
    const key = String(issue.path[0] ?? "");
    if (key && !fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }

  return {
    status: "error",
    message: "Beberapa data belum sesuai. Silakan periksa kembali formulir.",
    fieldErrors,
  };
}

async function deliverSubmission(
  kind: SubmissionKind,
  payload: Record<string, unknown>,
): Promise<FormState> {
  const webhookUrl = process.env.QRION_CRM_WEBHOOK_URL;

  if (!webhookUrl) {
    // Integration point — configure the env vars above to activate delivery.
    console.info(
      `[QRION] ${kind} submission received but QRION_CRM_WEBHOOK_URL is not set; payload was not delivered.`,
    );
    return {
      status: "not_configured",
      message: fallbackEmail
        ? `Formulir belum terhubung ke layanan CRM. Silakan hubungi kami langsung melalui ${fallbackEmail}.`
        : "Formulir belum terhubung ke layanan CRM atau email, sehingga pengiriman otomatis belum aktif. Hubungi tim QRION melalui alamat email pada halaman kontak.",
    };
  }

  const token = process.env.QRION_CRM_WEBHOOK_TOKEN;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        source: "qrion-website",
        kind,
        receivedAt: new Date().toISOString(),
        payload,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `[QRION] ${kind} webhook responded with status ${response.status}.`,
      );
      return {
        status: "error",
        message: fallbackEmail
          ? `Pengiriman gagal. Silakan hubungi kami langsung melalui ${fallbackEmail}.`
          : "Pengiriman gagal. Silakan coba beberapa saat lagi atau hubungi tim QRION melalui halaman kontak.",
      };
    }

    return {
      status: "success",
      message: successMessages[kind],
    };
  } catch (error) {
    console.error(`[QRION] ${kind} webhook request failed.`, error);
    return {
      status: "error",
      message:
        "Terjadi kendala saat mengirim data. Silakan coba lagi atau hubungi tim QRION melalui halaman kontak.",
    };
  }
}

export async function submitContactForm(
  values: ContactFormValues,
): Promise<FormState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return validationErrorState(parsed.error.issues);
  }

  return deliverSubmission("kontak", { ...parsed.data });
}

/**
 * Lead gate for /live-preview/[produk]. Submission is stored in Supabase
 * (`live_preview_leads`); the visitor is only let through after a confirmed
 * success so no lead is silently lost. Falls back to the CRM webhook flow
 * when Supabase is not configured.
 */
export async function submitLivePreviewLead(
  values: LivePreviewLeadValues,
  context?: { product?: string },
): Promise<FormState> {
  const parsed = livePreviewLeadSchema.safeParse(values);

  if (!parsed.success) {
    return validationErrorState(parsed.error.issues);
  }

  if (supabaseConfig()) {
    const result = await insertLivePreviewLead({
      ...parsed.data,
      product: context?.product,
    });

    if (result.ok) {
      return {
        status: "success",
        message: successMessages["live-preview"],
      };
    }

    return {
      status: "error",
      message: fallbackEmail
        ? `Pengiriman gagal. Silakan coba lagi, atau hubungi kami langsung melalui ${fallbackEmail}.`
        : "Pengiriman gagal. Silakan coba beberapa saat lagi atau hubungi tim QRION melalui halaman kontak.",
    };
  }

  return deliverSubmission("live-preview", {
    ...parsed.data,
    source: "live-preview-lead-gate",
  });
}

export async function submitDemoRequest(
  values: DemoFormValues,
): Promise<FormState> {
  const parsed = demoFormSchema.safeParse(values);

  if (!parsed.success) {
    return validationErrorState(parsed.error.issues);
  }

  const { consent, ...data } = parsed.data;

  return deliverSubmission("demo", {
    ...data,
    consentGiven: consent,
  });
}
