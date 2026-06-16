/** Live focus areas displayed in the "Currently" section. */

export interface CurrentlyItem {
  id: string;
  label: string;
  value: string;
  status: "active" | "upcoming" | "complete";
  accent?: string;
}

export const currentlyItems: CurrentlyItem[] = [
  {
    id: "music",
    label: "Music Production",
    value: "Deep house EP — final mixdown sprint",
    status: "active",
    accent: "#d4af37",
  },
  {
    id: "dj",
    label: "Live Sets",
    value: "Warehouse residency — June sessions",
    status: "active",
    accent: "#f5d76e",
  },
  {
    id: "proptech",
    label: "PropTech Sprint",
    value: "AI listing agent — pipeline v2 rollout",
    status: "active",
    accent: "#a68b2a",
  },
  {
    id: "consulting",
    label: "Tech Consulting",
    value: "Field routing engine — plumbing vertical",
    status: "upcoming",
    accent: "#71717a",
  },
];
