"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";

import { submitLivePreviewLead, type FormState } from "@/app/actions/form-actions";
import { LogoMark } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { livePreviewLeadSchema, type LivePreviewLeadValues } from "@/lib/validation";

type LeadModalProps = {
  open: boolean;
  onComplete: (state: FormState) => void;
};

const defaultValues: LivePreviewLeadValues = { name: "", whatsapp: "" };

/**
 * Lead capture gate shown before the Live Experience.
 *
 * The submission result is handed back to the shell instead of blocking entry:
 * a visitor can always explore the demo, and the real delivery outcome (e.g.
 * CRM not configured yet) is reported honestly in the app instead of a fake
 * success screen.
 */
export function LeadModal({ open, onComplete }: LeadModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();
  const [deliveryFailed, setDeliveryFailed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LivePreviewLeadValues>({
    resolver: zodResolver(livePreviewLeadSchema),
    defaultValues,
  });

  // Focus the first field on open and keep Tab inside the dialog.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstField =
      dialogRef.current?.querySelector<HTMLInputElement>("input[type='text']");
    firstField?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          "input, button, a[href]",
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  const busy = isSubmitting || isPending;

  const onSubmit = (values: LivePreviewLeadValues) => {
    startTransition(async () => {
      const result = await submitLivePreviewLead(values);

      if (result.status === "error" && !result.fieldErrors) {
        // Delivery failed at the integration layer: tell the visitor they can
        // still continue, rather than pretending the data was received.
        setDeliveryFailed(true);
        return;
      }

      setDeliveryFailed(false);
      onComplete(result);
    });
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      style={{ backgroundColor: "rgba(48,46,89,0.25)", backdropFilter: "blur(6px)" }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        aria-describedby="lead-modal-description"
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_60px_rgba(48,46,89,0.18)]"
      >
        {/* Decorative mint geometry behind the header only — never over content. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden">
          <span className="absolute -left-10 -top-12 size-40 rotate-12 rounded-[36px] bg-qrion-mint/80" />
          <span className="absolute -right-8 -top-16 size-32 -rotate-12 rounded-[28px] bg-qrion-subtle-green/80" />
          <span className="absolute left-1/2 top-6 size-6 rotate-45 rounded-md bg-qrion-mint-medium/70" />
        </div>

        <div className="relative p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl border border-brand-mint-medium bg-white">
              <LogoMark className="size-7 rounded-lg" />
            </span>
            <div>
              <p className="font-display text-sm font-extrabold tracking-[0.16em] text-qrion-indigo">
                QRION
              </p>
              <p className="text-[12px] text-qrion-text-muted">Live Experience</p>
            </div>
          </div>

          <h2
            id="lead-modal-title"
            className="mt-5 text-balance font-display text-[22px] font-bold leading-snug text-qrion-indigo sm:text-[26px]"
          >
            Coba Langsung Ekosistem QRION
          </h2>
          <p
            id="lead-modal-description"
            className="mt-2.5 text-[14px] leading-relaxed text-qrion-text-body"
          >
            Lihat langsung bagaimana sistem QRION membantu mengelola operasional
            sekolah dalam satu ekosistem.
          </p>

          <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="lead-name" className="text-[13px]">
                Nama Lengkap
                <span aria-hidden="true" className="ml-0.5 text-qrion-error">
                  *
                </span>
              </Label>
              <Input
                id="lead-name"
                type="text"
                autoComplete="name"
                placeholder="Masukkan nama Anda"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "lead-name-error" : undefined}
                {...register("name")}
              />
              {errors.name ? (
                <p
                  id="lead-name-error"
                  role="alert"
                  className="text-[13px] font-medium text-qrion-error"
                >
                  {errors.name.message}
                </p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lead-whatsapp" className="text-[13px]">
                Nomor WhatsApp
                <span aria-hidden="true" className="ml-0.5 text-qrion-error">
                  *
                </span>
              </Label>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] font-medium text-qrion-text-muted"
                >
                  +62
                </span>
                <Input
                  id="lead-whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="812 3456 7890"
                  className="pl-14"
                  aria-invalid={Boolean(errors.whatsapp)}
                  aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : "lead-whatsapp-hint"}
                  {...register("whatsapp")}
                />
              </div>
              {errors.whatsapp ? (
                <p
                  id="lead-whatsapp-error"
                  role="alert"
                  className="text-[13px] font-medium text-qrion-error"
                >
                  {errors.whatsapp.message}
                </p>
              ) : (
                <p id="lead-whatsapp-hint" className="text-[12px] text-qrion-text-muted">
                  Contoh: 812 3456 7890 atau 08xx xxxx xxxx.
                </p>
              )}
            </div>

            {deliveryFailed ? (
              <p role="alert" className="rounded-xl border border-qrion-warning/25 bg-qrion-warning-bg p-3.5 text-[13px] leading-relaxed text-qrion-text-body">
                Data belum berhasil dikirim ke sistem kami, namun Anda tetap dapat
                menjelajahi demo ini. Silakan hubungi tim QRION melalui halaman kontak.
              </p>
            ) : null}

            <Button type="submit" size="xl" disabled={busy} className="w-full rounded-full">
              {busy ? (
                <>
                  <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                  Menyiapkan demo…
                </>
              ) : (
                <>
                  Mulai Live Preview
                  <ArrowRight aria-hidden="true" className="size-4" />
                </>
              )}
            </Button>

            <button
              type="button"
              onClick={() => onComplete({ status: "success", message: "" })}
              className="mx-auto rounded text-[13px] font-medium text-qrion-text-muted underline-offset-2 transition-colors hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              Jelajahi tanpa mengisi data
            </button>

            <p className="flex items-start gap-2 text-[12px] leading-relaxed text-qrion-text-muted">
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-brand" />
              <span>
                Data hanya digunakan tim QRION untuk menindaklanjuti permintaan demo,
                sesuai{" "}
                <a
                  href="/kebijakan-privasi"
                  className="rounded font-medium text-brand-indigo underline-offset-2 hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  Kebijakan Privasi
                </a>
                .
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
