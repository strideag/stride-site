import Script from "next/script";

// GA4 + Meta Pixel, only rendered when their IDs are configured. The inline
// stubs create the event queues right away; the heavy vendor scripts load at
// idle time (lazyOnload) so they never compete with the first paint on 4G.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim();
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

const ga4 = GA4_ID && /^G-[A-Z0-9]+$/i.test(GA4_ID) ? GA4_ID : null;
const pixel = PIXEL_ID && /^\d+$/.test(PIXEL_ID) ? PIXEL_ID : null;

export default function Tracking() {
  return (
    <>
      {ga4 && (
        <>
          <Script id="bni-ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga4}');`}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
            strategy="lazyOnload"
          />
        </>
      )}
      {pixel && (
        <>
          <Script id="bni-pixel" strategy="afterInteractive">
            {`!function(f){if(f.fbq)return;var n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[]}(window);fbq('init','${pixel}');fbq('track','PageView');`}
          </Script>
          <Script
            src="https://connect.facebook.net/en_US/fbevents.js"
            strategy="lazyOnload"
          />
        </>
      )}
    </>
  );
}
