import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "./lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stride — Marketing de performance para empresas de tecnologia",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Agência de marketing digital que ajuda empresas tech e B2B a escalarem receita com tráfego pago, SEO, CRO e consultoria de growth. Mais de R$300 milhões em vendas geradas para clientes.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/stride-logo.svg`,
  description:
    "Agência de marketing digital de performance que ajuda empresas de tecnologia a escalarem receita.",
  founder: [
    { "@type": "Person", name: "Thiago Bueno" },
    { "@type": "Person", name: "Leonardo Lins" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
      </body>
    </html>
  );
}
