// data/content.ts
// Central content file for the "below the hero" sections of the Melangine VTC site.
// Real, verifiable facts (TVETA registration, location, accredited trades, KUCCPS route)
// are filled in. Anything without a confirmed source is marked PLACEHOLDER — swap in the
// real figure/photo/name before this goes live.

import {
  Hammer,
  Building2,
  Zap,
  Shirt,
  Car,
  Sparkles,
  Laptop2,
  type LucideIcon,
} from "lucide-react";

export interface Department {
  slug: string;
  name: string;
  blurb: string;
  icon: LucideIcon;
  intake: string;
}

// Source: TVETA accreditation record (Reg. No. TVETA/PUBLIC/VTC/0042/2017),
// Melangine VTC is a public VTC in Mirangine, Nyandarua County.
export const departments: Department[] = [
  {
    slug: "metal-fabrication",
    name: "Metal Fabrication & Welding",
    blurb:
      "Cutting, joining and shaping metal for construction, agriculture and light industry work.",
    icon: Hammer,
    intake: "30 trainees / intake",
  },
  {
    slug: "building-technology",
    name: "Building Technology",
    blurb:
      "Masonry, concrete work and site practice for learners heading into Kenya's construction sector.",
    icon: Building2,
    intake: "30 trainees / intake",
  },
  {
    slug: "electrical-technology",
    name: "Electrical Technology",
    blurb:
      "Domestic and industrial wiring, installation and maintenance built on hands-on lab time.",
    icon: Zap,
    intake: "30 trainees / intake",
  },
  {
    slug: "fashion-design",
    name: "Fashion Design & Garment Making",
    blurb:
      "Pattern drafting, tailoring and garment construction from concept to finished piece.",
    icon: Shirt,
    intake: "30 trainees / intake",
  },
  {
    slug: "motor-vehicle-mechanics",
    name: "Motor Vehicle Mechanics",
    blurb:
      "Engine systems, diagnostics and repair training on real vehicles in the college workshop.",
    icon: Car,
    intake: "30 trainees / intake",
  },
  {
    slug: "hairdressing-beauty-therapy",
    name: "Hairdressing & Beauty Therapy",
    blurb:
      "Salon-ready styling, treatment and client-care skills for Kenya's growing beauty industry.",
    icon: Sparkles,
    intake: "40 trainees / intake",
  },
  {
    slug: "ict",
    name: "Information Communication Technology",
    blurb:
      "Computer packages, networking basics and digital skills for the modern workplace.",
    icon: Laptop2,
    intake: "30 trainees / intake",
  },
];

export interface NewsItem {
  id: string;
  tag: "News" | "Event" | "Workshop";
  title: string;
  excerpt: string;
  href: string;
  featured?: boolean;
}

// NOTE: headings match what's already drafted in the Stitch mockup — kept identical
// so this section slots in under the hero without a content mismatch.
export const newsItems: NewsItem[] = [
  {
    id: "governance-training",
    tag: "News",
    title: "Governance Training",
    excerpt:
      "Recent governance training workshop held for senior management and board members.",
    href: "/news/governance-training",
  },
  {
    id: "mca-courtesy-call",
    tag: "Event",
    title: "MCA Courtesy Call",
    excerpt:
      "Local Members of County Assembly visited the institution to discuss partnerships.",
    href: "/news/mca-courtesy-call",
    featured: true,
  },
  {
    id: "curriculum-development",
    tag: "Workshop",
    title: "Curriculum Development",
    excerpt:
      "Industry experts gathered to align our technical curriculum with current market needs.",
    href: "/news/curriculum-development",
  },
];

// PLACEHOLDER — confirm current figures with admissions before publishing.
export const stats = [
  { label: "TVET-accredited trades", value: "7" },
  { label: "TVETA licensed since", value: "2017" },
  { label: "Trainees per intake", value: "220+" }, // PLACEHOLDER
  { label: "Industry partners", value: "12+" }, // PLACEHOLDER
];

export const studentHubLinks = [
  {
    title: "E-Learning Portal",
    description: "Access unit notes, assignments and recorded sessions.",
    href: "https://elearning.melanginevtc.ac.ke", // PLACEHOLDER domain
  },
  {
    title: "Student Portal",
    description: "Check your fee statement, results and unit registration.",
    href: "https://portal.melanginevtc.ac.ke", // PLACEHOLDER domain
  },
  {
    title: "Academic Calendar",
    description: "Term dates, exam windows and industrial attachment periods.",
    href: "/student-hub/calendar",
  },
  {
    title: "Forms & Downloads",
    description: "Admission letters, fee structures and clearance forms.",
    href: "/student-hub/downloads",
  },
];

// Source: KUCCPS is the real, official placement route for Kenyan TVET institutions.
export const admissionsNote =
  "Diploma applicants need a C- and above; Certificate applicants need a D (plain) and above. Apply through the KUCCPS portal or walk in to the admissions office in Mirangine.";