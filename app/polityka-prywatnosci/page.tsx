import { createPageMetadata } from "@/app/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Polityka prywatności",
  description:
    "Informacje o przetwarzaniu danych osobowych w FORDENT — pracownia techniki dentystycznej we Wrocławiu.",
  path: "/polityka-prywatnosci",
});

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-surface-fd">
      <div className="container-fd section-padding-sm max-w-3xl">
        <Link
          href="/contact"
          className="mb-8 inline-block text-sm font-medium text-[var(--fd-accent)] hover:underline"
        >
          ← Wróć do kontaktu
        </Link>
        <h1 className="mb-6">Polityka prywatności</h1>
        <div className="space-y-4 text-muted-fd leading-relaxed">
          <p>
            Administratorem danych osobowych przekazywanych przez formularz
            kontaktowy jest FORDENT — pracownia techniki dentystycznej, ul.
            Damrota 38A, Wrocław, e-mail: pracowniafordent@gmail.com.
          </p>
          <p>
            Dane (imię i nazwisko, e-mail, telefon, treść wiadomości)
            przetwarzamy wyłącznie w celu udzielenia odpowiedzi na zapytanie i
            obsługi korespondencji.
          </p>
          <p>
            Podstawą przetwarzania jest art. 6 ust. 1 lit. b RODO (działania
            przed zawarciem umowy / odpowiedź na zapytanie) oraz — w razie
            wyrażenia zgody — art. 6 ust. 1 lit. a RODO.
          </p>
          <p>
            Przysługuje Ci prawo dostępu do danych, sprostowania, usunięcia,
            ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
            skargi do Prezesa UODO.
          </p>
          <p>
            Dane przechowujemy przez okres niezbędny do obsługi korespondencji,
            a następnie zgodnie z obowiązującymi przepisami.
          </p>
        </div>
      </div>
    </div>
  );
}
