export const BUSINESS_EMAIL = "pracowniafordent@gmail.com";
export const BUSINESS_PHONE = "+48 607 575 990";
export const BUSINESS_PHONE_URI = "tel:+48607575990";

export const BUSINESS_ADDRESS = {
  streetAddress: "ul. Damrota 38A",
  addressLocality: "Wrocław",
  postalCode: "54-106",
  addressCountry: "PL",
} as const;

/** Współrzędne przybliżone — ul. Damrota 38A, Wrocław */
export const BUSINESS_GEO = {
  latitude: 51.1142,
  longitude: 17.0275,
} as const;

export const BUSINESS_HOURS = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  {
    days: ["Saturday"],
    opens: "09:00",
    closes: "13:00",
  },
] as const;
