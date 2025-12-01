'use client';
import { services } from "@/app/lib/constants/services";
import { motion } from "motion/react";

export default function ServicesSection() {
    return(
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className="text-[#0EA5E9] font-medium text-sm uppercase tracking-wider"
                    >
                        Nasze usługi
                    </motion.span>
                    <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-4 mb-6"
                    >
                        Pełen zakres usług protetycznych
                    </motion.h2>
                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-lg"
                    >
                        Oferujemy kompleksowe rozwiązania z zakresu techniki dentystycznej, 
                        wykorzystując najnowsze technologie i materiały najwyższej jakości.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#0EA5E9] to-[#1E3A5F] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
    
}