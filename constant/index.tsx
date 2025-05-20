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
  //programme 2 jours:
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

  ],
];

// TESTIMONIAL SECTION
export const testimonials = [
  {
    name: "— Ronan & Véronique",
    country: "France",
    recommendation: `Salah, nous te remercions encore pour ces trois jours passés en ta compagnie. Ce court voyage restera gravé à jamais dans nos cœurs pour la qualité de nos échanges, la découverte de ton pays, de ses coutumes, les paysages splendides et ce fameux désert. Quelle splendeur, quelle calme !! Merci encore pour la qualité de ton programme. Nous nous sommes régalés de la cuisine marocaine (du petit déjeuner au dîner)de cette nuit à la belle étoile aux pieds du Sahara. Ta bienveillance et ta gentillesse nous ont mis en confiance très rapidement. Nous nous sommes laissés guider avec beaucoup de bonheur. Ronan et Véronique`,
    link: "https://www.facebook.com/share/p/1Afic97zYx/",
    image: "/ronan.jpg",
  },
  {
    name: "— Lennart",
    country: "Netherlands",
    recommendation: `Just came back from the Sahara desert!

We swapped our bicycles for a 4x4 and @lover_of_sahara drove us over 130 kilometers into the sandy dunes in the middle of the desert.

It was not only our first time in the Sahara, but also our first time riding a camel, first time sandboarding and first time sleeping outside under the stars in the Sahara desert!

When we drove through a sand storm we even encountered a stunning white gazelle in the wild!`,
    link: "https://www.instagram.com/p/CiQB9twIcDy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: "/lennard.jpeg",
  },

  {
    name: "— Nicolas",
    country: "France",
    recommendation: `Merci pour cette expérience incroyable et inoubliable.
Merci Salah pour ce moment magique.`,
    link: "https://www.facebook.com/share/p/1AmPCXvSkW/",
    image: "/nicolas.jpg",
  },
  {
    name: "— Pomme Cannelle",
    country: "France",
    recommendation: `Une excursion d'exception vers Chegaga. Nous rencontrons notre chauffeur-guide Salah. Il nous embarque dans son 4x4. C’est génial car nous avons le véhicule juste pour nous ! C’est parti, nous quittons Foum Zguid. Nous apprécions beaucoup l’ambiance du trajet en sa compagnie. Nous discutons. Il est très agréable, sympathique, disponible, souriant, généreux, toujours bienveillant et à l’écoute. Un vrai plaisir. Il a le souci du détail et fait le maximum pour nous satisfaire. Durant les jours passés avec lui, il nous fait découvrir de multiples facettes de son pays. Il est vraiment serviable et adorable, un homme au grand cœur. Nous avons eu de beaux échanges.
Salah est un chauffeur parfait et très professionnel. Il conduit d’une manière rassurante. C’est un excellent pilote sur la piste et dans les dunes du désert. Il maîtrise parfaitement son véhicule.
Ces journées passées ensemble resteront inoubliables. Je n’ai qu’une envie : revenir... Inch Allah.
MILLE FOIS MERCI SALAH POUR TES ATTENTIONS, TES SOURIRES, TA GENTILLESSE ET TES COMPÉTENCES, SHUKRAN BZEFF POUR TOUS CES MOMENTS PARTAGÉS`,
    link: "https://www.facebook.com/share/p/1BaUi6WFW7/",
    image: "/pomme.jpg",
  },
  {
    name: "— Mounya",
    country: "Morocco",
    recommendation: `SALAH guide touristique de notre aventure vers le desert du Chegaga, a été accueillant et nous a fait découvrir tout au long du parcours les spécialités géographiques et les espèces animales qui y survivent. Il a animé notre voyage d'une valeur ajoutée indiscutable. C'est un connaisseur professionnel du parcours du désert, a éveillé notre curiosité. Il fait de son mieux pour nous faire découvrir tout détail intéressant tout au long du circuit choisi. C'était un voyage exceptionnel en plein desert depuis Tagounite à Chegaga pour la nuité au bivouac puis vers Foum Zguid en passant par Iriki. Merci beaucoup SALAH.`,
    link: "https://www.facebook.com/share/p/1Bb3ASpYkw/",
    image: "/mounia.jpg",
  },

  {
    name: "— Lauriane",
    country: "France",
    recommendation: `Très belle journée avec Salah qui nous a fait découvrir les dunes de chegaga , un village nomade avec sa gentillesse et son honnêteté qui nous a guidé à travers de très belles rencontres. On recommande vivement !!! Vous repartirez avec de superbes images et souvenirs.`,
    link: "https://www.facebook.com/share/p/1NEpy6uCeg/",
    image: "/lauriane.jpg",
  },
  {
    name: "— Andrea",
    country: "Italy",
    recommendation: `Competent and friendly. Salah knows everything about the desert and its secrets. Truly recommended.`,
    link: "https://www.facebook.com/share/p/1AoLT233ga/",
    image: "/andrea.jpg",
  },
  {
    name: "— Fan",
    country: "France",
    recommendation: `Salah est le meilleur guide et un amoureux du désert qui transmet sa passion : en trek ou en famille, Salah vous concoctera le meilleur séjour hors des sentiers battus et vous accompagnera avec toute sa gentillesse.`,
    link: "https://web.facebook.com/story.php?story_fbid=10160275476145893&id=718475892&rdid=1FyJaTVKtWdGmozg",
    image: "/fan.jpg",
  },
  {
    name: "— Andre",
    country: "France",
    recommendation: `Une semaine de bonheur et de découverte au Maroc : 3 jours à Marrakech et 3 jours dans le désert de Chegaga avec Salah (Lover of Sahara)`,
    link: "https://www.facebook.com/share/p/199EwtwgN8/",
    image: "/andre.jpg",
  },
];


export const allPackages = [
  {
    id:1,
    imageSrc: "/test1.jpg",
    imageAlt: "sahara desert",
    heading: "5 Days Desert Adventure",
    text: "Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs,",
    width: 1920,
    height: 1280,
    link: "/trips/1",
    duration: "3 day trip",
  },
  {
    id:2,
    imageSrc: "/test2.jpg",
    imageAlt: "camel caravan",
    heading: "3 Days Desert Adventure",
    text: "Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs,",
    width: 500,
    height: 300,
    link: "/trips/2",
    duration: "1 day trip",
  },
  {
    id:3,
    imageSrc: "/oasis2.jpg",
    imageAlt: "kasbah",
    heading: "6 Days Desert Adventure",
    text: "Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs,",
    width: 1920,
    height: 1280,
    link: "/trips/3",
    duration: "3 day trip",
  },
  {
    id:4,
    imageSrc: "/oasis2.jpg",
    imageAlt: "kasbah",
    heading: "2 Days Desert Adventure",
    text: "Visit the UNESCO World Heritage site of Ait Ben Haddou and explore Morocco's rich history on this 3-day tour. See famous movie locations, visit ancient kasbahs,",
    width: 1920,
    height: 1280,
    link: "/trips/4",
    duration: "3 day trip",
  },
];
