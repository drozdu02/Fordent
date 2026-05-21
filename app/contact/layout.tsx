import { createPageMetadata } from "@/app/lib/seo/metadata";
import { RootLayoutProps } from "@/app/lib/interfaces/root-interface";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Skontaktuj się z FORDENT we Wrocławiu — ul. Damrota 38A, tel. +48 607 575 990, formularz i mapa dojazdu.",
  path: "/contact",
});

export default function ContactLayout({ children }: RootLayoutProps) {
  return children;
}
