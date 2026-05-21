"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError("Zgoda na przetwarzanie danych jest wymagana.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, consent }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
      } else {
        setError(data.message ?? "Nie udało się wysłać wiadomości.");
      }
    } catch {
      setError("Wystąpił błąd połączenia. Spróbuj ponownie później.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-fd p-10 text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--fd-accent-pale)]">
          <CheckCircle className="h-8 w-8 text-[var(--fd-accent)]" />
        </div>
        <h3 className="mb-3">Wiadomość wysłana!</h3>
        <p className="mb-8 text-muted-fd">
          Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setConsent(false);
            setError(null);
          }}
          className="rounded-xl bg-[var(--fd-accent)] hover:bg-[var(--fd-accent-hover)]"
        >
          Wyślij kolejną wiadomość
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-fd p-8 md:p-10"
    >
      <h3 className="mb-2">Wyślij wiadomość</h3>
      <p className="mb-8 text-sm text-muted-fd">
        Wypełnij formularz — oddzwonimy lub odpowiemy mailowo.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Imię i nazwisko *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Jan Kowalski"
              required
              className="h-12 rounded-xl border-[var(--fd-border)] focus:border-[var(--fd-accent)] focus:ring-[var(--fd-accent)]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="jan.kowalski@example.com"
              required
              className="h-12 rounded-xl border-[var(--fd-border)] focus:border-[var(--fd-accent)] focus:ring-[var(--fd-accent)]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+48 123 456 789"
            className="h-12 rounded-xl border-[var(--fd-border)] focus:border-[var(--fd-accent)] focus:ring-[var(--fd-accent)]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Wiadomość *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Napisz swoją wiadomość tutaj..."
            required
            rows={5}
            className="resize-none rounded-xl border-[var(--fd-border)] focus:border-[var(--fd-accent)] focus:ring-[var(--fd-accent)]"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (e.target.checked) setError(null);
            }}
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--fd-border)] accent-[var(--fd-accent)]"
          />
          <label htmlFor="consent" className="text-sm leading-snug text-muted-fd">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            udzielenia odpowiedzi na zapytanie, zgodnie z{" "}
            <Link
              href="/polityka-prywatnosci"
              className="font-medium text-[var(--fd-accent)] underline-offset-2 hover:underline"
            >
              polityką prywatności
            </Link>
            . <span className="text-[var(--fd-navy)]">*</span>
          </label>
        </div>

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || !consent}
          className="h-12 w-full rounded-xl bg-[var(--fd-accent)] text-base font-semibold hover:bg-[var(--fd-accent-hover)] disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Wysyłanie...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Wyślij wiadomość
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
