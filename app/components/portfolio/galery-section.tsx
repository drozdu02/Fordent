'use client';

import { useState } from "react";
import { staticPortfolioItems } from "@/app/lib/constants/portfolio-items";
import PortfolioGalery from "./portfolio-galery";
export default function GalerySection(){

    const [activeFilter, setActiveFilter] = useState<string>("all");

    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <PortfolioGalery
            items={staticPortfolioItems}
            activateFilter={activeFilter}
            onFilterChange={setActiveFilter}
            />
        </div>

    )
}