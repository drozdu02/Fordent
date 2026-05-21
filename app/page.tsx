import { createPageMetadata } from "@/app/lib/seo/metadata";
import AboutSection from "./components/home/about-section";
import CTASection from "./components/home/cta-section";
import HeroSection from "./components/home/hero-section";
import TrustStrip from "./components/home/trust-strip";

export const metadata = createPageMetadata({
  title: "Pracownia techniki dentystycznej we Wrocławiu",
  description:
    "FORDENT — profesjonalna pracownia protetyczna. Korony, mosty, implanty, protezy i CAD/CAM dla gabinetów stomatologicznych.",
  path: "/",
});

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <CTASection />
    </div>
  );
}
