'use client';

import Link from "next/link";
import { motion } from "motion/react"
import { Award, Clock, Shield } from 'lucide-react';
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-sky-50">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8}}
                    >
                        <span className="inline-flex items-center gap-2 bg-sky-100 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-medium mb-6" >
                            <Award className="w-4 h-4" />
                            Ponad 20 lat doświadczenia
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] leading-tight mb-6">
                            <span className="block text-[#0EA5E9]">W kazdym detalu</span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            Specjalizujemy się w ...
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A5F] px-8 py-4 rounded-full font-medium border-2 border-gray-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all duration-300"
                            >
                                Skontaktuj się
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
                            <div>
                                <p className="text-3xl font-bold text-[#1E3A5F]">20+</p>
                                <p className="text-sm text-gray-500">Lat doświadczenia</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#1E3A5F]">XXXX+</p>
                                <p className="text-sm text-gray-500">Wykonanych</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#1E3A5F]">100%</p>
                                <p className="text-sm text-gray-500">Zadowolonych klientów</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                            height={500}
                            width={1200}
                            src=""
                            alt="Hero Image"
                            className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#1E3A5F]/30 to-transparent" />
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.6}}
                    className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-[#1E3A5F]">Gwarancja jakości</p>
                                <p className="text-sm text-gray-500">Najwyższe standardy wykonania</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.8}}
                    className="absolute -right-6 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6 text-[#0EA5E9]"/>
                            </div>
                            <div>
                                <p className="font-semibold text-[#1E3A5F]">Szybka realizacja</p>
                                <p className="text-sm text-gray-500">Terminowa realizacja</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}