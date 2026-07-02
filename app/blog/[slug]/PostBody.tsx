import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { urlFor } from "../../../sanity/lib/image";

// Portable Text → design-system styled components
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 text-[24px] font-semibold leading-tight text-cloud sm:text-[28px]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-[20px] font-semibold leading-snug text-cloud sm:text-[22px]">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-accent pl-6 text-lg font-medium leading-relaxed text-cloud/90">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-base leading-relaxed text-cloud/75">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-cloud/75 marker:text-accent">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-cloud/75 marker:text-accent">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-cloud">{children}</strong>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 transition-colors hover:text-accent-light"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-cloud/50">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PostBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="mx-auto max-w-[720px]">
      <PortableText value={body} components={components} />
    </div>
  );
}
