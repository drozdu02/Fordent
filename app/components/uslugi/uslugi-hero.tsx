"use client";

import { motion } from "motion/react";

export default function UslugiHero() {
  return (
    <div className="page-hero relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-[var(--fd-accent)] blur-3xl" />
      </div>
      <div className="container-fd relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow text-[var(--fd-accent-light)]"
        >
          Oferta
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-4 mb-5 !text-white"
        >
          Usługi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-[var(--fd-text-on-dark)]/90"
        >
          Pełen zakres prac protetycznych oraz wybrane realizacje z naszej
          pracowni.
        </motion.p>
      </div>
    </div>
  );
}
