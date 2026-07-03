"use client";

import { useState } from "react";

const revenueRanges = [
  "Até R$ 50 mil/mês",
  "R$ 50 mil a R$ 200 mil/mês",
  "R$ 200 mil a R$ 1 milhão/mês",
  "Acima de R$ 1 milhão/mês",
];

const inputClass =
  "w-full rounded-2xl border border-white/15 bg-ink-850 px-5 py-3.5 text-sm text-cloud placeholder:text-faint focus:border-accent focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead",
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          website: data.get("website"),
          revenue: data.get("revenue"),
          challenge: data.get("challenge"),
          extra: data.get("extra"),
        }),
      });
      if (!res.ok) throw new Error("send_failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Seu nome" aria-label="Seu nome" className={inputClass} />
        <input name="email" type="email" required placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" className={inputClass} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="company" required placeholder="Nome da empresa" aria-label="Nome da empresa" className={inputClass} />
        <input name="website" placeholder="Site da empresa (opcional)" aria-label="Site da empresa" className={inputClass} />
      </div>
      <select
        name="revenue"
        required
        defaultValue=""
        aria-label="Faturamento mensal"
        className={`${inputClass} appearance-none`}
      >
        <option value="" disabled>
          Faturamento mensal
        </option>
        {revenueRanges.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <textarea
        name="challenge"
        required
        rows={4}
        placeholder="Qual o principal desafio de crescimento da sua empresa hoje?"
        aria-label="Principal desafio"
        className={`${inputClass} resize-none`}
      />
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
        className="w-full rounded-full bg-accent px-7 py-4 text-[12px] font-medium uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_-6px_rgba(255,62,0,0.55)] transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Agendar sessão estratégica gratuita"}
      </button>
      {status === "success" && (
        <p className="text-center text-sm text-cloud/70">
          Recebemos seus dados! Entraremos em contato em até 1 dia útil. 🚀
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-accent">
          Não foi possível enviar agora. Tente novamente ou{" "}
          <a
            href="https://wa.me/5562998456804"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            chame no WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
