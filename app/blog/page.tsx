import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import { getPosts } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";
import { SITE_URL } from "../lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — growth, tráfego e marketing de performance",
  description:
    "Conteúdo prático sobre growth, tráfego pago, SEO, CRO e marketing de performance para empresas de tecnologia e B2B.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
    new Date(iso)
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog da Stride",
    url: `${SITE_URL}/blog`,
    description:
      "Conteúdo prático sobre growth, tráfego pago, SEO, CRO e marketing de performance.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-16 pb-14 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]" />
          </div>
          <Container className="relative">
            <p className="text-sm font-medium text-accent">Blog</p>
            <h1 className="mt-3 max-w-[820px] text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[44px]">
              Growth, tráfego e performance na prática
            </h1>
            <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-cloud/80">
              O que aprendemos escalando receita para empresas de tecnologia —
              sem métricas de vaidade.
            </p>
          </Container>
        </section>

        {/* Posts grid / empty state */}
        <section className="pb-20">
          <Container>
            {posts.length === 0 ? (
              <div className="rounded-3xl border border-white/10 bg-ink-850/40 p-12 text-center">
                <p className="text-lg font-medium text-cloud">
                  Os primeiros artigos estão a caminho 🚀
                </p>
                <p className="mx-auto mt-3 max-w-[480px] text-sm leading-relaxed text-cloud/60">
                  Enquanto isso, veja nossos{" "}
                  <Link href="/cases" className="text-accent hover:underline">
                    cases de sucesso
                  </Link>{" "}
                  ou{" "}
                  <Link href="/contato" className="text-accent hover:underline">
                    agende uma sessão estratégica gratuita
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="reveal group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 transition-all hover:border-accent/60 hover:shadow-[0_6px_48px_rgba(255,62,0,0.1)]"
                  >
                    {post.coverImage?.asset ? (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={urlFor(post.coverImage).width(800).height(450).url()}
                          alt={post.coverImage.alt ?? post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-6">
                      {post.categories?.[0] && (
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                          {post.categories[0].title}
                        </p>
                      )}
                      <h2 className="mt-2 text-lg font-semibold leading-snug text-cloud">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-cloud/60">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-xs text-cloud/40">
                        {post.author?.name && `${post.author.name} · `}
                        {formatDate(post.publishedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Container>
        </section>

        <CtaBanner
          title="Prefere resultados a teoria? Agende uma sessão estratégica gratuita"
          buttonLabel="Agendar uma conversa"
        />
      </main>
      <Footer />
    </>
  );
}
