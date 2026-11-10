export const company = {
  name: "Tech Prime Global",
  legalName: "Tech Prime Global Private Limited",
  email: "techprimeglobalpvt@gmail.com",
  address: "V20/12, Gurgaon, Haryana, India",
  founder: "Anil Sharma",
  coFounder: "Vilansh Sharma",
  descriptor: "Building businesses across mobility, entertainment, and healthcare.",
} as const;

export const mailto = `mailto:${company.email}`;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "ventures", label: "Our Ventures" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
] as const;

export type VentureKey = "drivers24" | "finder" | "firstlab";

export interface Venture {
  key: VentureKey;
  index: string;
  name: string;
  industry: string;
  shortIndustry: string;
  focus: string;
  tagline: string;
  description: string;
  concept: string[];
  features: string[];
  positioning: string;
  stage: string;
}

export const ventures: Venture[] = [
  {
    key: "drivers24",
    index: "01",
    name: "Drivers24",
    industry: "Mobility & On-Demand Services",
    shortIndustry: "Mobility",
    focus: "On-demand driver services",
    tagline: "Your Car. Your Destination. Our Driver.",
    description:
      "Drivers24 is an on-demand driver booking platform designed to connect vehicle owners with professional drivers whenever they need assistance getting behind the wheel.",
    concept: [
      "Users who own their own vehicles can book a driver to drive their car on an hourly basis. Customers bring the car; Drivers24 provides the driver.",
      "The platform focuses on providing convenient access to drivers for personal travel, everyday commitments, and other driving requirements.",
    ],
    features: [
      "On-demand driver booking",
      "Hourly pricing model",
      "Convenient scheduling",
      "Driver discovery and selection",
      "Service availability management",
      "Booking and payment experience",
    ],
    positioning:
      "A mobility service platform built around convenience, flexibility, and access to reliable driving assistance.",
    stage: "In Development",
  },
  {
    key: "finder",
    index: "02",
    name: "Finder",
    industry: "Digital Entertainment & Social Interaction",
    shortIndustry: "Entertainment",
    focus: "Voice and chat interactions",
    tagline: "Meet Someone. Start a Conversation. Enjoy the Moment.",
    description:
      "Finder is a digital entertainment platform that brings people together through spontaneous conversations, personalised interactions, and engaging social experiences.",
    concept: [
      "Users can discover available entertainment hosts and connect with them through voice calls or live chat, browsing profiles based on relevant information, interests, and preferences before initiating an interaction.",
      "The experience is designed around casual conversations, companionship, friendship, and entertainment.",
    ],
    features: [
      "Discoverable host profiles",
      "Voice calling",
      "Real-time chat",
      "Personalised discovery",
      "Host availability management",
      "In-app engagement",
      "Platform-based monetisation",
    ],
    positioning:
      "An interactive entertainment platform creating new ways for people to connect, communicate, and enjoy meaningful conversations.",
    stage: "In Development",
  },
  {
    key: "firstlab",
    index: "03",
    name: "First Lab",
    industry: "Healthcare Technology & Diagnostic Discovery",
    shortIndustry: "Healthcare",
    focus: "Diagnostic discovery and booking",
    tagline: "Compare Better. Choose Smarter. Book Conveniently.",
    description:
      "First Lab is a healthcare discovery and booking platform designed to simplify the process of finding, comparing, and booking diagnostic laboratory services.",
    concept: [
      "The platform brings multiple diagnostic laboratories and healthcare service providers onto one platform.",
      "Users can explore health checkup packages and diagnostic services, compare prices across providers, evaluate available options, and book services conveniently.",
    ],
    features: [
      "Multiple diagnostic service providers",
      "Health checkup package discovery",
      "Price comparison",
      "Service and package details",
      "Provider comparison",
      "Online booking",
      "Convenient service discovery",
    ],
    positioning:
      "A healthcare discovery platform bringing greater transparency, accessibility, and convenience to diagnostic service booking.",
    stage: "In Development",
  },
];

export interface Leader {
  name: string;
  role: string;
  initials: string;
  discipline: string;
  headline: string;
  bio: string;
  strengths: string[];
  /** Path under /public, e.g. "/leadership/anil-sharma.jpg". Leave undefined until a photograph is supplied. */
  photo?: string;
}

export const leaders: Leader[] = [
  {
    name: company.founder,
    role: "Founder",
    initials: "AS",
    discipline: "Sales & Marketing",
    headline: "Turns a product into a habit, and a habit into a market.",
    bio: "A sales and marketing strategist who reads Indian consumers city by city: what moves a buyer in Gurgaon differs from Indore, and the pitch should too. Anil leads go-to-market across the portfolio: positioning, partnerships, pricing and the ground-level distribution that takes a new brand from first install to everyday use.",
    strengths: ["Go-to-market", "Brand & positioning", "Partnerships & distribution", "Consumer insight, Bharat to metro"],
  },
  {
    name: company.coFounder,
    role: "Co-Founder",
    initials: "VS",
    discipline: "Technology & Product",
    headline: "Builds the engine room: platforms made for a billion screens and patchy 4G.",
    bio: "A technologist who designs products for how India actually uses its phones: vernacular-ready, UPI-native, light on data and fast on budget devices. Vilansh leads product and engineering across the ventures, building one shared technology foundation that lets each new business launch faster than the last.",
    strengths: ["Product architecture", "Mobile-first & UPI-native", "Scalable platforms", "Data & automation"],
  },
];
