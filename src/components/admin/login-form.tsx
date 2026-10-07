"use client";

import { useActionState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

import { loginAction, type LoginState } from "@/actions/admin-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ next }: { next?: string }) {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    loginAction,
    {},
  );

  return (
    <form action={formAction} className="grid gap-4">
      <input type="hidden" name="next" value={next ?? ""} />

      <div className="grid gap-1.5">
        <Label htmlFor="admin-username">Username</Label>
        <Input
          id="admin-username"
          name="username"
          autoComplete="username"
          placeholder="admin"
          required
        />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="admin-password">Password</Label>
        <Input
          id="admin-password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          required
        />
      </div>

      {state.error ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {state.error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="w-full rounded-full"
      >
        {pending ? (
          <>
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
            Memeriksa…
          </>
        ) : (
          "Masuk ke Panel"
        )}
      </Button>

      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        Akun bawaan: <span className="font-semibold">admin</span> /{" "}
        <span className="font-semibold">admin123</span> — segera ganti di
        halaman Pengaturan.
      </p>
    </form>
  );
}
