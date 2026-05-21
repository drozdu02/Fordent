"use client";

import Image from "next/image";
import { features } from "@/app/lib/constants/features";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const aboutImages = [
  {
    src: "/korona.png",
    alt: "Korona porcelanowa — praca protetyczna",
    className: "h-44 sm:h-52",
  },
  {
    src: "/most.png",
    alt: "Most protetyczny — praca protetyczna",
    className: "h-56 sm:h-64",
  },
  {
    src: "/licowki.png",
    alt: "Licówki porcelanowe — praca protetyczna",
    className: "h-56 sm:h-64",
  },
  {
    src: "/proteza.png",
    alt: "Proteza — praca protetyczna",
    className: "h-44 sm:h-52",
  },
] as const;

function AboutImageTile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[var(--fd-border-light)] bg-white shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 45vw, 280px"
        className="object-contain p-3"
      />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="section-padding bg-surface-tint-fd">
      <div className="container-fd">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <AboutImageTile {...aboutImages[0]} />
                <AboutImageTile {...aboutImages[1]} />
              </div>
              <div className="space-y-4 pt-10">
                <AboutImageTile {...aboutImages[2]} />
                <AboutImageTile {...aboutImages[3]} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">O nas</span>
            <h2 className="mt-3 mb-6">Pasja i precyzja w każdej pracy</h2>

            <p className="mb-6 text-lg leading-relaxed text-muted-fd">
              FORDENT to nowoczesna pracownia techniki dentystycznej, która łączy
              tradycyjne rzemiosło z najnowszymi technologiami. Tworzymy
              uzupełnienia protetyczne o perfekcyjnym dopasowaniu i naturalnym
              wyglądzie.
            </p>
            <p className="mb-10 leading-relaxed text-muted-fd">
              Nasz zespół doświadczonych techników nieustannie doskonali
              umiejętności na szkoleniach i konferencjach. Współpracujemy z
              uznanymi producentami materiałów dentystycznych.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-[var(--fd-border-light)] bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--fd-accent)]" />
                  <span className="text-sm font-medium leading-snug text-[var(--fd-text)]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
