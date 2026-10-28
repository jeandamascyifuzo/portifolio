// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Jean Damascene Cyifuzo",
  shortName: "Jean Cyifuzo",
  roles: ["Full Stack Developer", "Backend Engineer", "React Developer"],
  tagline:
    "I build fast, reliable web applications with React, Node.js and PostgreSQL — from the database up to the pixels.",
  handle: "jeandamascyifuzo",
  location: "Kigali, Rwanda",
  about: [
    "I'm a full stack web developer who enjoys turning ideas into interactive, responsive products. Most of my work sits on the JavaScript stack: React and Next.js on the frontend, Node.js, Express and GraphQL on the backend, and PostgreSQL underneath.",
    "I trained through the Andela Technical Leadership Program (ATLP) and studied at the University of Rwanda College of Science and Technology. I learn quickly, care about clean code, and like working closely with a team to ship things people actually use.",
  ],
  image: "/images/profile.jpg",
  // Set to a file in /public (e.g. "/cv.pdf") to show a "Download CV" button.
  resumeUrl: null,
  // Replace with the deployed domain so share previews resolve.
  siteUrl: "http://localhost:3000",
};

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/jeandamascyifuzo",
    icon: "/github-icon.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/damascene-cyifuzo-9330ba17a/",
    icon: "/linkedin-icon.svg",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "React", "Redux", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "GraphQL", "REST APIs"],
  },
  {
    category: "Data & Tools",
    items: ["PostgreSQL", "Sequelize", "Git"],
  },
];

export const education = [
  {
    title: "University of Rwanda",
    subtitle: "College of Science and Technology",
  },
];

export const certifications = [
  {
    title: "Andela Technical Leadership Program (ATLP)",
    subtitle: "Andela, Rwanda",
  },
];

// `description` and `tech` are optional; cards show them when present.
export const projects = [
  {
    title: "Travel to Germany",
    image: "/images/projects/project1.png",
    category: "Web",
    description: "",
    tech: [],
    liveUrl: "https://www.akagera-rhein-academy.com/",
    repoUrl: null,
  },
  {
    title: "Beegulf",
    image: "/images/projects/project2.png",
    category: "Web",
    description: "",
    tech: [],
    liveUrl: "https://beegulf.rw/",
    repoUrl: null,
  },
  {
    title: "Bongalo",
    image: "/images/projects/project3.png",
    category: "Web",
    description: "",
    tech: [],
    liveUrl: "https://www.bongalo.com/",
    repoUrl: null,
  },
  {
    title: "Code Renders",
    image: "/images/projects/project4.png",
    category: "Web",
    description: "",
    tech: [],
    liveUrl: "https://www.coderenders.com/",
    repoUrl: null,
  },
  {
    title: "Personal Portfolio",
    image: "/images/projects/project5.png",
    category: "Web",
    description: "This site. Built with Next.js, Tailwind CSS and Framer Motion.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "/",
    repoUrl: null,
  },
];

// The Experience section is hidden while this list is empty. Add entries like:
// {
//   role: "Software Engineer",
//   company: "Company name",
//   date: "Jan 2023 – Present",
//   description: "What you built and the impact it had.",
//   skills: ["React", "Node.js"],
// },
export const experiences = [];
