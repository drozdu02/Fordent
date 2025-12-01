'use client';

import {motion} from "motion/react";
export default function PortfolioHeader(){
    return (
        <div className="bg-[#1E3A5F] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Nasze portfolio
                </motion.h1>
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                    Zobacz nasze prace protetyczne wykonane z najwysza starannoscia i precyzja, ktore przywrocily usmiech i pewnosc siebie naszym pacjentom.
                </motion.p>
            </div>
        </div>
    )
}