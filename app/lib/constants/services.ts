export type ServiceCategory = {
  id: string;
  title: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "korony-mosty",
    title: "Korony i mosty",
    items: [
      "Korona porcelanowa",
      "Korona cyrkonowa",
      "Most porcelanowy",
      "Most cyrkonowy",
      "Licówka",
    ],
  },
  {
    id: "implanty",
    title: "Implanty",
    items: ["Korona na implancie", "Most na implantach"],
  },
  {
    id: "wklady-naklady",
    title: "Wkłady i nakłady",
    items: ["Wkład koronowo-korzeniowy", "Onlay (druk 3D)"],
  },
  {
    id: "protezy",
    title: "Protezy ruchome",
    items: [
      "Proteza akrylowa",
      "Proteza szkieletowa",
      "Proteza hybrydowa",
      "Proteza na zatrzaskach Bredent",
    ],
  },
  {
    id: "szyny",
    title: "Szyny",
    items: ["Szyna nagryzowa (antybruksizm)", "Szyna wybielająca"],
  },
  {
    id: "diagnostyka",
    title: "Diagnostyka i planowanie",
    items: ["Wax Up"],
  },
  {
    id: "cyfrowe",
    title: "Druk 3D / usługi cyfrowe",
    items: [
      "Onlaye CAD/CAM",
      "Modele diagnostyczne 3D",
      "Prace z cyfrowego skanu (bez odcisku)",
    ],
  },
];
