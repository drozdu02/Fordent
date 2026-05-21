import JsonLd from "@/app/components/seo/json-ld";
import { createPageMetadata } from "@/app/lib/seo/metadata";
import { buildServicesJsonLd } from "@/app/lib/seo/json-ld";
import ServicesSection from "../components/home/services-sections";
import PortfolioSection from "../components/portfolio/portfolio-section";
import UslugiHero from "../components/uslugi/uslugi-hero";

export const metadata = createPageMetadata({
  title: "Usługi protetyczne",
  description:
    "Korony i mosty, implanty, wkłady, protezy, szyny, diagnostyka i CAD/CAM — pełna oferta pracowni FORDENT we Wrocławiu.",
  path: "/uslugi",
});

export default function UslugiPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={buildServicesJsonLd()} />
      <UslugiHero />
      <ServicesSection />
      {/* <PortfolioSection /> */}
    </div>
  );
}
