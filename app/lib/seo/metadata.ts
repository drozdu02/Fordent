import type { Metadata } from "next";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/app/lib/constants/site";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path: string;
};

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
}: PageMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;

  const ogTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "pl_PL",
      type: "website",
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
      title: ogTitle,
      description,
      images: ["/android-chrome-512x512.png"],
    },
  };
}
