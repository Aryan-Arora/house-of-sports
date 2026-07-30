"use client";

import { useState, type FormEvent } from "react";
import { clsx } from "clsx";
import { CheckCircleIcon } from "@/components/icons";

interface ContactFormProps {
  subject?: string;
  type?: string;
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
  "mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";

export default function ContactForm({ subject, type }: ContactFormProps) {
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
          subject: subject ?? "General enquiry",
          type: type ?? "general",
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
      <div role="status" className="rounded-2xl border border-line bg-paper-muted p-8 text-center">
        <CheckCircleIcon className="mx-auto h-10 w-10 text-primary" />
        <p className="mt-4 text-lg font-bold text-ink">Message sent</p>
        <p className="mt-1 text-sm text-ink/60">We&rsquo;ll get back to you shortly.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={inputClass}
          />
          {errors.name ? <p className="mt-1.5 text-xs text-red-600">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={inputClass}
          />
          {errors.email ? <p className="mt-1.5 text-xs text-red-600">{errors.email}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          className={clsx(inputClass, "sm:w-1/2")}
        />
        {errors.phone ? <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={clsx(inputClass, "resize-none")}
        />
        {errors.message ? <p className="mt-1.5 text-xs text-red-600">{errors.message}</p> : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-paper transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
