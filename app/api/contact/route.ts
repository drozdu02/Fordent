import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/app/lib/nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, consent } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { message: "Wszystkie pola są wymagane." },
        { status: 400 }
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        { message: "Zgoda na przetwarzanie danych jest wymagana." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Podaj poprawny adres email." },
        { status: 400 }
      );
    }

    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      { message: "Wiadomość została wysłana pomyślnie." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd podczas wysyłania wiadomości:", error);

    const err = error as { code?: string; message?: string };
    const isAuthError =
      err.code === "EAUTH" ||
      err.message?.includes("BadCredentials") ||
      err.message?.includes("Invalid login");

    if (isAuthError) {
      console.error(
        "Gmail SMTP: sprawdź EMAIL i GMAIL_SECRET_KEY (hasło aplikacji, nie zwykłe hasło)."
      );
    }

    return NextResponse.json(
      {
        message:
          "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
      },
      { status: 500 }
    );
  }
}
