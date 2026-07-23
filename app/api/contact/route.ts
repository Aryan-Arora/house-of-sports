import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  type?: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const record = body as Record<string, unknown>;
  return (
    typeof record.name === "string" &&
    record.name.trim().length > 0 &&
    typeof record.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email) &&
    typeof record.message === "string" &&
    record.message.trim().length >= 10
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  // TODO: connect to an email service (e.g. Resend, Formspree) or CRM here.
  // For now this just logs the submission and returns success.
  console.log("[contact] new submission", {
    name: body.name,
    email: body.email,
    phone: body.phone,
    subject: body.subject,
    type: body.type,
    message: body.message,
  });

  return NextResponse.json({ ok: true });
}
