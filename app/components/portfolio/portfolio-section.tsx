"use client";

import SectionHeader from "../ui/section-header";
import GalerySection from "./galery-section";

export default function PortfolioSection() {
  return (
    <section className="border-t border-[var(--fd-border-light)] bg-white pb-4">
      <div className="container-fd pt-12 md:pt-16">
        <SectionHeader
          compact
          eyebrow="Portfolio"
          title="Nasze realizacje"
          description="Wybrane prace protetyczne wykonane z najwyższą starannością i precyzją."
        />
      </div>
      <GalerySection />
    </section>
  );
}
