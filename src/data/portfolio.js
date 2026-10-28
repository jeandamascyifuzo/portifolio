// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Jean Damascene Cyifuzo",
  shortName: "Jean Cyifuzo",
  roles: ["Software Engineer", "Mobile Engineer", "Full Stack Developer"],
  // Short label for the profile card in the hero.
  specialty: "Mobile & Web",
  yearsOfExperience: "5+",
  tagline:
    "I build scalable web and mobile applications — React Native, Angular, React and Next.js up front, Node.js, GraphQL and PostgreSQL behind.",
  handle: "jeandamascyifuzo",
  location: "Kigali, Rwanda",
  about: [
    "I'm a results-driven software engineer with 5+ years of experience building scalable web and mobile applications, with strong expertise in React Native alongside Angular, React and Next.js.",
    "I design high-performance user interfaces, build robust APIs, and ship production-ready apps across web and mobile. I care about clean architecture, performance and seamless user experiences. Today I'm at ADFinance, building digital banking channels for microfinance institutions.",
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
    category: "Mobile",
    items: ["React Native", "Expo", "Mobile UI/UX", "Push Notifications"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Testing",
    items: ["Vitest", "Playwright", "Mocha", "Chai", "Git", "CI/CD", "Docker"],
  },
];

export const education = [
  {
    title: "BSc in Computer and Software Engineering",
    subtitle: "University of Rwanda · 2017 – 2021",
  },
  {
    title: "Full Stack Development Program",
    subtitle: "Andela Rwanda",
  },
];

export const certifications = [
  {
    title: "Andela Full-stack Certificate",
    subtitle: "Andela Rwanda",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    subtitle: "freeCodeCamp",
  },
  {
    title: "Responsive Web Design",
    subtitle: "freeCodeCamp",
  },
];

// Highlighted case study shown above the project grid.
export const featuredProject = {
  title: "MFI Hub — Universal Digital Banking Platform",
  company: "ADFinance",
  summary:
    "A multi-tenant platform that gives microfinance institutions a complete set of digital channels — a white-label mobile app, USSD banking, and web portals for platform admins, MFI staff and integrators — all connected to their core banking systems. Each MFI gets its own branding, menus and configuration without a redeploy.",
  stats: [
    { value: "1,000+", label: "Commits" },
    { value: "12", label: "Repositories" },
    { value: "3", label: "Channels" },
    { value: "3", label: "Countries" },
  ],
  tech: ["Angular", "NativeScript", "Node.js", "Express", "PostgreSQL", "Kafka", "Keycloak", "Docker"],
};

// Optional fields: `cover` (a built-in illustration — "mobile" or "ussd" —
// used instead of `image`),
// `liveUrl` (else the card is marked private), `repoUrl`, `description`,
// `highlights`, `tech`.
export const projects = [
  {
    title: "Mobile Banking App",
    category: "Fintech",
    cover: "mobile",
    description:
      "White-label mobile banking app for MFIs, running natively on iOS and Android from one TypeScript codebase.",
    highlights: [
      "Shipped the iOS build and the Burundi rollout, with French, Kirundi and Kinyarwanda translations",
      "Per-tenant API configuration and CI pipelines that build branded APKs",
      "Security questions, error handling and loan repayment views",
    ],
    tech: ["NativeScript", "Angular", "TypeScript", "Firebase"],
  },
  {
    title: "USSD Banking Gateway",
    category: "Fintech",
    cover: "ussd",
    description:
      "Multi-tenant USSD gateway that lets feature-phone users bank with their MFI through USSD menus.",
    highlights: [
      "Built the USSD application and its menu state machine",
      "Integrated TruTeq gateways",
      "Per-MFI workspaces, multi-currency screens and test coverage",
    ],
    tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Vitest"],
  },
  {
    title: "Agrovia Rwanda",
    image: "/images/projects/agrovia.jpg",
    category: "Web",
    description:
      "Website for a Kigali agriculture company working with smallholder farmers — services, team, testimonials, blog and contact.",
    liveUrl: "https://agrovia-psi.vercel.app/",
  },
  {
    title: "Emberline Coffee",
    image: "/images/projects/emberline-coffee.jpg",
    category: "Web",
    description:
      "Website for a Kigali coffee shop and roastery — story, menu, services, testimonials and table reservations.",
    liveUrl: "https://koppecoffee.vercel.app/",
  },
  {
    title: "Travel to Germany",
    image: "/images/projects/project1.png",
    category: "Web",
    liveUrl: "https://www.akagera-rhein-academy.com/",
  },
  {
    title: "Beegulf",
    image: "/images/projects/project2.png",
    category: "Web",
    liveUrl: "https://beegulf.rw/",
  },
  {
    title: "Bongalo",
    image: "/images/projects/project3.png",
    category: "Web",
    liveUrl: "https://www.bongalo.com/",
  },
  {
    title: "Code Renders",
    image: "/images/projects/project4.png",
    category: "Web",
    liveUrl: "https://www.coderenders.com/",
  },
  {
    title: "Personal Portfolio",
    image: "/images/projects/project5.png",
    category: "Web",
    description: "This site. Built with Next.js, Tailwind CSS and Framer Motion.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "/",
  },
];

