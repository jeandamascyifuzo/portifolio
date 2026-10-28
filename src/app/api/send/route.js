import { NextResponse } from "next/server";
import { Resend } from "resend";

// Contact form settings. This file only runs on the server, so the key is
// never sent to visitors' browsers — but it IS visible to anyone who can read
// the repository.
const RESEND_API_KEY = ""; // e.g. "re_xxxxxxxxxxxx" from https://resend.com/api-keys
const CONTACT_TO_EMAIL = ""; // where messages are delivered
// Resend's shared test sender works until you verify your own domain.
const CONTACT_FROM_EMAIL = "Portfolio <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL in src/app/api/send/route.js.");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!EMAIL_PATTERN.test(email) || !subject || !message) {
    return NextResponse.json(
      { error: "Please provide a valid email, subject and message." },
      { status: 400 }
    );
  }
  if (subject.length > 150 || message.length > 5000) {
    return NextResponse.json({ error: "Your message is too long." }, { status: 400 });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    // Resend v1 resolves with the error body instead of throwing.
    const result = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${email}\n\n${message}`,
    });
    if (!result?.id) throw new Error(result?.message || "Unknown Resend error");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again later." },
      { status: 502 }
    );
  }
}
