"use client";

import { useEffect, useRef, useState } from "react";
import { WHATSAPP_NUMBER } from "../lib/site";
import { trackLead } from "./track-lead";
import { ctaClass } from "./ui";
import { readAttribution } from "./utm";

const INVESTMENT_RANGES = [
  "Já investi, mas parei por falta de resultado",
  "Até R$ 5 mil",
  "R$ 5 mil a R$ 20 mil",
  "R$ 20 mil a R$ 50 mil",
  "R$ 50 mil a R$ 150 mil",
  "Acima de R$ 150 mil",
];

const ROLES = ["Sócio/CEO", "Marketing", "Comercial", "Outro"];

const FIELDS = ["name", "email", "whatsapp", "website", "investment", "role"] as const;
type Field = (typeof FIELDS)[number];
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WHATSAPP_FALLBACK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Quero agendar o Diagnóstico de Funil."
)}`;

const inputClass =
  "w-full rounded-xl border border-white/15 bg-ink-850 px-4 py-3 text-base text-cloud placeholder:text-faint transition-colors focus:border-accent-light aria-[invalid=true]:border-accent-light";

// (62) 99999-9999 — also accepts a pasted +55 prefix.
function formatPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2);
  d = d.slice(0, 11);
  if (!d) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

// Accepts "empresa.com.br" without protocol.
function normalizeSite(raw: string) {
  const v = raw.trim();
  if (!v) return "";
  try {
    const url = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`);
    return url.hostname.includes(".") ? url.toString().replace(/\/$/, "") : "";
  } catch {
    return "";
  }
}

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Conta pra gente seu nome.";
  if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Confira o e-mail, ex.: voce@suaempresa.com.br.";
  if (v.whatsapp.replace(/\D/g, "").length < 10)
    e.whatsapp = "Informe o WhatsApp com DDD.";
  if (!normalizeSite(v.website))
    e.website = "Informe o endereço do site, ex.: suaempresa.com.br.";
  if (!v.investment) e.investment = "Escolha uma faixa.";
  if (!v.role) e.role = "Escolha seu cargo.";
  return e;
}

