'use client';

import {motion} from "motion/react"
import Link from "next/link"
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-24 bg-[#1E3A5F] relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl"/>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"/>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Potrzebujesz profesjonalnych
                    </h2>
                    <span className="block text-[#0EA5E9]">
                        uzupełnień protetycznych?
                    </span>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Skontaktuj się z nami, aby omówić szczegóły współpracy. 
                        Oferujemy konkurencyjne ceny i terminową realizację zleceń.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#1E3A5F] transition-all duration-300">
                            Napisz do nas
                            <ArrowRight className="w-5 h-5"/>
                        </Link>
                        <a
                        href="tel:+48607575990"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white hover:text-[#1E3A5F] transition-all duration-300"
                        >
                            <Phone className="w-5 h-5"/>
                            +48 607 575 990
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}