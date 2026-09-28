export type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
  href?: string;
  cta?: string;
  visual: string;
};

export const featuredProject: Project = {
  title: "Compliance Workflow Platform",
  category: "Production experience at Complyr",
  status: "Professional Experience",
  description:
    "Production GRC work spanning a React and TypeScript application, Node.js APIs, PostgreSQL, AWS serverless services, authentication, compliance rules, task workflows, and invoice OCR. The source is proprietary.",
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  href: "#experience",
  cta: "View experience",
  visual: "workflow",
};

export const personalProjects: Project[] = [
  {
    title: "Rock Paper Scissors",
    category: "Browser game",
    status: "Local learning project",
    description:
      "A browser game with randomized computer choices, round outcomes, and an updating score display.",
    stack: ["JavaScript", "HTML", "CSS"],
    visual: "rps",
  },
  {
    title: "Dragon Repeller RPG",
    category: "Interactive game",
    status: "Local learning project",
    description:
      "A small text RPG with locations, inventory, combat, upgrades, and game state handled in vanilla JavaScript. Some game logic still needs polish.",
    stack: ["JavaScript", "HTML", "CSS"],
    visual: "rpg",
  },
  {
    title: "Stopwatch",
    category: "UI exercise",
    status: "Local learning project",
    description:
      "A focused timing interface built with browser DOM APIs and vanilla JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    visual: "stopwatch",
  },
];
