"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-mesh relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[var(--fd-accent)]/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--fd-navy)]/5 blur-3xl" />

      <div className="container-fd relative section-padding pb-16 md:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h1 className="mb-6">
              Protetyka
              <span className="mt-3 block bg-gradient-to-r from-[var(--fd-accent)] to-[var(--fd-navy-mid)] bg-clip-text text-transparent">
                w każdym detalu
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-fd">
              Nowoczesna pracownia techniki dentystycznej we Wrocławiu.
              Wykonujemy uzupełnienia protetyczne najwyższej jakości —
              dla gabinetów, które stawiają na estetykę i niezawodność.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary-fd">
                Skontaktuj się
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/uslugi" className="btn-outline-fd">
                Zobacz usługi
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-[var(--fd-border-light)] bg-white shadow-[0_24px_64px_rgba(10,40,64,0.12)]">
              <Image
                src="/fordent-strona-glowna.png"
                alt="Pracownia protetyczna Fordent — precyzyjna praca technika dentystycznego"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--fd-navy)]/15 via-transparent to-transparent" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
