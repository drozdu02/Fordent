"use client";

import { serviceCategories } from "@/app/lib/constants/services";
import { motion } from "motion/react";
import SectionHeader from "../ui/section-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="zakres-uslug" className="section-padding-sm bg-surface-fd">
      <div className="container-fd">
        <SectionHeader
          compact
          eyebrow="Nasze usługi"
          title="Zakres prac protetycznych"
          description="Realizujemy zlecenia dla gabinetów stomatologicznych."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-xl border border-[var(--fd-border-light)] bg-white px-5 py-6 md:px-8 md:py-7"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-7">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                <h3 className="mb-2.5 border-b border-[var(--fd-border-light)] pb-2 text-[15px] font-semibold text-[var(--fd-navy)]">
                  {category.title}
                </h3>
                <ul className="space-y-1 text-sm leading-relaxed text-muted-fd">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link href="/contact" className="btn-outline-fd text-sm">
            Zapytaj o wycenę
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
