import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/constants/site";

const routes = ["/", "/uslugi", "/contact", "/polityka-prywatnosci"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/uslugi" ? 0.9 : 0.7,
  }));
}
