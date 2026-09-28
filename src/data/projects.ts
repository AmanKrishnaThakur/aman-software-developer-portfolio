export type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  stack: string[];
  href?: string;
  cta?: string;
};

export const featuredProject: Project = {
  title: "Production GRC Application",
  category: "Complyr",
  status: "Professional Experience",
  description:
    "Contributing across the stack to a production GRC fintech application using React, TypeScript, Node.js, PostgreSQL and AWS. My work spans UI development, APIs, authentication, business workflows and cloud-backed application features.",
  stack: ["React", "TypeScript", "JavaScript", "Node.js", "PostgreSQL", "AWS"],
  href: "#experience",
  cta: "View experience",
};

export const personalProjects: Project[] = [
  {
    title: "Weather App",
    category: "API-powered interface",
    status: "Personal Project",
    description:
      "Searches for a city, fetches current weather from an external API, and updates the page with conditions or an error state.",
    stack: ["JavaScript", "HTML", "CSS", "Fetch API", "Async/Await"],
  },
  {
    title: "Rock Paper Scissors",
    category: "Browser game",
    status: "Personal Project",
    description:
      "Generates computer choices, evaluates each round, and updates player and computer scores through DOM event handling.",
    stack: ["JavaScript", "HTML", "CSS", "DOM", "Events"],
  },
  {
    title: "Dragon Repeller RPG",
    category: "Interactive game",
    status: "In Progress",
    description:
      "A browser RPG exploring location changes, inventory, combat, upgrades, and player progression through JavaScript state.",
    stack: ["JavaScript", "HTML", "CSS", "State Management"],
  },
];

export const moreProjects: Project[] = [
  {
    title: "Stopwatch",
    category: "Timing interface",
    status: "Fundamentals",
    description: "Start, stop, and reset controls built with JavaScript timers and elapsed-time state.",
    stack: ["JavaScript", "DOM"],
  },
  {
    title: "Digital Clock",
    category: "Live display",
    status: "Fundamentals",
    description: "A 12-hour clock updated every second with the Date API and DOM updates.",
    stack: ["JavaScript", "Date API"],
  },
  {
    title: "Temperature Converter",
    category: "Input utility",
    status: "Fundamentals",
    description: "Converts a typed temperature between Celsius and Fahrenheit using radio controls.",
    stack: ["JavaScript", "Forms"],
  },
  {
    title: "Simple Counter",
    category: "DOM exercise",
    status: "Fundamentals",
    description: "Increment, decrement, and reset controls for a counter displayed on the page.",
    stack: ["JavaScript", "DOM"],
  },
];
