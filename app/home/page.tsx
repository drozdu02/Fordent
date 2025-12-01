import AboutSection from "../components/home/about-section";
import CTASection from "../components/home/cta-section";
import HeroSection from "../components/home/hero-section";
import ServicesSection from "../components/home/services-sections";

export default function HomePage() {
    return(
        <div>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <CTASection />
        </div>
    )
}