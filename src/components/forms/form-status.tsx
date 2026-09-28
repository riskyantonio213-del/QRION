"use client";

import { CircleAlert, CircleCheck, Info } from "lucide-react";

import type { FormState } from "@/app/actions/form-actions";
import { cn } from "@/lib/utils";

/**
 * Renders the real outcome of a submission:
 *  - success       → the CRM webhook accepted the payload
 *  - error         → validation or delivery failure
 *  - not_configured → no CRM endpoint is wired up yet (honest placeholder state)
 */
export function FormStatusAlert({ state }: { state: FormState }) {
  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl border border-qrion-success/20 bg-qrion-success-bg p-4"
      >
        <CircleCheck aria-hidden="true" className="mt-0.5 size-[18px] shrink-0 text-qrion-success" />
        <div>
          <p className="text-sm font-semibold text-qrion-indigo">Terkirim</p>
          <p className="mt-1 text-[13px] leading-relaxed text-qrion-text-body">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  if (state.status === "not_configured") {
    return (
      <div
        role="alert"
        className="flex items-start gap-3 rounded-xl border border-qrion-warning/25 bg-qrion-warning-bg p-4"
      >
        <Info aria-hidden="true" className="mt-0.5 size-[18px] shrink-0 text-qrion-warning" />
        <div>
          <p className="text-sm font-semibold text-qrion-indigo">
            Integrasi form belum aktif
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-qrion-text-body">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-xl border border-qrion-error/25 bg-qrion-error-bg p-4",
      )}
    >
      <CircleAlert aria-hidden="true" className="mt-0.5 size-[18px] shrink-0 text-qrion-error" />
      <div>
        <p className="text-sm font-semibold text-qrion-error">Belum dapat dikirim</p>
        <p className="mt-1 text-[13px] leading-relaxed text-qrion-text-body">
          {state.message}
        </p>
      </div>
    </div>
  );
}
