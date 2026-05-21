import { serviceCategories } from "@/app/lib/constants/services";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_GEO,
  BUSINESS_HOURS,
  BUSINESS_PHONE,
} from "@/app/lib/constants/business";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/app/lib/constants/site";

const businessId = `${SITE_URL}/#business`;
const websiteId = `${SITE_URL}/#website`;

function openingHoursSpecification() {
  return BUSINESS_HOURS.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  }));
}

export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "pl-PL",
        publisher: { "@id": businessId },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/android-chrome-512x512.png`,
        logo: `${SITE_URL}/android-chrome-512x512.png`,
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        address: {
          "@type": "PostalAddress",
          ...BUSINESS_ADDRESS,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS_GEO.latitude,
          longitude: BUSINESS_GEO.longitude,
        },
        openingHoursSpecification: openingHoursSpecification(),
        areaServed: {
          "@type": "City",
          name: "Wrocław",
        },
        priceRange: "$$",
        knowsAbout: [
          "technika dentystyczna",
          "protezy dentystyczne",
          "korony i mosty",
          "implanty stomatologiczne",
          "CAD/CAM",
        ],
        slogan: SITE_TAGLINE,
      },
    ],
  };
}

export function buildServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zakres prac protetycznych FORDENT",
    url: `${SITE_URL}/uslugi`,
    itemListElement: serviceCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: category.title,
        description: category.items.join(", "),
        provider: { "@id": businessId },
        areaServed: {
          "@type": "City",
          name: "Wrocław",
        },
      },
    })),
  };
}
