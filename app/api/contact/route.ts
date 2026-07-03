import { NextResponse } from "next/server";

// Leads and newsletter signups are delivered by e-mail via Resend.
// RESEND_API_KEY is server-only (no NEXT_PUBLIC_ prefix). Until a custom
// domain is verified at resend.com/domains, Resend only delivers from
// onboarding@resend.dev to the account owner's inbox — which is CONTACT_EMAIL.
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "stride.ag@gmail.com";
const FROM = process.env.RESEND_FROM ?? "Site Stride <onboarding@resend.dev>";

type Payload = {
  type?: "lead" | "newsletter";
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  revenue?: string;
  challenge?: string;
  // Honeypot: hidden field real users never fill. Bots do.
  extra?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot hit — pretend success so bots don't adapt.
  if (body.extra) return NextResponse.json({ ok: true });

  const email = body.email?.trim() ?? "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set — lead lost:", { ...body });
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const isLead = body.type !== "newsletter";

  const subject = isLead
    ? `🔥 Novo lead do site: ${body.name ?? email}${body.company ? ` (${body.company})` : ""}`
    : `📬 Nova inscrição na newsletter: ${email}`;

  const rows: [string, string | undefined][] = isLead
    ? [
        ["Nome", body.name],
        ["E-mail", email],
        ["Empresa", body.company],
        ["Site", body.website],
        ["Faturamento mensal", body.revenue],
        ["Principal desafio", body.challenge],
      ]
    : [["E-mail", email]];

  const html = `
    <h2 style="font-family:sans-serif">${isLead ? "Novo lead do formulário de contato" : "Nova inscrição na newsletter"}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#666"><strong>${k}</strong></td><td style="padding:6px 0">${escapeHtml(v!)}</td></tr>`
        )
        .join("")}
    </table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error:", res.status, detail);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
