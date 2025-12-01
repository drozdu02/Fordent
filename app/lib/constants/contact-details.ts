import { MapPin, Phone, Mail, Clock } from "lucide-react";

type ContactDetail = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  color: string;
  iconColor: string;
}


export const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Adres",
    lines: ["ul. Dentystyczna 15", "00-001 Warszawa"],
    color: "bg-sky-100",
    iconColor: "text-[#0EA5E9]"
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["+48 123 456 789", "+48 987 654 321"],
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["kontakt@fordent.pl", "zamowienia@fordent.pl"],
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Clock,
    title: "Godziny pracy",
    lines: ["Pon-Pt: 8:00 - 18:00", "Sob: 9:00 - 14:00"],
    color: "bg-amber-100",
    iconColor: "text-amber-600"
  }
];