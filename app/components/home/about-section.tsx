'use client';

import { features } from "@/app/lib/constants/features";
import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
    return(
        <section className="py-24 bg-linear-to-br from-slate-50 to-sky-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <Image
                                height={192}
                                width={400}
                                src=""
                                alt="Praca w laboratorium"
                                className="rounded-2xl shadow-lg h-48 w-full object-cover"
                                />
                                <Image
                                height={192}
                                width={400}
                                src=""
                                alt="Precyzyjne narzędzia"
                                className="rounded-2xl shadow-lg h-64 w-full object-cover"
                                />
                            </div>
                            <div className="pt-8 space-y-4">
                                <Image 
                                height={192}
                                width={400}
                                src=""
                                alt="Nowoczesny sprzęt"
                                className="rounded-2xl shadow-lg h-64 w-full object-cover"
                                />
                                <Image
                                height={192}
                                width={400}
                                src=""
                                alt="Detale pracy"
                                className="rounded-2xl shadow-lg h-48 w-full object-cover"
                                />
                            </div>
                        </div>
                        <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-6 -right-6 bg-[#1E3A5F] text-white p-6 rounded-2xl shadow-2xl"
                        >

                            <p className="text-4xl font-bold">20+</p>
                            <p className="text-sm text-gray-300">Lat doświadczenia</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    >
                        <span className="text-[#0EA5E9] font-medium text-sm uppercase tracking-wider">
                            O nas
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-4 mb-6">
                            Pasja i precyzja w każdej pracy
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            FORDENT to nowoczesna pracownia techniki dentystycznej, która łączy 
                            tradycyjne rzemiosło z najnowszymi technologiami. Od ponad 20 lat 
                            tworzymy uzupełnienia protetyczne, które wyróżniają się perfekcyjnym 
                            dopasowaniem i naturalnym wyglądem.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Nasz zespół doświadczonych techników dentystycznych nieustannie 
                            doskonali swoje umiejętności, uczestnicząc w szkoleniach i konferencjach. 
                            Współpracujemy z najlepszymi producentami materiałów dentystycznych, 
                            gwarantując najwyższą jakość naszych produktów.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                                >

                                    <CheckCircle className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    )
}
