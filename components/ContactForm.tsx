"use client";

import { useState, type FormEvent } from "react";
import { clsx } from "clsx";

interface ContactFormProps {
  /** Pre-fills the subject, e.g. from a Careers "Apply" link. */
  defaultSubject?: string;
  /** "application" | "general" — passed through to the API route. */
  defaultType?: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s-]{7,14}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!EMAIL_REGEX.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.phone.trim() && !PHONE_REGEX.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

const initialValues: FormValues = { name: "", email: "", phone: "", message: "" };
const inputClass =
  "border-0 border-b-2 border-outline-variant bg-transparent py-2 font-display text-headline-md uppercase text-on-surface transition-all placeholder:text-outline-variant focus:border-primary focus:outline-none focus:ring-0";

export default function ContactForm({ defaultSubject, defaultType }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          subject: defaultSubject ?? "General enquiry",
          type: defaultType ?? "general",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center bg-primary p-12 text-center text-on-primary"
      >
        <span
          className="material-symbols-outlined mb-4 text-8xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h3 className="mb-2 font-display text-headline-lg uppercase">SIGNAL RECEIVED.</h3>
        <p className="max-w-xs font-mono-label text-label-mono uppercase">
          We&apos;ve added you to the roster. Expect intel shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border-2 border-on-primary px-8 py-3 font-display text-headline-md uppercase transition-all hover:bg-on-primary hover:text-primary"
        >
          Back to base
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {defaultSubject ? (
        <div className="inline-block -rotate-2 bg-primary px-3 py-1 font-mono-label text-label-mono text-on-primary">
          {defaultSubject}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono-label text-label-mono uppercase text-on-surface-variant">
            Full Player Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="RAHUL KHANNA"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono-label text-label-mono uppercase text-on-surface-variant">
            Secure Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="PLAYER@DOM.AIN"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2 md:w-1/2 md:pr-4">
        <label htmlFor="phone" className="font-mono-label text-label-mono uppercase text-on-surface-variant">
          Mobile Link (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 00000 00000"
          value={values.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={inputClass}
        />
        {errors.phone ? (
          <p id="phone-error" className="text-xs text-red-600">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono-label text-label-mono uppercase text-on-surface-variant">
          Intel / Inquiry
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="I'M LOOKING TO CHALLENGE THE ELITE..."
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={clsx(
            "resize-none border-2 border-outline-variant bg-transparent p-4 uppercase text-on-surface transition-all placeholder:text-outline-variant focus:border-primary focus:outline-none",
            errors.message && "border-red-600"
          )}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-4 bg-primary py-6 font-display text-headline-lg uppercase text-on-primary transition-all hover:bg-primary-container active:scale-95 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send the signal"}
        <span className="material-symbols-outlined text-4xl">send</span>
      </button>
    </form>
  );
}
