import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/app/components/layout/site-shell";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/app/lib/constants/site";
import { RootLayoutProps } from "@/app/lib/interfaces/root-interface";
import JsonLd from "@/app/components/seo/json-ld";
import { buildSiteJsonLd } from "@/app/lib/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE} | Wrocław`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE} | Wrocław`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — ${SITE_TAGLINE} | Wrocław`,
    description: DEFAULT_DESCRIPTION,
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-white">
        <JsonLd data={buildSiteJsonLd()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
