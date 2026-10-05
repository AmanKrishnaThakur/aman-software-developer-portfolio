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
    "Production application work with React, TypeScript, Node.js, PostgreSQL, and AWS. I contribute to interfaces, authentication, workflows, and cloud integrations.",
  stack: ["React", "TypeScript", "JavaScript", "Node.js", "PostgreSQL", "AWS"],
  href: "#experience",
  cta: "View experience",
};

export const personalProjects: Project[] = [
  {
    title: "Movie Discovery & Search",
    category: "API-powered movie browser",
    status: "Personal Project",
    description:
      "A movie browser that fetches popular titles and search results from TMDB, then builds poster and title cards in the page.",
    stack: ["HTML", "CSS", "JavaScript", "Fetch API", "DOM"],
  },
  {
    title: "Weather App",
    category: "API-powered interface",
    status: "Personal Project",
    description:
      "Search a city to see current conditions. Uses asynchronous requests to display weather results or an error state.",
    stack: ["JavaScript", "HTML", "CSS", "Fetch API", "Async/Await"],
  },
  {
    title: "Dragon Repeller RPG",
    category: "Interactive game",
    status: "In Progress",
    description:
      "A browser RPG with location changes, inventory, combat, and upgrades managed through JavaScript state.",
    stack: ["JavaScript", "HTML", "CSS", "State Management"],
  },
];

export const moreProjects: Project[] = [
  {
    title: "Rock Paper Scissors",
    category: "Browser game",
    status: "Personal Project",
    description: "Randomized computer choices, round evaluation, and player and computer scores updated through DOM events.",
    stack: ["JavaScript", "HTML", "CSS", "DOM", "Events"],
  },
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
