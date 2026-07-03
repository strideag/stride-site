"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function NewsletterForm() {
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
          type: "newsletter",
          email: data.get("email"),
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
    <>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Escreva seu email"
          aria-label="Seu email"
          className="w-full rounded-full border border-white/15 bg-ink-850 px-5 py-3 text-sm text-cloud placeholder:text-faint focus:border-accent focus:outline-none"
        />
        {/* Honeypot anti-spam */}
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
          className="shrink-0 rounded-full bg-cloud px-6 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm text-cloud/70">Inscrição recebida! 🎉</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-accent">
          Não foi possível enviar agora — tente novamente.
        </p>
      )}
    </>
  );
}
