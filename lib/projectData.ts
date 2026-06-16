/** Unified mock data for all portfolio case studies. */

export type PreviewType =
  | "listing-carousel"
  | "dispatch-map"
  | "registration-matrix"
  | "booking-calendar";

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface LeadAgent {
  name: string;
  role: string;
  specialty: string;
  listings: number;
}

export interface ScrollyChapter {
  id: string;
  headline: string;
  body: string;
  stat?: string;
  detail?: string;
}

export interface SimulationLog {
  timestamp: string;
  message: string;
  type: "info" | "success" | "warning" | "action";
}

export interface AIAgentConfig {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  simulationTitle: string;
  defaultQuery: string;
  responses: Record<string, string>;
  liveFeed: SimulationLog[];
}

export interface ProjectData {
  slug: string;
  companyName: string;
  title: string;
  subtitle: string;
  vertical: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  technicalSpecs: TechnicalSpec[];
  leadAgents?: LeadAgent[];
  previewAccent: string;
  previewSecondary: string;
  previewType: PreviewType;
  chapters: ScrollyChapter[];
  aiAgent: AIAgentConfig;
}

export const projects: ProjectData[] = [
  {
    slug: "luminous-estates",
    companyName: "Luminous Estates",
    title: "Luminous Estates",
    subtitle: "PropTech AI — Ultra-Premium Property Intelligence",
    vertical: "PropTech",
    description:
      "Cinematic property experiences powered by predictive market engines and AI-driven client matching for high-net-worth brokerages.",
    longDescription:
      "Luminous Estates redefines luxury real estate through immersive digital walkthroughs, proprietary pricing models trained on 14 years of comp data, and an agent network calibrated for discerning clientele. Built on custom MLS ingestion pipelines and natural-language property intelligence.",
    tags: ["PropTech", "MLS Pipelines", "AI Agents", "Luxury UX"],
    features: [
      "Immersive property walkthroughs",
      "Predictive market pricing engines",
      "Automated high-net-worth client matching",
    ],
    technicalSpecs: [
      { label: "Data Sources", value: "14 MLS feeds + public records" },
      { label: "Pricing Model", value: "Gradient-boosted comp engine v3" },
      { label: "Latency", value: "< 120ms query response" },
      { label: "Stack", value: "Next.js · Python ETL · PostgreSQL" },
    ],
    leadAgents: [
      {
        name: "Alistair Vance",
        role: "Lead Listing Agent",
        specialty: "Waterfront & Estate Properties",
        listings: 47,
      },
      {
        name: "Elena Rostova",
        role: "Lead Listing Agent",
        specialty: "Urban Penthouse Portfolio",
        listings: 38,
      },
    ],
    previewAccent: "#c9a962",
    previewSecondary: "#f5ecd7",
    previewType: "listing-carousel",
    chapters: [
      {
        id: "walkthrough",
        headline: "Immersive property walkthroughs",
        body: "Every listing ships with a cinematic spatial experience — HDR photography, ambient audio, and room-by-room narrative overlays generated from architectural metadata.",
        stat: "4.2× longer session duration",
        detail: "WebGL-powered spatial transitions with lazy-loaded asset streaming.",
      },
      {
        id: "pricing",
        headline: "Predictive market pricing engines",
        body: "Our comp engine ingests permit filings, school district shifts, and micro-market velocity signals to surface pricing bands with 94% accuracy inside 30-day windows.",
        stat: "94% pricing accuracy",
        detail: "Trained on 2.1M historical transactions across 6 markets.",
      },
      {
        id: "matching",
        headline: "High-net-worth client matching",
        body: "Inbound leads are scored against lifestyle vectors — privacy preference, amenity thresholds, and investment horizon — then routed to the ideal listing agent automatically.",
        stat: "3.8× conversion lift",
        detail: "Alistair Vance & Elena Rostova lead the matched-agent network.",
      },
    ],
    aiAgent: {
      id: "luminous-mls-agent",
      name: "Luminous Estates Agent",
      role: "MLS Pipeline & Property Intelligence",
      description:
        "Parses live MLS data pipelines and manages natural language property queries — surfacing comps, narratives, and match scores in real time.",
      capabilities: [
        "MLS ingestion",
        "NL property queries",
        "Comp synthesis",
        "Agent routing",
      ],
      simulationTitle: "MLS Pipeline Monitor",
      defaultQuery: "Show waterfront estates under $4.2M with private dock access",
      responses: {
        "Show waterfront estates under $4.2M with private dock access":
          "Found 6 matches. Top comp: 1842 Harbor Lane — $3.95M, 5bd/6ba, 0.8ac. Predicted close: $3.88–$4.05M. Routing to Alistair Vance.",
        "Generate listing narrative for 2200 Summit Ridge":
          "Narrative drafted: 'Perched above the ridge line, 2200 Summit commands panoramic valley views through floor-to-ceiling glass...' — 847 words, luxury tone profile applied.",
        "What is the 30-day pricing trend for urban penthouses?":
          "Urban penthouse segment: +2.3% median, 18-day avg DOM. Elena Rostova's portfolio outperforming market by 1.1%. 3 new listings recommended for repricing.",
      },
      liveFeed: [
        { timestamp: "09:14:02", message: "MLS feed #7 synced — 142 new listings", type: "info" },
        { timestamp: "09:14:08", message: "Comp engine recalibrated for Q2 market shift", type: "success" },
        { timestamp: "09:14:15", message: "HNW match: Client #8841 → Alistair Vance", type: "action" },
        { timestamp: "09:14:22", message: "Narrative generated: 2200 Summit Ridge", type: "success" },
        { timestamp: "09:14:31", message: "Pricing alert: 3 penthouses below comp band", type: "warning" },
      ],
    },
  },
  {
    slug: "apex-flow-dynamics",
    companyName: "Apex Flow Dynamics",
    title: "Apex Flow Dynamics",
    subtitle: "AI-Driven Field Service Command",
    vertical: "Field Services",
    description:
      "Predictive dispatch routing, automated field diagnostics, and instant smart-scheduler SMS pipelines for high-volume plumbing operations.",
    longDescription:
      "Apex Flow Dynamics eliminates dispatch bottlenecks through real-time technician proximity scoring, automated diagnostic triage, and SMS-first booking flows that confirm appointments in under 90 seconds.",
    tags: ["Field Ops", "Dispatch AI", "SMS Pipelines", "Routing"],
    features: [
      "AI-driven predictive dispatch routing",
      "Automated field diagnostics",
      "Instant smart-scheduler SMS pipelines",
    ],
    technicalSpecs: [
      { label: "Technicians", value: "48 active field units" },
      { label: "Avg Dispatch", value: "4.2 min emergency response" },
      { label: "SMS Pipeline", value: "Twilio + custom NLP router" },
      { label: "Stack", value: "Next.js · Node · Redis Geo" },
    ],
    previewAccent: "#4a9eff",
    previewSecondary: "#0d1b2a",
    previewType: "dispatch-map",
    chapters: [
      {
        id: "dispatch",
        headline: "Predictive dispatch routing",
        body: "Emergency tickets are scored by severity, parts availability, and technician proximity — then auto-assigned with live ETA broadcasts to customers via SMS.",
        stat: "4.2 min avg dispatch",
        detail: "Redis Geo indexes 48 technicians with skill-certification matrices.",
      },
      {
        id: "diagnostics",
        headline: "Automated field diagnostics",
        body: "Inbound job descriptions are parsed by NLP to pre-classify issue type, estimate parts needed, and flag jobs requiring specialist certification before dispatch.",
        stat: "78% first-visit resolution",
        detail: "Diagnostic model trained on 12,000 historical work orders.",
      },
      {
        id: "sms",
        headline: "Smart-scheduler SMS pipelines",
        body: "Customers text to book. The pipeline confirms availability, collects address and issue details, and sends technician ETA — no human dispatcher required for routine jobs.",
        stat: "71% SMS self-serve rate",
        detail: "Sub-90-second booking confirmation across all service zones.",
      },
    ],
    aiAgent: {
      id: "apex-dispatch-agent",
      name: "Apex Flow Dynamics Agent",
      role: "Dispatch Optimization Engine",
      description:
        "Routes emergency tickets based on real-time technician proximity, skill match, and traffic conditions — rebalancing routes on cancellations automatically.",
      capabilities: [
        "Proximity routing",
        "Emergency triage",
        "Live re-route",
        "ETA broadcasting",
      ],
      simulationTitle: "Dispatch Command",
      defaultQuery: "Route emergency burst pipe — Zone 7, priority critical",
      responses: {
        "Route emergency burst pipe — Zone 7, priority critical":
          "Assigned: Tech #23 (Marcus Chen) — 2.1mi, ETA 8min. Parts kit B-442 pre-loaded. Customer SMS sent. Rerouted Tech #11 from non-urgent job.",
        "Show technician availability for tomorrow AM":
          "14 technicians available 7AM–12PM. 3 specialists (water heater cert). Projected capacity: 31 jobs. 2 slots open for emergency buffer.",
        "Rebalance routes after cancellation #8847":
          "Cancellation absorbed. Tech #23 reassigned to #8849 (same zone). Net drive time reduced 12min. No customer ETA changes required.",
      },
      liveFeed: [
        { timestamp: "14:02:11", message: "Emergency ticket #9102 — Zone 7, critical", type: "warning" },
        { timestamp: "14:02:14", message: "Tech #23 assigned — ETA 8min", type: "action" },
        { timestamp: "14:02:18", message: "SMS confirmation sent to customer", type: "success" },
        { timestamp: "14:02:25", message: "Route rebalanced — 12min saved", type: "success" },
        { timestamp: "14:02:33", message: "Tech #11 available for overflow", type: "info" },
      ],
    },
  },
  {
    slug: "camp-horizon-discovery",
    companyName: "Camp Horizon Discovery",
    title: "Camp Horizon Discovery",
    subtitle: "Operational Intelligence for Summer Programs",
    vertical: "Education & Recreation",
    description:
      "Real-time camper safety tracking, dynamic registration matrices, and staff operational analytics for multi-session camp programs.",
    longDescription:
      "Camp Horizon Discovery unifies parent registration, camper safety telemetry, and director-level operational dashboards into one platform — giving staff real-time visibility into capacity, conflicts, and session health.",
    tags: ["Camp Ops", "Safety Tracking", "Registration", "Analytics"],
    features: [
      "Real-time camper safety tracking",
      "Dynamic interactive registration matrix",
      "Operational analytics dashboard for staff",
    ],
    technicalSpecs: [
      { label: "Sessions", value: "6 concurrent program tracks" },
      { label: "Capacity", value: "420 campers / season" },
      { label: "Safety Check-ins", value: "Every 45 min geo-fenced" },
      { label: "Stack", value: "Next.js · Supabase · Mapbox" },
    ],
    previewAccent: "#2dd4a8",
    previewSecondary: "#0a1f1a",
    previewType: "registration-matrix",
    chapters: [
      {
        id: "safety",
        headline: "Real-time camper safety tracking",
        body: "Geo-fenced check-ins every 45 minutes feed a live safety dashboard. Staff receive instant alerts on missed check-ins or boundary exits.",
        stat: "100% check-in compliance",
        detail: "Mapbox-powered boundary monitoring across 3 camp zones.",
      },
      {
        id: "registration",
        headline: "Interactive registration matrix",
        body: "Parents select sessions, add siblings, and complete medical forms in a visual matrix that shows real-time availability across all program tracks.",
        stat: "4.9★ registration NPS",
        detail: "Dynamic pricing and sibling discounts applied automatically.",
      },
      {
        id: "analytics",
        headline: "Staff operational analytics",
        body: "Directors monitor enrollment velocity, staff ratios, supply levels, and revenue projections from a single command dashboard updated every 60 seconds.",
        stat: "Real-time ops visibility",
        detail: "Automated alerts on capacity thresholds and scheduling conflicts.",
      },
    ],
    aiAgent: {
      id: "camp-horizon-agent",
      name: "Camp Horizon Agent",
      role: "Operational Assistant",
      description:
        "Monitors camper capacity thresholds, detects scheduling conflicts, and surfaces staffing recommendations before issues escalate to directors.",
      capabilities: [
        "Capacity monitoring",
        "Conflict detection",
        "Staff ratio alerts",
        "Session optimization",
      ],
      simulationTitle: "Operations Monitor",
      defaultQuery: "Check capacity thresholds for Week 3 adventure track",
      responses: {
        "Check capacity thresholds for Week 3 adventure track":
          "Week 3 Adventure: 38/40 enrolled (95% capacity). 2 waitlist spots. Staff ratio: 1:8 (compliant). Recommend opening overflow session if 3+ more registrations arrive.",
        "Flag scheduling conflicts for July 14":
          "2 conflicts detected: Counselor Sarah double-booked 2PM–4PM. Pool maintenance overlaps with Swim Session B. Auto-resolved: maintenance moved to 5PM.",
        "Generate staffing recommendation for Arts Week":
          "Arts Week needs +1 counselor (projected 44 campers). Suggest pulling from Nature Week (under capacity). Ratio would remain compliant at 1:8.",
      },
      liveFeed: [
        { timestamp: "08:30:01", message: "Week 3 Adventure — 95% capacity", type: "warning" },
        { timestamp: "08:30:08", message: "Safety check-in batch complete — 142/142", type: "success" },
        { timestamp: "08:30:15", message: "Conflict resolved: July 14 pool maintenance", type: "action" },
        { timestamp: "08:30:22", message: "New registration: Martinez family ×2", type: "info" },
        { timestamp: "08:30:29", message: "Staff ratio compliant across all zones", type: "success" },
      ],
    },
  },
  {
    slug: "velvet-noir-atelier",
    companyName: "Velvet Noir Atelier",
    title: "Velvet Noir Atelier",
    subtitle: "Salon Intelligence & Client Experience Platform",
    vertical: "Beauty & Wellness",
    description:
      "Visual inventory prediction, intelligent multi-practitioner booking, and automated client style mapping for premium salon operations.",
    longDescription:
      "Velvet Noir Atelier orchestrates every touchpoint of a luxury salon — from predictive inventory management and multi-chair scheduling to deep client style profiling that remembers preferences across visits.",
    tags: ["Salon Tech", "Inventory AI", "Booking", "Client CRM"],
    features: [
      "Visual inventory prediction",
      "Intelligent multi-practitioner booking calendar",
      "Automated client style mapping profiling",
    ],
    technicalSpecs: [
      { label: "Practitioners", value: "12 chairs · 8 specialists" },
      { label: "Inventory SKUs", value: "340 tracked products" },
      { label: "Booking Utilization", value: "89% chair occupancy" },
      { label: "Stack", value: "Next.js · Vision API · PostgreSQL" },
    ],
    previewAccent: "#e879a7",
    previewSecondary: "#1a0a14",
    previewType: "booking-calendar",
    chapters: [
      {
        id: "inventory",
        headline: "Visual inventory prediction",
        body: "Shelf scans via mobile camera feed a prediction model that forecasts reorder points based on service volume, seasonal trends, and individual product velocity.",
        stat: "Zero stockout events",
        detail: "340 SKUs tracked with 14-day demand forecasting.",
      },
      {
        id: "booking",
        headline: "Multi-practitioner booking calendar",
        body: "The scheduling engine balances service duration, practitioner specialty, and client preferences across 12 chairs — filling gaps and managing waitlists intelligently.",
        stat: "89% chair utilization",
        detail: "Conflict-free scheduling across 8 specialist practitioners.",
      },
      {
        id: "profiling",
        headline: "Client style mapping",
        body: "Every visit enriches a living style profile — color history, texture preferences, allergy flags, and preferred practitioners — surfaced at the moment of booking.",
        stat: "2.4× repeat booking rate",
        detail: "Automated profiling from 18 months of visit data.",
      },
    ],
    aiAgent: {
      id: "velvet-inventory-agent",
      name: "Velvet Noir Atelier Agent",
      role: "Inventory & Booking Intelligence",
      description:
        "Predicts stock reorders from historical booking patterns, optimizes chair allocation, and surfaces client style recommendations at booking time.",
      capabilities: [
        "Reorder prediction",
        "Chair optimization",
        "Style profiling",
        "Demand forecasting",
      ],
      simulationTitle: "Atelier Intelligence",
      defaultQuery: "Predict inventory reorders for next 14 days",
      responses: {
        "Predict inventory reorders for next 14 days":
          "14 items below threshold. Priority: OPI Gel #442 (3 days remaining), Moroccan Oil 100ml (5 days). Auto-generated PO draft: $2,840 across 3 suppliers.",
        "Optimize tomorrow's chair allocation":
          "Tomorrow: 11 bookings across 8 practitioners. Recommend: move 10AM balayage to Chair 4 (specialist Jade). Opens Chair 2 for 11:30 walk-in slot.",
        "Show style profile for client #2291":
          "Client #2291 (Sophia K.): Prefers cool-toned balayage, gel extensions, practitioner Jade. Last visit: 6 weeks ago. Suggested: toner refresh + nail art add-on.",
      },
      liveFeed: [
        { timestamp: "11:00:04", message: "OPI Gel #442 — 3 days until stockout", type: "warning" },
        { timestamp: "11:00:11", message: "PO draft generated — $2,840", type: "action" },
        { timestamp: "11:00:18", message: "Chair 4 optimized for 10AM balayage", type: "success" },
        { timestamp: "11:00:25", message: "Style profile enriched: client #2291", type: "info" },
        { timestamp: "11:00:32", message: "Tomorrow utilization projected: 91%", type: "success" },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Minimal card data for homepage showcase — layout unchanged. */
export function getProjectSummaries() {
  return projects.map((p) => ({
    slug: p.slug,
    title: p.companyName,
    subtitle: p.subtitle,
    vertical: p.vertical,
    description: p.description,
    tags: p.tags,
    previewAccent: p.previewAccent,
  }));
}
