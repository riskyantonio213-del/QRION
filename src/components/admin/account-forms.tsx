"use client";

import { useActionState } from "react";
import { AlertCircle, CheckCircle2, KeyRound, Loader2, UserRound } from "lucide-react";

import {
  changePasswordAction,
  changeUsernameAction,
  type AccountState,
} from "@/actions/admin-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Feedback({ state }: { state: AccountState }) {
  if (state.error) {
    return (
      <p
        role="alert"
        className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
      >
        <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {state.error}
      </p>
    );
  }
  if (state.message) {
    return (
      <p
        role="status"
        className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700"
      >
        <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {state.message}
      </p>
    );
  }
  return null;
}

export function AccountForms({ currentUsername }: { currentUsername: string }) {
  const [userState, userAction, userPending] = useActionState<
    AccountState,
    FormData
  >(changeUsernameAction, {});
  const [passState, passAction, passPending] = useActionState<
    AccountState,
    FormData
  >(changePasswordAction, {});

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-sky-100 text-sky-600">
            <UserRound aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="font-display text-lg font-bold text-qrion-indigo">
              Username
            </h2>
            <p className="text-xs text-muted-foreground">
              Saat ini: {currentUsername}
            </p>
          </div>
        </div>

        <form action={userAction} className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="new-username">Username baru</Label>
            <Input
              id="new-username"
              name="username"
              autoComplete="off"
              placeholder="admin"
              required
              minLength={3}
              maxLength={32}
            />
            <p className="text-xs text-muted-foreground">
              3–32 karakter: huruf, angka, titik, strip, underscore.
            </p>
          </div>
          <Feedback state={userState} />
          <Button
            type="submit"
            disabled={userPending}
            className="justify-self-start rounded-full"
          >
            {userPending ? (
              <>
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                Menyimpan…
              </>
            ) : (
              "Simpan username"
            )}
          </Button>
        </form>
      </section>

      <section className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-violet-100 text-violet-600">
            <KeyRound aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="font-display text-lg font-bold text-qrion-indigo">
              Password
            </h2>
            <p className="text-xs text-muted-foreground">
              Minimal 6 karakter, tanpa verifikasi password lama.
            </p>
          </div>
        </div>

        <form
          action={passAction}
          onSubmit={(event) => {
            const form = event.currentTarget;
            const password = form.elements.namedItem("password");
            const confirm = form.elements.namedItem("confirm");
            if (
              password instanceof HTMLInputElement &&
              confirm instanceof HTMLInputElement &&
              password.value !== confirm.value
            ) {
              event.preventDefault();
              confirm.setCustomValidity("Konfirmasi password tidak sama.");
              confirm.reportValidity();
              return;
            }
            if (confirm instanceof HTMLInputElement) {
              confirm.setCustomValidity("");
            }
          }}
          className="grid gap-4"
        >
          <div className="grid gap-1.5">
            <Label htmlFor="new-password">Password baru</Label>
            <Input
              id="new-password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="confirm-password">Ulangi password baru</Label>
            <Input
              id="confirm-password"
              name="confirm"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
          <Feedback state={passState} />
          <Button
            type="submit"
            disabled={passPending}
            className="justify-self-start rounded-full"
          >
            {passPending ? (
              <>
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                Menyimpan…
              </>
            ) : (
              "Simpan password"
            )}
          </Button>
        </form>
      </section>
    </div>
  );
}
