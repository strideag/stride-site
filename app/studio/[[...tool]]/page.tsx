import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import { metadata as studioMetadata, viewport } from "next-sanity/studio";
import config from "../../../sanity.config";
import { sanityConfigured } from "../../../sanity/env";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Stride — Studio",
  robots: { index: false, follow: false },
};

export { viewport };

export const dynamic = "force-static";

export default function StudioPage() {
  if (!sanityConfigured) {
    return (
      <div className="mx-auto flex min-h-screen max-w-[640px] flex-col justify-center gap-4 px-6 py-20">
        <h1 className="text-2xl font-semibold text-cloud">
          Sanity Studio — configuração pendente
        </h1>
        <p className="text-base leading-relaxed text-cloud/70">
          Para ativar o blog, crie um projeto gratuito em{" "}
          <a href="https://www.sanity.io/manage" className="text-accent underline">
            sanity.io/manage
          </a>{" "}
          e defina as variáveis no <code className="text-accent">.env.local</code>:
        </p>
        <pre className="rounded-2xl border border-white/10 bg-ink-850 p-5 text-sm text-cloud/80">
          {`NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id\nNEXT_PUBLIC_SANITY_DATASET=production`}
        </pre>
        <p className="text-sm leading-relaxed text-cloud/50">
          Depois reinicie o servidor. O Studio carrega nesta mesma rota (/studio)
          e o blog passa a listar os posts publicados.
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
