import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";
import CtaBanner from "../../components/sections/CtaBanner";
import Container from "../../components/ui/Container";
import PostBody from "./PostBody";
import { getPost, getPostSlugs } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";
import { SITE_URL } from "../../lib/site";

export const revalidate = 60;

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.seo?.metaTitle ?? post.title;
  const description = post.seo?.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage?.asset
        ? [{ url: urlFor(post.coverImage).width(1200).height(630).url() }]
        : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
    new Date(iso)
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.author?.name
      ? { author: { "@type": "Person", name: post.author.name } }
      : {}),
    ...(post.coverImage?.asset
      ? { image: urlFor(post.coverImage).width(1200).height(630).url() }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "Stride",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/stride-logo.svg` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Navbar />
      <main className="flex-1">
        {/* Post hero */}
        <section className="relative pt-16 pb-10 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]" />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-[820px]">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/blog"
                  className="text-sm text-cloud/50 transition-colors hover:text-cloud"
                >
                  ← Blog
                </Link>
                {post.categories?.map((c) => (
                  <span
                    key={c.slug}
                    className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-cloud/60"
                  >
                    {c.title}
                  </span>
                ))}
              </div>
              <h1 className="mt-6 text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-cloud sm:text-[38px] lg:text-[44px]">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-cloud/70">
                {post.excerpt}
              </p>
              <p className="mt-5 text-sm text-cloud/40">
                {post.author?.name && (
                  <>
                    <span className="font-medium text-cloud/70">{post.author.name}</span>
                    {post.author.role && ` — ${post.author.role}`}
                    {" · "}
                  </>
                )}
                {formatDate(post.publishedAt)}
              </p>
            </div>

            {post.coverImage?.asset ? (
              <div className="relative mx-auto mt-10 aspect-[16/8] max-w-[1000px] overflow-hidden rounded-3xl">
                <Image
                  src={urlFor(post.coverImage).width(2000).url()}
                  alt={post.coverImage.alt ?? post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            ) : null}
          </Container>
        </section>

        {/* Body */}
        <section className="pb-16">
          <Container>
            <PostBody body={post.body} />
          </Container>
        </section>

        <CtaBanner
          title="Gostou do conteúdo? Veja o que podemos fazer pela sua receita"
          buttonLabel="Agendar uma conversa"
        />
      </main>
      <Footer />
    </>
  );
}
