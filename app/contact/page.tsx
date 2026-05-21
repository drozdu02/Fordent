"use client";

import { motion } from "motion/react";
import ContactForm from "../components/contact/contact-form";
import ContactDetails from "../components/contact/contact-details";

export default function Contact() {
  return (
    <div className="min-h-screen bg-surface-fd">
      <div className="page-hero relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-[var(--fd-accent)] blur-3xl" />
        </div>
        <div className="container-fd relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow text-[var(--fd-accent-light)]"
          >
            Kontakt
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 mb-5 !text-white"
          >
            Porozmawiajmy o współpracy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[var(--fd-text-on-dark)]/90"
          >
            Skontaktuj się z nami, aby omówić szczegóły współpracy lub uzyskać
            wycenę dla swojego gabinetu
          </motion.p>
        </div>
      </div>

      <div className="container-fd section-padding-sm">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
