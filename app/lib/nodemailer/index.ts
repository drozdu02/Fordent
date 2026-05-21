import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Brak zmiennej środowiskowej: ${name}`);
  }
  return value;
}

export function getMailConfig() {
  return {
    email: getRequiredEnv("EMAIL"),
    appPassword: getRequiredEnv("GMAIL_SECRET_KEY"),
  };
}

export function createMailTransporter(): Transporter {
  const { email, appPassword } = getMailConfig();

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: appPassword,
    },
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { email } = getMailConfig();
  const transporter = createMailTransporter();

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone || "Brak danych");
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br/>");

  await transporter.sendMail({
    from: `"Fordent — formularz" <${email}>`,
    to: email,
    replyTo: payload.email,
    subject: `Nowa wiadomość od ${payload.name} — Fordent`,
    html: `
      <p><strong>Imię i nazwisko:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Telefon:</strong> ${safePhone}</p>
      <p><strong>Wiadomość:</strong><br/>${safeMessage}</p>
    `,
  });
}
