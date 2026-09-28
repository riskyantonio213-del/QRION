"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Check, Loader2 } from "lucide-react";

import { submitDemoRequest, type FormState } from "@/app/actions/form-actions";
import { CheckboxGroup } from "@/components/forms/checkbox-group";
import { FormField, SelectControl } from "@/components/forms/form-field";
import { FormStatusAlert } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getProduct } from "@/data/products";
import {
  demoFormSchema,
  demoInterestOptions,
  institutionTypeOptions,
  studentCountOptions,
  type DemoFormValues,
  type DemoInterest,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type DemoFormProps = {
  /** Slug taken from `?produk=` so a product page can pre-select the module. */
  defaultProductSlug?: string;
};

export function DemoForm({ defaultProductSlug }: DemoFormProps) {
  const product = defaultProductSlug
    ? getProduct(defaultProductSlug)
    : undefined;
  const preselected =
    product && (demoInterestOptions as readonly string[]).includes(product.name)
      ? [product.name as DemoInterest]
      : [];

  const defaultValues: DemoFormValues = {
    name: "",
    institution: "",
    position: "",
    whatsapp: "",
    email: "",
    studentCount: "",
    institutionType: "",
    interests: preselected,
    needs: "",
    consent: false,
  };

  const [state, setState] = useState<FormState | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues,
  });

  const busy = isSubmitting || isPending;

  const onSubmit = (values: DemoFormValues) => {
    startTransition(async () => {
      const result = await submitDemoRequest(values);
      setState(result);

      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          setError(field as keyof DemoFormValues, { message });
        }
      }

      if (result.status === "success") {
        reset(defaultValues);
      }
    });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5"
      aria-describedby="demo-form-privacy"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="demo-name" label="Nama Lengkap" required error={errors.name?.message}>
          {(field) => (
            <Input {...field} autoComplete="name" placeholder="Nama lengkap" {...register("name")} />
          )}
        </FormField>

        <FormField
          id="demo-institution"
          label="Nama Sekolah / Institusi"
          required
          error={errors.institution?.message}
        >
          {(field) => (
            <Input
              {...field}
              autoComplete="organization"
              placeholder="Contoh: SMP Negeri Contoh"
              {...register("institution")}
            />
          )}
        </FormField>

        <FormField id="demo-position" label="Jabatan" required error={errors.position?.message}>
          {(field) => (
            <Input
              {...field}
              autoComplete="organization-title"
              placeholder="Contoh: Wakil Kepala Sekolah"
              {...register("position")}
            />
          )}
        </FormField>

        <FormField
          id="demo-whatsapp"
          label="Nomor WhatsApp"
          required
          error={errors.whatsapp?.message}
          hint="Gunakan format 08xx xxxx xxxx atau +62."
        >
          {(field) => (
            <Input
              {...field}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="08xx xxxx xxxx"
              {...register("whatsapp")}
            />
          )}
        </FormField>

        <FormField id="demo-email" label="Email" required error={errors.email?.message}>
          {(field) => (
            <Input
              {...field}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="nama@sekolah.sch.id"
              {...register("email")}
            />
          )}
        </FormField>

        <FormField
          id="demo-student-count"
          label="Jumlah Siswa"
          required
          error={errors.studentCount?.message}
        >
          {(field) => (
            <SelectControl {...field} {...register("studentCount")}>
              <option value="">Pilih perkiraan jumlah siswa</option>
              {studentCountOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectControl>
          )}
        </FormField>

        <FormField
          id="demo-institution-type"
          label="Jenis Institusi"
          required
          error={errors.institutionType?.message}
          className="sm:col-span-2"
        >
          {(field) => (
            <SelectControl {...field} {...register("institutionType")}>
              <option value="">Pilih jenis institusi</option>
              {institutionTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectControl>
          )}
        </FormField>
      </div>

      <CheckboxGroup
        name="interests"
        legend="Produk yang diminati"
        options={demoInterestOptions}
        registration={register("interests")}
        error={errors.interests}
        hint={
          product
            ? `${product.name} sudah dipilih otomatis dari halaman produk.`
            : "Pilih satu atau lebih produk yang ingin Anda lihat."
        }
      />

      <FormField
        id="demo-needs"
        label="Ceritakan kebutuhan sekolah Anda"
        required
        error={errors.needs?.message}
      >
        {(field) => (
          <Textarea
            {...field}
            rows={5}
            placeholder="Contoh: sekolah ingin merapikan pencatatan pembayaran dan presensi harian."
            {...register("needs")}
          />
        )}
      </FormField>

      <div className="grid gap-2">
        <label
          htmlFor="demo-consent"
          className={cn(
            "flex cursor-pointer items-start gap-3 rounded-lg border border-input bg-background px-3.5 py-3 text-[13px] leading-relaxed text-muted-foreground transition-colors hover:bg-soft",
            "has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5",
          )}
        >
          <span className="relative mt-0.5 flex size-4 shrink-0 items-center justify-center">
            <input
              id="demo-consent"
              type="checkbox"
              {...register("consent")}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "demo-consent-error" : undefined}
              className="peer size-4 cursor-pointer appearance-none rounded border border-input bg-background transition-colors checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            />
            <Check
              aria-hidden="true"
              className="pointer-events-none absolute size-3 text-primary-foreground opacity-0 peer-checked:opacity-100"
            />
          </span>
          <span>
            Saya setuju data yang dikirim digunakan oleh tim QRION untuk
            menindaklanjuti permintaan demo ini.
          </span>
        </label>

        {errors.consent ? (
          <p
            id="demo-consent-error"
            role="alert"
            className="text-[13px] font-medium text-destructive"
          >
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      {state ? <FormStatusAlert state={state} /> : null}

      <div className="grid gap-4">
        <Button type="submit" size="xl" disabled={busy} className="w-full sm:w-auto">
          {busy ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Mengirim…
            </>
          ) : (
            <>
              <Calendar aria-hidden="true" className="size-4" />
              Jadwalkan Demo
            </>
          )}
        </Button>

        <p
          id="demo-form-privacy"
          className="text-[12px] leading-relaxed text-muted-foreground"
        >
          Dengan mengirim formulir ini, Anda menyetujui pemrosesan data sesuai{" "}
          <a
            href="/kebijakan-privasi"
            className="rounded font-medium text-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            Kebijakan Privasi
          </a>{" "}
          QRION. Kami tidak membagikan data Anda kepada pihak ketiga tanpa izin.
        </p>
      </div>
    </form>
  );
}
