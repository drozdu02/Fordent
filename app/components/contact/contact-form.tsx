'use client';

import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);


        try{
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            }else{
                console.error('Błąd podczas wysyłania wiadomości:', data.message);
            }
        }catch(error){
            console.error('Błąd podczas wysyłania wiadomości:', error);
        }finally{
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 shadow-xl text-center"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                    Wiadomość wysłana!
                </h3>
                <p className="text-gray-600 mb-6">
                    Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                </p>
                <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#0EA5E9] hover:bg-[#1E3A5F]"
                >
                    Wyślij kolejną wiadomość
                </Button>
            </motion.div>

        );
    }

    return(
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-xl"
        >
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Wyślij wiadomość
            </h3>
            <form 
            onSubmit={handleSubmit}
            className="space-y-6"
            >
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Imię i nazwisko *
                        </Label>
                        <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Jan Kowalski"
                        required
                        className="h-12 rounded-xl border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="jan.kowalski@example.com"
                        required
                        className="h-12 rounded-xl border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+48 123 456 789"
                    className="h-12 rounded-xl border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Wiadomość *</Label>
                    <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Napisz swoją wiadomość tutaj..."
                    required
                    rows={5}
                    className="rounded-xl border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9] resize-none"
                    />
                </div>
                <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[#0EA5E9] hover:bg-[#1E3A5F] text-lg font-medium rounded-xl shadow-lg shadow-sky-200 transition-all duration-300"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Wysyłanie...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5 mr-2" />
                            Wyślij wiadomość
                        </>
                    
                    )}
                </Button>
            </form>
        </motion.div>
    );
}