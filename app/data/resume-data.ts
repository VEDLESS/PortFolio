import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Vedant Anasune",
  location: "India",

  about:
    "Motivated software developer with a strong track record of successfully completing various projects. Proficient in various programming languages and technologies, including C, C++, and web development technologies (HTML, CSS, JavaScript). Skilled in areas such as file handling, multithreading, game development, virtualization, and networking. Strong problem-solving abilities and a solid understanding of software development principles. Committed to continuous learning and delivering high-quality solutions. Ready to contribute expertise to new challenges.",
  summary:
    "As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in CS and two years of English studies under my belt. !",
  avatarUrl: "./Vedu.jpg",

  contact: {
    email: "vedantanasuneaa@gmail.com",
    tel: "+917822837867",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/VEDLESS",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
  url: "https://www.linkedin.com/in/vedantanasune?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/VEDLESS",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "New Era High School",
      degree: "Higher Secondary School Certificate.",
      start: "2021",
      end: "2023",
    },
    {
      school: "VJTI,Mumbai",
      degree: "Bachelor's Degree in Computer Science.",
      start: "2023",
      end: "present",
    },
  ],
  skills: [
    // Programming Languages
    "C++",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",

    // Frontend Development
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Web Design",
    "UI State Management",
    "Component-based Architecture",

    // Backend Development
    "Node.js",
    "Express.js",
    "REST API Development",
    "Authentication basics (JWT / Session concepts)",
    "API Integration (Google Translate, News APIs)",

    // Databases
    "MongoDB",
    "MySQL / MariaDB",

    // DevOps / Deployment
    "Linux",
    "GitHub Project & Repository Management",
    "Basic CI/CD understanding",
    "Deploying small web projects",

    // Tools & Platforms
    "Git & GitHub",
    "VS Code",
    "Linux Terminal",
    "Postman (API Testing)",
    "Chrome DevTools (Debugging & Performance)",
    "Figma (wireframes & UI planning)",
  ],

  projects: [
    {
      title: "Newstragram — Personalized News Platform",
      techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      description:
        "Built a personalized news platform where users can like, comment, report, verify, and share news; integrated external APIs for real-time trending updates and crafted a responsive UI for readability and smooth navigation.",
  image: "/projects/newstragram.svg",
      link: {
        label: "(Repo Pending)",
        href: "#",
      },
    },
    {
      title: "Globalingo — Real-time Language Translator",
      techStack: ["JavaScript", "HTML", "CSS", "Google Translate API", "API Integration"],
      description:
        "Web-based translation tool supporting 50+ languages with language detection, text swapping, file upload, and downloadable translated text; optimized for clean interaction workflows.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
      link: {
        label: "GitHub",
        href: "https://github.com/VEDLESS/GlobaLingo",
      },
    },
    {
      title: "Eventora — Smart Event Management System",
      techStack: ["MySQL", "MariaDB", "DBMS"],
      description:
        "Designed an event management database system modeling attendees, tickets, payments, reviews, venues, and organizers; implemented relational schema with constraints, triggers, and optimized queries to demonstrate real-world workflow and integrity management.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
      link: {
        label: "(Repo Pending)",
        href: "#",
      },
    },
  ],

  experience: [
    {
      company: "Ashley Global Exim",
      position: "Web Development Intern",
      location: "Remote",
      startDate: "May 2025",
      endDate: "Present",
      description:
        "Designing and developing the company’s official business website with a responsive, brand-aligned UI and strong performance.",
  bannerImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=60",
  logo: "/logos/ashley-global-exim.svg",
      skills: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "UI/UX",
        "Performance Optimization",
        "Responsive Design",
      ],
      achievements: [
        "Collaborated with the website team to design and develop the official business website",
        "Ensured brand-aligned UI with cross-device compatibility and responsive layouts",
        "Optimized performance for faster loading and enhanced user experience",
        "Worked with stakeholders to maintain visual alignment, usability, and consistency",
      ],
    },
    {
      company: "Training & Placement Office (TPO), VJTI",
      position: "Student Placement Coordinator",
      location: "Mumbai, India",
      startDate: "Apr 2025",
      endDate: "Present",
      description:
        "Coordinating internship drives and placement activities, liaising between students, TPO, and company HR teams.",
  bannerImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=60",
  logo: "/logos/tpo-vjti.svg",
      skills: [
        "Communication",
        "Coordination",
        "Stakeholder Management",
        "Event Management",
        "Scheduling",
      ],
      achievements: [
        "Organized and coordinated internship drives and placement activities for 200+ students",
        "Acted as the main communication bridge between students and the Training & Placement Office",
        "Coordinated with HR teams from multiple companies to ensure seamless interview logistics",
        "Facilitated issue resolution, schedule handling, and documentation workflows",
      ],
    },
    {
      company: "Technovanza, VJTI",
      position: "Department Head",
      location: "Mumbai, India",
      startDate: "Sep 2024",
      endDate: "Apr 2025",
      description:
        "Led department operations and oversaw planning and execution of events with a large student team.",
  bannerImage: "/banners/technovanza-alt.svg",
  logo: "/logos/technovanza.svg",
      skills: [
        "Leadership",
        "Team Management",
        "Event Planning",
        "Operations",
        "Collaboration",
      ],
      achievements: [
        "Managed department operations and oversaw event planning and execution",
        "Coordinated a 100+ member student team, ensuring smooth collaboration and task delegation",
        "Focused on organizing events that fostered innovation, communication, and teamwork",
      ],
    },
    {
      company: "Pratibimb, VJTI",
      position: "Marketing Executive",
      location: "Mumbai, India",
      startDate: "Sep 2024",
      endDate: "Apr 2025",
      description:
        "Drove strategic marketing initiatives for event promotions and brand communication across digital channels.",
  bannerImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=60",
  logo: "/logos/pratibimb.svg",
      skills: [
        "Marketing",
        "Social Media",
        "Content Strategy",
        "Branding",
        "Campaign Management",
      ],
      achievements: [
        "Led strategic marketing initiatives for event promotions and brand communication",
        "Managed social media content, engagement campaigns, and public outreach",
        "Increased event visibility through digital outreach and targeted promotion strategies",
      ],
    },
  ],
} as const;
