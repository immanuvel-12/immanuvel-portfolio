import expense from "./assets/expense-tracker.png";
import shopping from "./assets/e-commerce.png";
import contactFlow from "./assets/contact-flow.png";
import chatApplication from "./assets/real-time-chat.png";

import mernCertificate from "./assets/mern-stack-certificate.jpg";
import webCertificate from "./assets/web-dev-certificate.png";
import uiuxCertificate from "./assets/ui-ux-certificate.jpeg";
import tallyCertificate from "./assets/tally-certificate.png";
import adobeCertificate from "./assets/adobe-certificate.png";

// ================= PROJECTS =================

const DEFAULT_PROJECTS = [
  {
    id: "p1",
    title: "Expensio – Personal Expense Tracker",
    desc: "Developed a personal finance dashboard to track income, expenses, balance, and monthly budgets, featuring transaction management, category-based tracking, financial charts, and goal planning.",
    img: expense,
    link: "https://expense-tracker-xi-eight-62.vercel.app/",
  },
  {
    id: "p2",
    title: "ChatConnect – Real-Time Chat Application",
    desc: "Developed a real-time messaging application with secure JWT authentication, instant messaging, online user status, and seamless communication using Socket.io. Implemented responsive UI and RESTful APIs for efficient user and chat management.",
    img: chatApplication,
    link: "https://real-time-chat-application-two-inky.vercel.app/",
  },
  {
    id: "p3",
    title: "StyleHub – Fashion E-Commerce Website",
    desc: "Developed a responsive fashion e-commerce platform featuring product browsing, shopping cart management, secure user authentication, order processing, and an intuitive shopping experience using the MERN stack.",
    img: shopping,
    link: "https://stylehub-frontend-nu.vercel.app/",
  },
  {
    id: "p4",
    title: "ContactFlow – Contact Management System",
    desc: "Developed a full-stack contact management application using React.js, Node.js, Express.js, and MongoDB, featuring contact creation, updating, deletion, organized contact records, and RESTful API integration.",
    img: contactFlow,
    link: "#",
  },
];

// ================= CERTIFICATES =================

const DEFAULT_CERTS = [
  {
    id: "c1",
    title: "MERN Stack Intern Certificate",
    img: mernCertificate,
  },
  {
    id: "c2",
    title: "Web Development Intern Certificate",
    img: webCertificate,
  },
  {
    id: "c3",
    title: "UI/UX Intern Certificate",
    img: uiuxCertificate,
  },
  {
    id: "c4",
    title: "Tally Certificate",
    img: tallyCertificate,
  },
  {
    id: "c5",
    title: "Adobe XD Certificate",
    img: adobeCertificate,
  },
];

// ================= TECH STACK =================

const DEFAULT_TECH = [
  { id: "t1", name: "JavaScript", icon: "SiJavascript" },
  { id: "t2", name: "HTML5", icon: "FaHtml5" },
  { id: "t3", name: "CSS3", icon: "FaCss3Alt" },
  { id: "t4", name: "React.js", icon: "FaReact" },
  { id: "t5", name: "Node.js", icon: "FaNodeJs" },
  { id: "t6", name: "Express.js", icon: "SiExpress" },
  { id: "t7", name: "MongoDB", icon: "SiMongodb" },
  { id: "t8", name: "Tailwind CSS", icon: "SiTailwindcss" },
  { id: "t9", name: "Git", icon: "SiGit" },
  { id: "t10", name: "GitHub", icon: "SiGithub" },
  { id: "t11", name: "Postman", icon: "SiPostman" },
  { id: "t12", name: "Vercel", icon: "SiVercel" },
  { id: "t13", name: "Netlify", icon: "SiNetlify" },
  { id: "t14", name: "Socket.io", icon: "SiSocketdotio" },
  { id: "t15", name: "JWT", icon: "SiJsonwebtokens" },
];

// ================= INITIALIZATION =================

export const initData = () => {
  // Update projects only once.
  const projectMigrationKey = "portfolioProjectsV4";

  if (!localStorage.getItem(projectMigrationKey)) {
    localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
    localStorage.setItem(projectMigrationKey, "true");
  } else if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
  }

  // Update default certificates and preserve custom certificates.
  try {
    const savedCerts = JSON.parse(localStorage.getItem("certificates") || "[]");

    const updatedDefaults = DEFAULT_CERTS.map((defaultCert) => {
      const saved = savedCerts.find((cert) => cert.id === defaultCert.id);

      return saved ? { ...saved, ...defaultCert } : defaultCert;
    });

    const customCerts = savedCerts.filter(
      (cert) => !DEFAULT_CERTS.some((item) => item.id === cert.id),
    );

    localStorage.setItem(
      "certificates",
      JSON.stringify([...updatedDefaults, ...customCerts]),
    );
  } catch {
    localStorage.setItem("certificates", JSON.stringify(DEFAULT_CERTS));
  }

  // Update technology list only once.
  const techMigrationKey = "portfolioTechV3";

  if (!localStorage.getItem(techMigrationKey)) {
    localStorage.setItem("techStack", JSON.stringify(DEFAULT_TECH));
    localStorage.setItem(techMigrationKey, "true");
  } else if (!localStorage.getItem("techStack")) {
    localStorage.setItem("techStack", JSON.stringify(DEFAULT_TECH));
  }
};

// ================= PROJECT FUNCTIONS =================

export const getProjects = () =>
  JSON.parse(localStorage.getItem("projects") || "[]");

export const addProject = (project) => {
  const data = getProjects();

  data.push({
    id: Date.now().toString(),
    ...project,
  });

  localStorage.setItem("projects", JSON.stringify(data));
};

export const deleteProject = (id) => {
  const data = getProjects().filter((project) => project.id !== id);

  localStorage.setItem("projects", JSON.stringify(data));
};

// ================= CERTIFICATE FUNCTIONS =================

export const getCertificates = () =>
  JSON.parse(localStorage.getItem("certificates") || "[]");

export const addCertificate = (cert) => {
  const data = getCertificates();

  data.push({
    id: Date.now().toString(),
    ...cert,
  });

  localStorage.setItem("certificates", JSON.stringify(data));
};

export const deleteCertificate = (id) => {
  const data = getCertificates().filter((cert) => cert.id !== id);

  localStorage.setItem("certificates", JSON.stringify(data));
};

// ================= TECH STACK FUNCTIONS =================

export const getTechStack = () =>
  JSON.parse(localStorage.getItem("techStack") || "[]");

export const addTech = (tech) => {
  const data = getTechStack();

  data.push({
    id: Date.now().toString(),
    ...tech,
  });

  localStorage.setItem("techStack", JSON.stringify(data));
};

export const deleteTech = (id) => {
  const data = getTechStack().filter((tech) => tech.id !== id);

  localStorage.setItem("techStack", JSON.stringify(data));
};
