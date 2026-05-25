"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/app/lib/constants/nav-links";
import { MapPin, Mail, Phone, X, Menu } from "lucide-react";
import { RootLayoutProps } from "@/app/lib/interfaces/root-interface";

export default function SiteShell({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPageName = navLinks.find((l) => l.href === pathname)?.page;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[var(--fd-border-light)] bg-white/95 shadow-[0_1px_0_rgba(10,40,64,0.04),0_8px_32px_rgba(10,40,64,0.06)] backdrop-blur-md">
        <div className="container-fd">
          <div className="flex h-[5rem] items-center justify-between gap-6">
            <Link href="/" className="group shrink-0">
              <span className="block text-[1.35rem] font-bold leading-tight tracking-tight text-[var(--fd-navy)] transition-colors group-hover:text-[var(--fd-accent)]">
                FORDENT
              </span>
              <span className="mt-0.5 block text-[11px] font-medium leading-snug tracking-wide text-muted-fd sm:text-xs">
                pracownia techniki dentystycznej
              </span>
            </Link>

            <div className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  href={link.href}
                  className={
                    currentPageName === link.page
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="shrink-0 rounded-xl p-2.5 text-[var(--fd-navy)] transition-colors hover:bg-[var(--fd-surface-tint)] lg:hidden"
              aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--fd-border-light)] bg-white lg:hidden">
            <div className="container-fd space-y-1 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    currentPageName === link.page
                      ? "bg-[var(--fd-accent-pale)] text-[var(--fd-accent)]"
                      : "text-[var(--fd-text)] hover:bg-[var(--fd-surface-tint)]"
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

      <footer className="bg-[var(--fd-navy)] text-white">
        <div className="container-fd pt-16 pb-10 md:pt-20 md:pb-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            <div>
              <p className="mb-1 text-2xl font-bold tracking-tight">FORDENT</p>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--fd-accent-light)]">
                Pracownia protetyczna
              </p>
              <p className="text-sm leading-relaxed text-slate-300/90">
                Profesjonalna pracownia techniki dentystycznej z
                wieloletnim doświadczeniem. Tworzymy precyzyjne uzupełnienia
                protetyczne najwyższej jakości.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fd-accent-light)]">
                Kontakt
              </h4>
              <div className="space-y-4 text-sm text-slate-300">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--fd-accent)]" />
                  ul. Damrota 38A, Wrocław
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[var(--fd-accent)]" />
                  <a
                    href="tel:+48607575990"
                    className="transition-colors hover:text-white"
                  >
                    +48 607 575 990
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[var(--fd-accent)]" />
                  <a
                    href="mailto:pracowniafordent@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    pracowniafordent@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fd-accent-light)]">
                Godziny otwarcia
              </h4>
              <div className="space-y-2.5 text-sm text-slate-300">
                <p>Poniedziałek – Piątek: 8:00 – 16:00</p>
                <p>Sobota: 9:00 – 13:00</p>
                <p>Niedziela: zamknięte</p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} FORDENT. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
