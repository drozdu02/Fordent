import { createPageMetadata } from "@/app/lib/seo/metadata";
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
      <UslugiHero />
      <ServicesSection />
      {/* <PortfolioSection /> */}
    </div>
  );
}
