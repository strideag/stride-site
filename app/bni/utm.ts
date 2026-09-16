// Attribution for the /bni page: UTMs from the URL (QR code link) persisted in
// sessionStorage so a reload — or the URL losing its query — keeps the origin.
// Reads window.location directly instead of useSearchParams so the page stays
// fully static (no Suspense bailout).

const STORAGE_KEY = "stride:bni:attribution";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type Attribution = Partial<
  Record<(typeof UTM_KEYS)[number] | "referrer", string>
>;

let cache: Attribution | null = null;

export function readAttribution(): Attribution {
  if (cache) return cache;
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim();
    if (value) fromUrl[key] = value.slice(0, 200);
  }

  let stored: Attribution = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {}

  const referrer = document.referrer || stored.referrer;
  cache = Object.keys(fromUrl).length
    ? { ...fromUrl, ...(referrer && { referrer }) }
    : { ...stored, ...(referrer && { referrer }) };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch {}
  return cache;
}

export const isBniSource = () =>
  /bni/i.test(readAttribution().utm_source ?? "");
