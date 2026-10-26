// ---------- Types ----------
export type Profile = {
  id: number;
  name: string;
  role: string;
  tagline: string | null;
  bio: string | null;
  photo_url: string | null;
  resume_url: string | null;
  location: string | null;
  email: string | null;
  education: string | null;
};

export type Skill = {
  id: number;
  name: string;
  category: string;
  sort_order: number;
};

export type Project = {
  id: number;
  title: string;
  description: string | null;
  tech: string[];
  image_url: string | null;
  live_url: string | null;
  repo_url: string | null;
  featured: boolean;
  kind: string | null;
  sort_order: number;
};

export type Achievement = {
  id: number;
  title: string;
  subtitle: string | null;
  description: string | null;
  image_url: string | null;
  link_url: string | null;
  sort_order: number;
};

export type Social = {
  id: number;
  platform: string;
  url: string;
  sort_order: number;
};

export type Stat = {
  id: number;
  label: string;
  value: string;
  sort_order: number;
};

const SKILL_CATEGORY_ORDER = ["Frontend", "Backend", "Testing & QA", "Tools"];

/**
 * Local portfolio content — edit this file to update the site.
 * Sourced from Yostena Girma Asefa's CV.
 */
const profile: Profile = {
  id: 1,
  name: "Yostena Girma",
  role: "Software Engineering Student",
  tagline:
    "Frontend, backend, and software testing — building usable web features and shipping reliable systems.",
  bio: "Fourth-year Software Engineering student at Addis Ababa University with hands-on experience in frontend and backend development, responsive user interfaces, microservices-based systems, API integration, and software quality assurance. I collaborate with developers and designers to build usable web features, test core workflows, and identify defects.",
  photo_url: "/images/profile.jpg",
  resume_url: "/cv/Yostena_Girma_Asefa_CV.pdf",
  location: "Addis Ababa, Ethiopia",
  email: "yostenagirma19@gmail.com",
  education: "BSc Software Engineering, Addis Ababa University",
};

