"use client";

import "./globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "./lib/constants/nav-links";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, X, Menu } from "lucide-react";

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPageName = navLinks.find(l => l.href === pathname)?.page;

  return (
    <html lang="pl">
      <body className="min-h-screen bg-white">

        <style>{`
          :root {
            --primary: #0EA5E9;
            --primary-dark: #1E3A5F;
            --accent: #D4AF37;
          }
        `}</style>

        <div className="bg-[#1E3A5F] text-white py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +48 607 575 990
              </span>
              <span className="flex items-center gap-2">
                mdrozdowski2@tlen.pl
              </span>
            </div>

            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              ul. Damrota 38A, Wrocław
            </span>
          </div>
        </div>

        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">

              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-[#0EA5E9] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    href={link.href}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      currentPageName === link.page
                        ? "text-[#0EA5E9]"
                        : "text-gray-700 hover:text-[#0EA5E9]"
                    }`}
                  >
                    {link.name}
                    {currentPageName === link.page && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0EA5E9] rounded-full" />
                    )}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="bg-[#0EA5E9] text-white px-6 py-2.5 rounded-full 
                  text-sm font-medium hover:bg-[#1E3A5F] transition-all duration-300 shadow-lg"
                >
                  Skontaktuj się z nami
                </Link>
              </div>

              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    href={link.href}
                    className={`block py-2 text-base font-medium ${
                      currentPageName === link.page
                        ? "text-[#0EA5E9]"
                        : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        <main>{children}</main>

        <footer className="bg-[#1E3A5F] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">F</span>
                  </div>
                  <span className="text-xl font-bold">FORDENT</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Profesjonalna pracownia techniki dentystycznej z wieloletnim doświadczeniem. 
                  Tworzymy precyzyjne uzupełnienia protetyczne najwyższej jakości.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4 text-[#D4AF37]">Kontakt</h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                    ul. Damrota 38A, Wrocław
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0EA5E9]" />
                    +48 607 575 990
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#0EA5E9]" />
                    mdrozdowski2@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-[#D4AF37]">Godziny otwarcia</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Poniedziałek - Piątek: 8:00 - 16:00</p>
                  <p>Sobota: 9:00 - 13:00</p>
                  <p>Niedziela: Zamknięte</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} FORDENT. Wszelkie prawa zastrzeżone.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
