import { MapPin, Phone, Mail, Clock } from "lucide-react";

type ContactDetail = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  color: string;
  iconColor: string;
};

export const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Adres",
    lines: ["ul. Damrota 38A", "Wrocław"],
    color: "bg-white/10",
    iconColor: "text-[var(--fd-accent-light)]",
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+48 607 575 990"],
    color: "bg-white/10",
    iconColor: "text-[var(--fd-accent-light)]",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["pracowniafordent@gmail.com"],
    color: "bg-white/10",
    iconColor: "text-[var(--fd-accent-light)]",
  },
  {
    icon: Clock,
    title: "Godziny pracy",
    lines: [
      "Poniedziałek – Piątek: 8:00 – 16:00",
      "Sobota: 9:00 – 13:00",
      "Niedziela: zamknięte",
    ],
    color: "bg-white/10",
    iconColor: "text-[var(--fd-accent-light)]",
  },
];