const skills: Skill[] = [
  // Frontend
  { id: 1, name: "HTML", category: "Frontend", sort_order: 1 },
  { id: 2, name: "CSS", category: "Frontend", sort_order: 2 },
  { id: 3, name: "JavaScript", category: "Frontend", sort_order: 3 },
  { id: 4, name: "TypeScript", category: "Frontend", sort_order: 4 },
  { id: 5, name: "React", category: "Frontend", sort_order: 5 },
  { id: 6, name: "Next.js", category: "Frontend", sort_order: 6 },
  { id: 7, name: "Tailwind CSS", category: "Frontend", sort_order: 7 },
  // Backend
  { id: 8, name: "Node.js", category: "Backend", sort_order: 1 },
  { id: 9, name: "Express.js", category: "Backend", sort_order: 2 },
  { id: 10, name: "Go", category: "Backend", sort_order: 3 },
  { id: 11, name: "Django", category: "Backend", sort_order: 4 },
  { id: 12, name: "MySQL", category: "Backend", sort_order: 5 },
  { id: 13, name: "Supabase", category: "Backend", sort_order: 6 },
  // Testing & QA
  { id: 14, name: "Functional Testing", category: "Testing & QA", sort_order: 1 },
  { id: 15, name: "Bug Tracking", category: "Testing & QA", sort_order: 2 },
  // Tools
  { id: 16, name: "Git", category: "Tools", sort_order: 1 },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Tilla Cover",
    description:
      "Enterprise insurance platform from Tilla Health — core coverage product for managing insurance workflows, policies, and related health services.",
    tech: ["Microservices", "Backend", "QA"],
    image_url: "/images/tilla.png",
    live_url: "https://tillahealth.com/en-US/products/tilla-core",
    repo_url: null,
    featured: true,
    kind: "Team",
    sort_order: 1,
  },
  {
    id: 2,
    title: "PauseGuard",
    description:
      "AI-based financial fraud detection for Ethiopian mobile money. Reads transfer behavior and pauses coached scams before settlement on wallets like Telebirr and CBE Birr.",
    tech: ["React", "AI", "Fraud Detection"],
    image_url: "/images/pauseguard.jpg",
    live_url: "https://pauseguard-frontend.vercel.app/",
    repo_url: null,
    featured: true,
    kind: "Team",
    sort_order: 2,
  },
  {
    id: 3,
    title: "Ethioreview",
    description:
      "Platform for authentic business reviews in Ethiopia — helping people discover and evaluate local businesses through trusted feedback.",
    tech: ["React", "Next.js", "TypeScript"],
    image_url: "/images/ethioreview.jpg",
    live_url: "https://www.ethioreview.com/en",
    repo_url: null,
    featured: true,
    kind: "Solo",
    sort_order: 3,
  },
  {
    id: 4,
    title: "ProfileLink",
    description:
      "Digital identity in one link — profile, links, portfolio, QR codes, and analytics so people in Ethiopia can share everything they do with a single URL.",
    tech: ["React", "JavaScript", "Responsive UI"],
    image_url: "/images/profilelink.jpg",
    live_url: "https://www.profilelink.et/",
    repo_url: null,
    featured: true,
    kind: "Solo",
    sort_order: 4,
  },
  {
    id: 5,
    title: "Negade",
    description:
      "ERP built for Ethiopian small businesses — stock, sales, customers, and money in Ethiopian Birr. Helps shop owners track inventory, orders, debts, reports, and tax estimates in one place.",
    tech: ["QA", "ERP", "Production Testing"],
    image_url: "/images/negade.jpg",
    live_url: "https://www.negade.app/",
    repo_url: null,
    featured: true,
    kind: "Solo",
    sort_order: 5,
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "PauseGuard — 2nd Place",
    subtitle: "Cursor AI Hackathon · Team project",
    description:
      "Won 2nd place at the Cursor AI Hackathon with PauseGuard, a behavior-based financial fraud detection system built for digital applications — especially mobile banking and mobile money. Scammers often do not steal passwords; they coach real customers into sending money themselves. PauseGuard analyzes behavioral and device signals during a transfer (such as hesitation, pasted payee details, and balance-then-pay patterns), scores the session in real time, and can pause a suspicious transaction before settlement so analysts can review it with clear reason codes. The platform is designed for Ethiopian wallets and banks, with coverage across app and USSD flows and explainable decisions instead of a black-box score.",
    image_url: "/images/pauseguard.jpg",
    link_url: "https://pauseguard-frontend.vercel.app/",
    sort_order: 1,
  },
];

const socials: Social[] = [
  {
    id: 1,
    platform: "GitHub",
    url: "https://github.com/Yostena16",
    sort_order: 1,
  },
  {
    id: 2,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/yostena-girma-7baa27299",
    sort_order: 2,
  },
  {
    id: 3,
    platform: "Email",
    url: "mailto:yostenagirma19@gmail.com",
    sort_order: 3,
  },
];

const stats: Stat[] = [];

// ---------- Content accessors ----------
export async function getProfile(): Promise<Profile | null> {
  return profile;
}

export async function getSkills(): Promise<Skill[]> {
  return [...skills].sort((a, b) => {
    const cat =
      SKILL_CATEGORY_ORDER.indexOf(a.category) -
      SKILL_CATEGORY_ORDER.indexOf(b.category);
    return cat || a.sort_order - b.sort_order;
  });
}

export async function getProjects(): Promise<Project[]> {
  return [...projects].sort((a, b) => a.sort_order - b.sort_order);
}

export async function getAchievements(): Promise<Achievement[]> {
  return [...achievements].sort((a, b) => a.sort_order - b.sort_order);
}

export async function getSocials(): Promise<Social[]> {
  return [...socials].sort((a, b) => a.sort_order - b.sort_order);
}

export async function getStats(): Promise<Stat[]> {
  return [...stats].sort((a, b) => a.sort_order - b.sort_order);
}
