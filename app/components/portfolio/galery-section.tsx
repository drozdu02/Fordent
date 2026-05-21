"use client";

import { useState } from "react";
import { staticPortfolioItems } from "@/app/lib/constants/portfolio-items";
import PortfolioGalery from "./portfolio-galery";

export default function GalerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <div className="container-fd section-padding-sm">
      <PortfolioGalery
        items={staticPortfolioItems}
        activateFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
    </div>
  );
}
