'use client';

import {motion} from "motion/react";
import ContactForm from "../components/contact/contact-form";
import ContactDetails from "../components/contact/contact-details";

export default function Contact(){
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
            <div className="bg-[#1E3A5F] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Kontakt
                    </motion.h1>
                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Skontaktuj się z nami, aby omówić szczegóły współpracy 
                        lub uzyskać wycenę dla swojego gabinetu
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </div>
        </div>

    )
}