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

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "pl_PL",
      type: "website",
    },
  };
}
