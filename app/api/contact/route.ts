import { NextResponse } from "next/server";

// Leads and newsletter signups are delivered by e-mail via Resend.
// RESEND_API_KEY is server-only (no NEXT_PUBLIC_ prefix). Until a custom
// domain is verified at resend.com/domains, Resend only delivers from
// onboarding@resend.dev to the account owner's inbox — which is CONTACT_EMAIL.
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "stride.ag@gmail.com";
const FROM = process.env.RESEND_FROM ?? "Site Stride <onboarding@resend.dev>";

type Payload = {
  // "diagnostico" = Diagnóstico de Funil form on /bni
  type?: "lead" | "newsletter" | "diagnostico";
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  revenue?: string;
  challenge?: string;
  whatsapp?: string;
  investment?: string;
  role?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  // Honeypot: hidden field real users never fill. Bots do.
  extra?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const str = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 500) : "");

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

  const isDiagnostico = body.type === "diagnostico";
  const phoneDigits = str(body.whatsapp).replace(/\D/g, "");

  if (isDiagnostico) {
    const invalid = (["name", "website", "investment", "role"] as const).filter(
      (k) => !str(body[k])
    ) as string[];
    if (phoneDigits.length < 10 || phoneDigits.length > 13) invalid.push("whatsapp");
    if (invalid.length) {
      return NextResponse.json({ error: "invalid_fields", fields: invalid }, { status: 400 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set — lead lost:", { ...body });
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const isLead = body.type !== "newsletter";
  const origin = str(body.utm_source) || "direto";

  let subject: string;
  let heading: string;
  let rows: [string, string | undefined][];
  let extraHtml = "";

  if (isDiagnostico) {
    const site = str(body.website).replace(/^https?:\/\//, "");
    subject = `🎯 Diagnóstico de Funil: ${str(body.name)} (${site}) · origem ${origin}`;
    heading = "Novo pedido de Diagnóstico de Funil (/bni)";
    rows = [
      ["Nome", str(body.name)],
      ["E-mail", email],
      ["WhatsApp", phoneDigits],
      ["Site", str(body.website)],
      ["Investe em mídia/mês", str(body.investment)],
      ["Cargo", str(body.role)],
      ["Origem (utm_source)", origin],
      ["Mídia (utm_medium)", str(body.utm_medium)],
      ["Campanha (utm_campaign)", str(body.utm_campaign)],
      ["Conteúdo (utm_content)", str(body.utm_content)],
      ["Termo (utm_term)", str(body.utm_term)],
      ["Referrer", str(body.referrer)],
    ];
    // Digits only, so safe to interpolate. BR numbers arrive without the 55.
    const waNumber = phoneDigits.length <= 11 ? `55${phoneDigits}` : phoneDigits;
    extraHtml = `<p style="font-family:sans-serif"><a href="https://wa.me/${waNumber}">Responder no WhatsApp →</a> <span style="color:#666">(prometido: em até 1 dia útil)</span></p>`;
  } else if (isLead) {
    subject = `🔥 Novo lead do site: ${body.name ?? email}${body.company ? ` (${body.company})` : ""}`;
    heading = "Novo lead do formulário de contato";
    rows = [
      ["Nome", body.name],
      ["E-mail", email],
      ["Empresa", body.company],
      ["Site", body.website],
      ["Faturamento mensal", body.revenue],
      ["Principal desafio", body.challenge],
    ];
  } else {
    subject = `📬 Nova inscrição na newsletter: ${email}`;
    heading = "Nova inscrição na newsletter";
    rows = [["E-mail", email]];
  }

  const html = `
    <h2 style="font-family:sans-serif">${heading}</h2>
    ${extraHtml}
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
