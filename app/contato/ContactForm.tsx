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

// The form composes a WhatsApp message — conversion happens in the channel
// the team already answers, with zero backend. Swap for RD Station later.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      "Olá! Quero agendar uma sessão estratégica gratuita.",
      "",
      `Nome: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Empresa: ${data.get("company")}`,
      data.get("website") ? `Site: ${data.get("website")}` : null,
      `Faturamento mensal: ${data.get("revenue")}`,
      "",
      `Principal desafio: ${data.get("challenge")}`,
    ].filter((l) => l !== null);

    const url = `https://wa.me/5562998456804?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
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
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-7 py-4 text-[12px] font-medium uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_-6px_rgba(255,62,0,0.55)] transition-colors hover:bg-accent-dark"
      >
        Agendar sessão estratégica gratuita
      </button>
      {sent && (
        <p className="text-center text-sm text-cloud/70">
          Abrimos o WhatsApp com a sua mensagem pronta — é só enviar! 🚀
        </p>
      )}
    </form>
  );
}
