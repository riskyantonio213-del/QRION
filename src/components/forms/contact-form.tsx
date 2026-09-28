"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";

import { submitContactForm, type FormState } from "@/app/actions/form-actions";
import { FormField } from "@/components/forms/form-field";
import { SelectControl } from "@/components/forms/form-field";
import { CheckboxGroup } from "@/components/forms/checkbox-group";
import { FormStatusAlert } from "@/components/forms/form-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  contactInterestOptions,
  studentCountOptions,
  type ContactFormValues,
} from "@/lib/validation";

const defaultValues: ContactFormValues = {
  name: "",
  institution: "",
  position: "",
  email: "",
  whatsapp: "",
  studentCount: "",
  interests: [],
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const busy = isSubmitting || isPending;

  const onSubmit = (values: ContactFormValues) => {
    startTransition(async () => {
      const result = await submitContactForm(values);
      setState(result);

      // Surface server-side validation errors back onto the matching fields.
      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          setError(field as keyof ContactFormValues, { message });
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
      aria-describedby="contact-form-note"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="contact-name" label="Nama" required error={errors.name?.message}>
          {(field) => (
            <Input
              {...field}
              autoComplete="name"
              placeholder="Nama lengkap"
              {...register("name")}
            />
          )}
        </FormField>

        <FormField
          id="contact-institution"
          label="Institusi"
          required
          error={errors.institution?.message}
        >
          {(field) => (
            <Input
              {...field}
              autoComplete="organization"
              placeholder="Nama sekolah / institusi"
              {...register("institution")}
            />
          )}
        </FormField>

        <FormField id="contact-position" label="Jabatan" required error={errors.position?.message}>
          {(field) => (
            <Input
              {...field}
              autoComplete="organization-title"
              placeholder="Contoh: Kepala Sekolah"
              {...register("position")}
            />
          )}
        </FormField>

        <FormField id="contact-email" label="Email" required error={errors.email?.message}>
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
          id="contact-whatsapp"
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

        <FormField
          id="contact-student-count"
          label="Jumlah siswa"
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
      </div>

      <CheckboxGroup
        name="interests"
        legend="Produk yang diminati"
        options={contactInterestOptions}
        registration={register("interests")}
        error={errors.interests}
        hint="Pilih satu atau lebih produk yang ingin Anda diskusikan."
      />

      <FormField
        id="contact-message"
        label="Pesan"
        required
        error={errors.message?.message}
      >
        {(field) => (
          <Textarea
            {...field}
            rows={5}
            placeholder="Ceritakan kebutuhan sekolah Anda, proses yang ingin diperbaiki, atau pertanyaan Anda."
            {...register("message")}
          />
        )}
      </FormField>

      {state ? <FormStatusAlert state={state} /> : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={busy} className="sm:w-auto">
          {busy ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Mengirim…
            </>
          ) : (
            <>
              Kirim Pesan
              <Send aria-hidden="true" className="size-4" />
            </>
          )}
        </Button>
        <p
          id="contact-form-note"
          className="max-w-md text-[12px] leading-relaxed text-muted-foreground"
        >
          Data yang Anda kirim hanya digunakan untuk menindaklanjuti permintaan
          ini. Lihat{" "}
          <a
            href="/kebijakan-privasi"
            className="rounded font-medium text-brand underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            Kebijakan Privasi
          </a>
          .
        </p>
      </div>
    </form>
  );
}