export default function DiagnosticForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // "#diagnostico" links (hero + sticky bar): after the native anchor scroll,
  // move focus into the form. On touch screens focus the heading instead of
  // the first input, so the keyboard doesn't pop over the form.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href="#diagnostico"]');
      if (!link) return;
      const finePointer = window.matchMedia("(pointer: fine)").matches;
      requestAnimationFrame(() =>
        (finePointer && nameRef.current ? nameRef.current : headingRef.current)?.focus({
          preventScroll: true,
        })
      );
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (status === "success") headingRef.current?.focus();
  }, [status]);

  function clearError(field: string) {
    if (!(field in errors)) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field as Field];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values: Values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      whatsapp: phone,
      website: String(data.get("website") ?? ""),
      investment: String(data.get("investment") ?? ""),
      role: String(data.get("role") ?? ""),
    };

    const found = validate(values);
    setErrors(found);
    const firstInvalid = FIELDS.find((f) => found[f]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    const attribution = readAttribution();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "diagnostico",
          name: values.name.trim(),
          email: values.email.trim(),
          whatsapp: values.whatsapp.replace(/\D/g, ""),
          website: normalizeSite(values.website),
          investment: values.investment,
          role: values.role,
          extra: data.get("extra"),
          ...attribution,
        }),
      });
      if (!res.ok) throw new Error("send_failed");

      setFirstName(values.name.trim().split(/\s+/)[0]);
      setStatus("success");
      trackLead({
        lead_source: attribution.utm_source ?? "direto",
        campaign: attribution.utm_campaign,
        investment_range: values.investment,
        role: values.role,
      });
    } catch {
      setStatus("error");
    }
  }

  const described = (field: Field) =>
    errors[field]
      ? { "aria-invalid": true, "aria-describedby": `bni-${field}-error` }
      : {};

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`bni-${field}-error`} className="mt-1.5 text-[13px] text-accent-light">
        {errors[field]}
      </p>
    ) : null;

  const card =
    "rounded-3xl border border-white/10 bg-ink-900 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:p-7";

  if (status === "success") {
    return (
      <div className={card}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Recebido
        </p>
        <h2
          ref={headingRef}
          tabIndex={-1}
          id="bni-form-title"
          className="mt-3 text-2xl font-extrabold leading-tight text-cloud"
        >
          Pronto, {firstName}. Seu diagnóstico está pedido.
        </h2>
        <ol className="mt-6 space-y-4 text-[15px] leading-snug text-cloud/85">
          <li className="flex gap-3">
            <span className="font-bold text-accent">1</span>
            <span>
              <strong className="text-cloud">Em até 1 dia útil</strong> alguém do time te
              chama no WhatsApp <strong className="text-cloud">{phone}</strong> para marcar
              os 30 minutos.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-accent">2</span>
            <span>Antes da call, a gente analisa seu site, seus anúncios e seu funil.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-accent">3</span>
            <span>Você sai da conversa com o diagnóstico por escrito, sem compromisso.</span>
          </li>
        </ol>
        <p className="mt-6 border-t border-white/10 pt-4 text-sm text-cloud/70">
          Digitou o número errado?{" "}
          <a
            href={WHATSAPP_FALLBACK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cloud underline underline-offset-2"
          >
            Chame a gente no WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className={card}>
      <h2
        ref={headingRef}
        tabIndex={-1}
        id="bni-form-title"
        className="text-2xl font-extrabold leading-tight text-cloud"
      >
        Agende seu diagnóstico
      </h2>
      <p className="mt-1 text-sm text-cloud/70">30 minutos · gratuito · sem compromisso</p>

      <form
        noValidate
        onSubmit={handleSubmit}
        onChange={(e) => clearError((e.target as unknown as HTMLInputElement).name)}
        aria-busy={status === "sending"}
        className="mt-5 space-y-4"
      >
        <div>
          <label htmlFor="bni-name" className="mb-1.5 block text-sm font-medium text-cloud/90">
            Nome
          </label>
          <input
            ref={nameRef}
            id="bni-name"
            name="name"
            autoComplete="name"
            className={inputClass}
            {...described("name")}
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="bni-email" className="mb-1.5 block text-sm font-medium text-cloud/90">
            E-mail corporativo
          </label>
          <input
            id="bni-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="voce@suaempresa.com.br"
            className={inputClass}
            {...described("email")}
          />
          {errorText("email")}
        </div>

        <div>
          <label
            htmlFor="bni-whatsapp"
            className="mb-1.5 block text-sm font-medium text-cloud/90"
          >
            WhatsApp
          </label>
          <input
            id="bni-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(62) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={inputClass}
            {...described("whatsapp")}
          />
          {errorText("whatsapp")}
        </div>

        <div>
          <label
            htmlFor="bni-website"
            className="mb-1.5 block text-sm font-medium text-cloud/90"
          >
            Site da empresa
          </label>
          <input
            id="bni-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="suaempresa.com.br"
            className={inputClass}
            {...described("website")}
          />
          {errorText("website")}
        </div>

        <div>
          <label
            htmlFor="bni-investment"
            className="mb-1.5 block text-sm font-medium text-cloud/90"
          >
            Quanto investe em mídia por mês?
          </label>
          <div className="relative">
            <select
              id="bni-investment"
              name="investment"
              defaultValue=""
              className={`${inputClass} appearance-none pr-10`}
              {...described("investment")}
            >
              <option value="" disabled>
                Selecione uma faixa
              </option>
              {INVESTMENT_RANGES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cloud/60"
            >
              <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          {errorText("investment")}
        </div>

        <fieldset aria-describedby={errors.role ? "bni-role-error" : undefined}>
          <legend id="bni-role-legend" className="mb-1.5 text-sm font-medium text-cloud/90">
            Qual seu cargo?
          </legend>
          <div
            role="radiogroup"
            aria-labelledby="bni-role-legend"
            aria-invalid={errors.role ? true : undefined}
            className="grid grid-cols-2 gap-2"
          >
            {ROLES.map((r) => (
              <label key={r} className="cursor-pointer">
                <input type="radio" name="role" value={r} className="bni-radio peer sr-only" />
                <span className="flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-ink-850 px-3 py-2.5 text-center text-sm text-cloud/85 transition-colors peer-checked:border-accent-dark peer-checked:bg-accent-dark peer-checked:font-semibold peer-checked:text-white">
                  {r}
                </span>
              </label>
            ))}
          </div>
          {errorText("role")}
        </fieldset>

        {/* Honeypot anti-spam: invisível para humanos, bots preenchem */}
        <input
          name="extra"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className={`${ctaClass} w-full px-4 tracking-[0.06em]`}
        >
          {status === "sending" ? "Enviando…" : "Agendar meu diagnóstico"}
        </button>

        <div role="alert" className="empty:hidden">
          {status === "error" && (
            <p className="text-center text-sm text-accent-light">
              Não conseguimos enviar agora. Tente de novo ou{" "}
              <a
                href={WHATSAPP_FALLBACK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2"
              >
                chame no WhatsApp
              </a>
              .
            </p>
          )}
        </div>

        <p className="text-center text-xs text-cloud/60">
          Seus dados são usados só para preparar o seu diagnóstico.
        </p>
      </form>
    </div>
  );
}
