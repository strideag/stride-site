import { groq } from "next-sanity";
import { client, sanityConfigured } from "./client";
import type { PortableTextBlock } from "@portabletext/react";

export type PostCard = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: { asset?: unknown; alt?: string } | null;
  publishedAt: string;
  author: { name: string; role?: string } | null;
  categories: { title: string; slug: string }[] | null;
};

export type Post = PostCard & {
  body: PortableTextBlock[];
  seo: { metaTitle?: string; metaDescription?: string } | null;
};

const postCardFields = groq`
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  "author": author->{name, role},
  "categories": categories[]->{title, "slug": slug.current}
`;

const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${postCardFields}
  }
`;

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postCardFields},
    body,
    seo
  }
`;

const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

export async function getPosts(): Promise<PostCard[]> {
  if (!sanityConfigured) return [];
  return client.fetch(postsQuery);
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!sanityConfigured) return null;
  return client.fetch(postQuery, { slug });
}

export async function getPostSlugs(): Promise<string[]> {
  if (!sanityConfigured) return [];
  return client.fetch(postSlugsQuery);
}
