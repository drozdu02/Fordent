"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="page-hero absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[var(--fd-accent)] blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-fd relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mx-auto mb-6 max-w-3xl !text-white">
            Potrzebujesz profesjonalnych uzupełnień protetycznych?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--fd-text-on-dark)]/90">
            Skontaktuj się z nami, aby omówić szczegóły współpracy. Oferujemy
            konkurencyjne warunki i terminową realizację zleceń dla gabinetów
            stomatologicznych.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[var(--fd-navy)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Napisz do nas
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+48607575990"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              +48 607 575 990
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
