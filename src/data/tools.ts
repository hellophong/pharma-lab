export type ToolStatus = "live" | "prototype" | "coming-soon";

export type Tool = {
  id: string;
  name: string;
  description: string;
  status: ToolStatus;
  /** Required for the card to be clickable. Leave out for placeholders. */
  url?: string;
};

// Add a tool by adding one entry here. The grid picks it up automatically.
export const tools: Tool[] = [
  {
    id: "pharma-lexicon",
    name: "Pharma Lexicon",
    description: "A field guide to agency language. 50 terms, in context.",
    status: "live",
    url: "https://hellophong.github.io/pharma-lexicon/",
  },
  {
    id: "medlens",
    name: "MedLens",
    description:
      "Look up any drug. Clinical and commercial summary at a glance.",
    status: "live",
    url: "https://hellophong.github.io/medlens-frontend/",
  },
  {
    id: "prototype-03",
    name: "Prototype 03",
    description: "In the lab. Details to come.",
    status: "coming-soon",
  },
  {
    id: "prototype-04",
    name: "Prototype 04",
    description: "In the lab. Details to come.",
    status: "coming-soon",
  },
  {
    id: "prototype-05",
    name: "Prototype 05",
    description: "In the lab. Details to come.",
    status: "coming-soon",
  },
  {
    id: "prototype-06",
    name: "Prototype 06",
    description: "In the lab. Details to come.",
    status: "coming-soon",
  },
];
