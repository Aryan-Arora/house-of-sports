"use client";

import { useState, type FormEvent } from "react";
import type { CareerRole } from "@/lib/types";

interface CareerApplicationFormProps {
  roles: CareerRole[];
}

const inputClass =
  "w-full border-0 border-b-2 border-outline-variant bg-background py-4 uppercase text-on-surface focus:border-primary focus:outline-none focus:ring-0";

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
            `Stats: ${form.get("stats") ?? "N/A"}`,
          ].join("\n"),
          subject: "General application",
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
      <div role="status" className="border-2 border-primary bg-primary/10 p-8 text-center">
        <p className="font-display text-headline-md uppercase text-primary">Application received</p>
        <p className="mt-2 text-on-surface-variant">We review all applications within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="app-name" className="font-mono-label text-label-mono uppercase text-primary">
            Full Name
          </label>
          <input id="app-name" name="name" type="text" required placeholder="YOUR NAME" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="app-email" className="font-mono-label text-label-mono uppercase text-primary">
            Email Address
          </label>
          <input
            id="app-email"
            name="email"
            type="email"
            required
            placeholder="YOUR@EMAIL.COM"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="app-role" className="font-mono-label text-label-mono uppercase text-primary">
            Role of Interest
          </label>
          <select id="app-role" name="role" className={`${inputClass} appearance-none`}>
            <option>SELECT ROLE</option>
            {roles.map((role) => (
              <option key={role.slug}>{role.title.toUpperCase()}</option>
            ))}
            <option>OTHER / GENERAL</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="app-portfolio" className="font-mono-label text-label-mono uppercase text-primary">
            Portfolio / LinkedIn
          </label>
          <input id="app-portfolio" name="portfolio" type="url" placeholder="HTTPS://..." className={inputClass} />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="app-stats" className="font-mono-label text-label-mono uppercase text-primary">
          Tell Us Your Stats (Experience)
        </label>
        <textarea
          id="app-stats"
          name="stats"
          rows={4}
          placeholder="HOW DO YOU PLAY?"
          className={`${inputClass} resize-none uppercase`}
        />
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong submitting your application. Please try again.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary py-6 font-display text-headline-md uppercase text-on-primary transition-all hover:bg-primary-container disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
