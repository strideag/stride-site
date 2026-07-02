// Sanity project settings — set these in .env.local (see .env.local.example).
// The blog renders an empty state and the Studio shows setup instructions
// until NEXT_PUBLIC_SANITY_PROJECT_ID is configured.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2025-06-01";

export const sanityConfigured = projectId.length > 0;
