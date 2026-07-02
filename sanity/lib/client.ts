import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, sanityConfigured } from "../env";

export { sanityConfigured };

// Guarded: only used when sanityConfigured is true.
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});
