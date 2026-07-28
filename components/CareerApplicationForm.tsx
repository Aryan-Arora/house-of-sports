"use client";

import { useState, type FormEvent } from "react";
import type { CareerRole } from "@/lib/types";

interface CareerApplicationFormProps {
  roles: CareerRole[];
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary";

export default function CareerApplicationForm({ roles }: CareerApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    if (!name || !email) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          message: [
            `Role of interest: ${form.get("role") ?? "N/A"}`,
            `Portfolio/LinkedIn: ${form.get("portfolio") ?? "N/A"}`,
            `Experience: ${form.get("experience") ?? "N/A"}`,
          ].join("\n"),
          subject: "Job application",
          type: "application",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-paper-muted p-8 text-center">
        <p className="text-lg font-bold text-ink">Application received</p>
        <p className="mt-1 text-sm text-ink/60">We review every application within a few days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="app-name" className="text-sm font-medium text-ink">
            Full name
          </label>
          <input id="app-name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="app-email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input id="app-email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="app-role" className="text-sm font-medium text-ink">
            Role you&rsquo;re applying for
          </label>
          <select id="app-role" name="role" className={`${inputClass} appearance-none`}>
            {roles.map((role) => (
              <option key={role.slug}>{role.title}</option>
            ))}
            <option>Other / General</option>
          </select>
        </div>
        <div>
          <label htmlFor="app-portfolio" className="text-sm font-medium text-ink">
            Portfolio / LinkedIn
          </label>
          <input id="app-portfolio" name="portfolio" type="url" placeholder="https://" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="app-experience" className="text-sm font-medium text-ink">
          Tell us about your experience
        </label>
        <textarea id="app-experience" name="experience" rows={4} className={`${inputClass} resize-none`} />
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong submitting your application. Please try again.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-paper transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
