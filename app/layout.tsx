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
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE} | Wrocław`,
    description: DEFAULT_DESCRIPTION,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
