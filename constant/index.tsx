// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "Home", label: "Home" },
  { href: "/about", key: "About", label: "About" },
  { href: "/trips", key: "Packages", label: "Trips" },
  { href: "/gallery", key: "Gallery", label: "Gallery" },
];

// CATEGORIES SECTION
export const TRIPS = [
  {
    place: "trip1-title",
    details: "trip1-detail",
  },
  {
    place: "trip2-title",
    details: "trip2-detail",
  },
  {
    place: "trip3-title",
    details: "trip3-detail",
  },
  {
    place: "trip4-title",
    details: "trip4-detail",
  },
];

export const TITLES = {
  MustSee: "must-see",
  Popular: "popular",
  Happy: "happy",
};

export const TRIPDAY = [
  // Package 1: Desert Adventure
  [
    {
      d: "d1",
      itinerary: "MARRAKECH - AIT BEN HADOU - OUARZAZATE - GORGES DE DADES:",
      price: "100$",
      details: "package1-day1",
    },
    {
      d: "d2",
      itinerary: "BOUMALN DADES - MSEMRIR - GORGES TODGHA",
      price: "100$",
      details: "package1-day2",
    },
    {
      d: "d3",
      itinerary: "GORGES TODGHA - ZAGORA - DESERT CHEGAGA",
      details: "package1-day3",
    },
    {
      d: "d4",
      itinerary: "DESERT CHEGAGA",
      price: "100$",
      details: "package1-day4",
    },
    {
      d: "d5",
      itinerary: "CHEGAGA - FOUM ZGUID - MARRAKECH",
      price: "100$",
      details: "package1-day5",
    },
  ],
  // Programme 3 jours Chigaga 2 nuit

  [
    {
      d: "d1",
      itinerary: "MARRAKECH - TICHKA - AIT BEN HADDOU - ZAGORA - ERG LIHODI:",
      details: "package2-day1",
    },
    {
      d: "d2",
      itinerary: "ERG LIHODI - LES DUNES DE CHEGAGA",
      details: "package2-day2",
    },
    {
      d: "d3",
      itinerary: "CHEGAGA -  MARRAKECH",
      details: "package2-day3",
    },
  ],
  // PROGRAMME 6 JOUR MARRAKECH -BOUMALN DADES - GORGES TOUDRA-CHEGAGA- OASIS DE FINT - MARRAKECH
  [
    {
      d: "d1",
      itinerary: "MARRAKECH - AIT BEN HADOU - OUARZAZATE - GORGES DE DADES:",
      details: "package3-day1",
    },
    {
      d: "d2",
      itinerary: "BOUMALN DADES - MSEMRIR - TIZI NOUGDAL - GORGES TODGHA",
      details: "package3-day2",
    },
    {
      d: "d3",
      itinerary: "GORGES TODGHA - ZAGORA - DESERT CHEGAGA",
      details: "package3-day3",
    },
    {
      d: "d4",
      itinerary: "DESERT CHEGAGA",
      details: "package3-day4",
    },
    {
      d: "d5",
      itinerary: "CHEGAGA - FOUM ZGUID - OASIS FINT",
      details: "package3-day5",
    },
    {
      d: "d6",
      itinerary: "OASIS FINT - VALLEY OURIKA - MARRAKECH",
      details: "package3-day6",
    },
  ],
];


// TESTIMONIAL SECTION
export const testimonials = [
  {
    name: '— Maria & John',
    country: 'Spain',
    recommendation: `Our desert tour with Salah was the highlight of our Morocco trip.
      His knowledge of the region and genuine warmth made this experience
      truly special. The sunset camel ride and overnight camp under the
      stars was magical!`,
    link: 'https://web.facebook.com/fmonot',
  },
  {
    name: '— Mounya',
    country: 'Morocco',
    recommendation: `SALAH guide touristique de notre aventure vers le desert du Chegaga, a été accueillant et nous a fait découvrir tout au long du parcours les spécialités géographiques et les espèces animales qui y survivent. Il a animé notre voyage d'une valeur ajoutée indiscutable. C'est un connaisseur professionnel du parcours du désert, a éveillé notre curiosité. Il fait de son mieux pour nous faire découvrir tout détail intéressant tout au long du circuit choisi. C'était un voyage exceptionnel en plein desert depuis Tagounite à Chegaga pour la nuité au bivouac puis vers Foum Zguid en passant par Iriki. Merci beaucoup SALAH.`,
    link: 'https://www.facebook.com/share/p/1Bb3ASpYkw/',
  },
  {
    name: '— Fan Schlichter',
    country: 'France',
    recommendation: `Salah est le meilleur guide et un amoureux du désert qui transmet sa passion : en trek ou en famille, Salah vous concoctera le meilleur séjour hors des sentiers battus et vous accompagnera avec toute sa gentillesse.`,
    link: 'https://www.facebook.com/share/p/1AUznvNSxm/',
  },
];
