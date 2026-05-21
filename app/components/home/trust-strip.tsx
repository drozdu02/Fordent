"use client";

import { motion } from "motion/react";
import { Clock, Microscope, Shield } from "lucide-react";

const items = [
  {
    icon: Microscope,
    title: "Technologia CAD/CAM",
    description: "Cyfrowa precyzja na każdym etapie produkcji",
  },
  {
    icon: Shield,
    title: "Materiały certyfikowane",
    description: "Współpraca z uznanymi producentami",
  },
  {
    icon: Clock,
    title: "Terminowa realizacja",
    description: "Rzetelne harmonogramy dla gabinetów",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--fd-border-light)] bg-white py-10 md:py-12">
      <div className="container-fd">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="icon-box-fd">
                <item.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[var(--fd-navy)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-snug text-muted-fd">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
