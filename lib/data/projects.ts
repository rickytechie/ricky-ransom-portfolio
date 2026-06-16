/** Modular scrollytelling data architecture for portfolio case studies. */

export interface AIAgent {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
}

export interface ScrollySection {
  id: string;
  headline: string;
  body: string;
  mockupLabel?: string;
  highlight?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  vertical: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  previewAccent: string;
  aiAgents: AIAgent[];
  sections: ScrollySection[];
}

export const projects: Project[] = [
  {
    slug: "real-estate-agent",
    title: "Real Estate Agent",
    subtitle: "PropTech Intelligence Platform",
    vertical: "PropTech",
    description:
      "Custom data pipelines and AI-driven property intelligence for modern brokerages. Automated comps, lead scoring, and contextual market narratives.",
    tags: ["PropTech", "Data Pipelines", "AI Agents", "Next.js"],
    liveUrl: "https://example.com/real-estate",
    previewAccent: "#d4af37",
    aiAgents: [
      {
        id: "listing-agent",
        name: "Listing Agent",
        role: "Property Intelligence",
        description:
          "Ingests MLS feeds, public records, and neighborhood signals to generate listing narratives and pricing recommendations.",
        capabilities: ["MLS ingestion", "Comp analysis", "Narrative generation"],
      },
      {
        id: "lead-scorer",
        name: "Lead Scorer",
        role: "Conversion Optimization",
        description:
          "Scores inbound leads by intent, budget fit, and timeline — routing hot prospects to agents in real time.",
        capabilities: ["Intent detection", "Budget matching", "CRM sync"],
      },
    ],
    sections: [
      {
        id: "overview",
        headline: "Market intelligence at broker speed",
        body: "A unified dashboard that transforms fragmented property data into actionable intelligence. Brokers see live comps, neighborhood trends, and AI-generated listing copy in one view.",
        mockupLabel: "Property Dashboard",
        highlight: "3.2× faster listing prep",
      },
      {
        id: "pipeline",
        headline: "Custom data pipelines",
        body: "ETL workflows ingest MLS, tax assessor, and permit data nightly. Normalized schemas feed both the AI agents and client-facing analytics.",
        mockupLabel: "Pipeline Monitor",
        highlight: "12 data sources unified",
      },
      {
        id: "agents",
        headline: "AI agents in context",
        body: "Specialized agents operate inside a dedicated context window — surfacing recommendations without leaving the broker's workflow.",
        mockupLabel: "Agent Context Panel",
      },
    ],
  },
  {
    slug: "plumbing-contractor",
    title: "Plumbing Contractor",
    subtitle: "Field Routing Engine",
    vertical: "Field Services",
    description:
      "Automated booking, intelligent dispatch, and real-time field routing for high-volume plumbing operations.",
    tags: ["Field Ops", "Routing", "Booking", "Mobile"],
    liveUrl: "https://example.com/plumbing",
    previewAccent: "#60a5fa",
    aiAgents: [
      {
        id: "dispatch-agent",
        name: "Dispatch Agent",
        role: "Route Optimization",
        description:
          "Balances technician skills, travel time, and job urgency to generate optimal daily routes with live re-routing on cancellations.",
        capabilities: ["Route optimization", "Skill matching", "Live re-route"],
      },
      {
        id: "booking-agent",
        name: "Booking Agent",
        role: "Automated Scheduling",
        description:
          "Handles inbound booking requests via web and phone, confirming availability and sending technician ETAs automatically.",
        capabilities: ["Availability sync", "ETA updates", "SMS confirmations"],
      },
    ],
    sections: [
      {
        id: "booking",
        headline: "Zero-friction booking",
        body: "Customers book online or by phone. The booking agent confirms slots, collects job details, and triggers dispatch — no dispatcher bottleneck.",
        mockupLabel: "Booking Flow",
        highlight: "68% self-serve bookings",
      },
      {
        id: "routing",
        headline: "Intelligent field routing",
        body: "The routing engine factors traffic, technician certifications, and parts inventory to minimize drive time and maximize jobs per day.",
        mockupLabel: "Route Map",
        highlight: "22% fewer drive miles",
      },
      {
        id: "ops",
        headline: "Operations command center",
        body: "Dispatchers monitor live technician locations, job status, and agent recommendations from a single operational dashboard.",
        mockupLabel: "Ops Dashboard",
      },
    ],
  },
  {
    slug: "summer-camp",
    title: "Summer Camp",
    subtitle: "Registration & Operations Hub",
    vertical: "Education & Recreation",
    description:
      "Interactive registration flows, parent portals, and operational dashboards for multi-session summer camp programs.",
    tags: ["Registration", "Dashboards", "Payments", "Parent Portal"],
    liveUrl: "https://example.com/summer-camp",
    previewAccent: "#34d399",
    aiAgents: [
      {
        id: "enrollment-agent",
        name: "Enrollment Agent",
        role: "Registration Assistant",
        description:
          "Guides parents through session selection, medical forms, and payment — answering FAQs and flagging incomplete registrations.",
        capabilities: ["Form guidance", "FAQ resolution", "Payment reminders"],
      },
      {
        id: "ops-agent",
        name: "Ops Agent",
        role: "Camp Operations",
        description:
          "Monitors capacity, staff ratios, and supply levels — alerting directors before issues become incidents.",
        capabilities: ["Capacity alerts", "Ratio monitoring", "Supply tracking"],
      },
    ],
    sections: [
      {
        id: "registration",
        headline: "Interactive registration",
        body: "Parents select sessions, add siblings, and complete medical forms in a guided flow. The enrollment agent handles edge cases without staff intervention.",
        mockupLabel: "Registration Wizard",
        highlight: "4.8★ parent satisfaction",
      },
      {
        id: "dashboard",
        headline: "Operational dashboards",
        body: "Directors see real-time enrollment, revenue, and staffing metrics. The ops agent surfaces anomalies before they escalate.",
        mockupLabel: "Director Dashboard",
        highlight: "Real-time capacity view",
      },
      {
        id: "portal",
        headline: "Parent portal",
        body: "Post-registration, parents access schedules, packing lists, and photo galleries. Automated reminders keep everyone aligned.",
        mockupLabel: "Parent Portal",
      },
    ],
  },
  {
    slug: "beauty-nail-tech",
    title: "Beauty & Nail Tech",
    subtitle: "Salon Intelligence Suite",
    vertical: "Beauty & Wellness",
    description:
      "Dynamic scheduling, visual inventory management, and client mapping for modern salon and nail studio operations.",
    tags: ["Scheduling", "Inventory", "CRM", "Visual UX"],
    liveUrl: "https://example.com/beauty",
    previewAccent: "#f472b6",
    aiAgents: [
      {
        id: "schedule-agent",
        name: "Schedule Agent",
        role: "Dynamic Booking",
        description:
          "Optimizes chair utilization by matching service duration, technician specialty, and client preferences into conflict-free slots.",
        capabilities: ["Slot optimization", "Preference matching", "Waitlist fill"],
      },
      {
        id: "inventory-agent",
        name: "Inventory Agent",
        role: "Visual Stock Management",
        description:
          "Tracks product levels via visual inventory scans and predicts reorder points based on service volume trends.",
        capabilities: ["Visual scanning", "Reorder prediction", "Usage analytics"],
      },
      {
        id: "client-mapper",
        name: "Client Mapper",
        role: "Relationship Intelligence",
        description:
          "Maps client preferences, visit history, and lifetime value — surfacing upsell opportunities at the right moment.",
        capabilities: ["Preference profiles", "LTV scoring", "Upsell timing"],
      },
    ],
    sections: [
      {
        id: "scheduling",
        headline: "Dynamic scheduling",
        body: "The schedule agent fills gaps intelligently — balancing technician load, service complexity, and client wait tolerance.",
        mockupLabel: "Schedule Grid",
        highlight: "31% higher chair utilization",
      },
      {
        id: "inventory",
        headline: "Visual inventory",
        body: "Salon staff scan shelves with their phone. The inventory agent tracks stock levels and auto-generates purchase orders.",
        mockupLabel: "Inventory View",
        highlight: "Zero stockout events",
      },
      {
        id: "clients",
        headline: "Client mapping",
        body: "Every client gets a living profile — preferences, allergies, favorite technicians, and visit patterns mapped for personalized service.",
        mockupLabel: "Client Profile",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
