import { motion } from "motion/react";
import { contactDetails } from "@/app/lib/constants/contact-details";

export default function ContactDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="space-y-6"
    >
      <div className="rounded-2xl bg-[var(--fd-navy)] p-8 text-white md:p-10">
        <h3 className="mb-2 !text-white">Dane kontaktowe</h3>
        <p className="mb-8 text-sm text-slate-300">
          Jesteśmy do dyspozycji w godzinach pracy pracowni.
        </p>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + index * 0.08 }}
              className="flex items-start gap-4"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${detail.color}`}
              >
                <detail.icon className={`h-5 w-5 ${detail.iconColor}`} />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-white">{detail.title}</h4>
                {detail.lines.map((line, i) => (
                  <p key={i} className="text-sm text-slate-300">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-[300px] overflow-hidden rounded-2xl border border-[var(--fd-border-light)] shadow-[0_4px_24px_rgba(10,40,64,0.08)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.0267757408806!2d17.054118612428177!3d51.12641413834583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe90061acfe75%3A0xade40dd4f3f9ae9a!2sFordent%20Pracownia%20Techniki%20Dentystycznej!5e0!3m2!1spl!2spl!4v1779379355206!5m2!1spl!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Fordent Pracownia Techniki Dentystycznej — Wrocław"
        />
      </div>
    </motion.div>
  );
}