// The Experience section is hidden while this list is empty.
export const experiences = [
  {
    role: "Mobile Engineer",
    company: "ADFinance Ltd",
    date: "Feb 2026 – Present",
    location: "Kigali, Rwanda",
    highlights: [
      "Working on a mobile application project using React Native, focusing on performance, scalability and user experience.",
      "Developing reusable mobile components and implementing clean architecture for maintainability.",
      "Integrating APIs and handling secure data flows between the mobile app and backend services.",
      "Collaborating with cross-functional teams to deliver production-ready mobile features.",
    ],
    skills: ["React Native", "TypeScript", "API Integration"],
  },
  {
    role: "Software Engineer",
    company: "SAMPHONE Rwanda Ltd",
    date: "Mar 2023 – Jan 2026",
    location: "Kigali, Rwanda",
    highlights: [
      "Developed enterprise applications including CRM and POS systems using Angular, Next.js and React Native.",
      "Designed scalable frontend architectures for performance and responsiveness across web and mobile.",
      "Built RESTful APIs with Node.js and optimized PostgreSQL databases for performance and reliability.",
      "Implemented internationalization (i18n) for multi-language support.",
      "Applied security best practices, including XSS protection and secure API handling.",
      "Ran unit, integration and API testing, and took part in code reviews to keep quality high.",
    ],
    skills: ["Angular", "Next.js", "Node.js", "PostgreSQL", "React Native"],
  },
  {
    role: "Frontend Engineer",
    company: "The Artemis AI",
    date: "Jun 2025 – Nov 2025",
    location: "Remote · Mexico",
    highlights: [
      "Built a modern, responsive analytics platform using Next.js, React and TypeScript.",
      "Developed a dynamic reporting engine with PDF and CSV export.",
      "Implemented multi-step onboarding flows using Zustand.",
      "Integrated backend services for data processing and visualization.",
      "Ensured reliability with unit and end-to-end testing (Vitest, Playwright).",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    role: "Full-stack Engineer",
    company: "Myechelon",
    date: "Sep 2022 – Jan 2023",
    highlights: [
      "Developed scalable backend APIs using Node.js and MongoDB, and high-performance Next.js frontends.",
      "Built a real-time car-tracking mobile app in React Native with geolocation, maps and push notifications.",
      "Improved API performance by 25% through optimization.",
      "Applied Test-Driven Development with Mocha and Chai.",
    ],
    skills: ["Node.js", "Next.js", "React Native", "MongoDB"],
  },
  {
    role: "Software Developer Trainee",
    company: "Andela Rwanda",
    date: "Nov 2021 – Oct 2022",
    location: "Kigali, Rwanda",
    highlights: [
      "Developed a real-time bus tracking application with WebSocket integration.",
      "Built both web and mobile interfaces, using React Native for mobile.",
      "Built RESTful APIs and documented them with Swagger.",
    ],
    skills: ["React", "React Native", "Node.js", "PostgreSQL", "GraphQL"],
  },
  {
    role: "Junior Frontend Developer",
    company: "Besoft Company",
    date: "Aug 2020 – Sep 2021",
    location: "Remote · South Africa",
    highlights: [
      "Built frontend applications using React and Vue.js.",
      "Implemented UI designs from Figma with high client satisfaction.",
      "Managed application state with Redux and Redux Toolkit.",
      "Integrated Django-based REST APIs.",
    ],
    skills: ["React", "Vue.js", "Redux", "JavaScript", "Django"],
  },
];
