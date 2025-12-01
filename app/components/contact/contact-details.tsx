import {motion} from "motion/react";
import { contactDetails } from "@/app/lib/constants/contact-details";
export default function ContactDetails(){
    return(
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="space-y-6"
        >
            <div className="bg-[#1E3A5F] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Dane kontaktowe</h3>

                <div className="space-y-6">
                    {contactDetails.map((detail, index) => (
                        <motion.div
                        key={detail.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4"
                        >
                            <div className={`w-12 h-12 ${detail.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <detail.icon className={`w-6 h-6 ${detail.iconColor}`} />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">
                                    {detail.title}
                                </h4>
                                {detail.lines.map((line, i) => (
                                    <p key={i} className="text-gray-300 text-sm">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl h-[300px]">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.798283527546!2d21.012289!3d52.229676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sWarszawa!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Fordent"
                
                />
            </div>
        </motion.div>
    );
}