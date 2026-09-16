// Conversion events for the /bni form. Both gtag and fbq are queue stubs
// defined inline by <Tracking />, so events fired before the external scripts
// finish loading are still delivered. Without IDs configured these are no-ops.

type Tracker = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Tracker;
    fbq?: Tracker;
  }
}

export function trackLead(params: Record<string, string | undefined>) {
  try {
    window.gtag?.("event", "generate_lead", {
      form_id: "diagnostico_funil",
      ...params,
    });
  } catch {}
  try {
    window.fbq?.("track", "Lead", { content_name: "Diagnóstico de Funil" });
  } catch {}
}
