import styleHub from "./assets/style-hub.png";
import expensio from "./assets/expensio.png";
import contactFlow from "./assets/contact-flow.png";

import mernCertificate from "./assets/mern-stack-certificate.jpg";
import webCertificate from "./assets/web-dev-certificate.png";
import uiuxCertificate from "./assets/ui-ux-certificate.jpeg";
import tallyCertificate from "./assets/tally-certificate.png";
import adobeCertificate from "./assets/adobe-certificate.png";

const DEFAULT_PROJECTS = [
  {
    id: "p1",
    title: "STYLE HUB – Fashion E-Commerce Website",
    desc: "Designed a modern fashion e-commerce website featuring a clean user interface, elegant product presentation, intuitive navigation, and a responsive shopping experience.",
    img: styleHub,
    link: "#",
  },
  {
    id: "p2",
    title: "Expensio – Personal Expense Tracker",
    desc: "Developed a personal finance dashboard to track income, expenses, balance, and monthly budgets, with transaction management, category-based tracking, financial charts, and goal planning.",
    img: expensio,
    link: "#",
  },
  {
    id: "p3",
    title: "ContactFlow – Contact Management System",
    desc: "Developed a full-stack contact management application using React.js, Node.js, Express.js, and MongoDB, featuring contact creation, contact records, REST API integration, and database connectivity.",
    img: contactFlow,
    link: "#",
  },
];

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

const DEFAULT_TECH = [
  { id: "t1", name: "HTML5", icon: "FaHtml5" },
  { id: "t2", name: "CSS3", icon: "FaCss3Alt" },
  { id: "t3", name: "JavaScript", icon: "SiJavascript" },
  { id: "t4", name: "React.js", icon: "FaReact" },
  { id: "t5", name: "Node.js", icon: "FaNodeJs" },
  { id: "t6", name: "Express.js", icon: "SiExpress" },
  { id: "t7", name: "MongoDB", icon: "SiMongodb" },
  { id: "t8", name: "SQL", icon: "SiMysql" },
  { id: "t9", name: "GitHub", icon: "SiGithub" },
];

export const initData = () => {
  // Replace the old projects once with the new three projects.
  // Later visits will preserve projects added through the app.
  const migrationKey = "portfolioProjectsV2";

  if (!localStorage.getItem(migrationKey)) {
    localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
    localStorage.setItem(migrationKey, "true");
  } else if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", JSON.stringify(DEFAULT_PROJECTS));
  }

  // Keep the default certificates and preserve custom certificates.
  try {
    const savedCerts = JSON.parse(
      localStorage.getItem("certificates") || "[]"
    );

    const updatedDefaults = DEFAULT_CERTS.map((defaultCert) => {
      const saved = savedCerts.find(
        (cert) => cert.id === defaultCert.id
      );

      return saved ? { ...saved, ...defaultCert } : defaultCert;
    });

    const customCerts = savedCerts.filter(
      (cert) => !DEFAULT_CERTS.some((item) => item.id === cert.id)
    );

    localStorage.setItem(
      "certificates",
      JSON.stringify([...updatedDefaults, ...customCerts])
    );
  } catch {
    localStorage.setItem("certificates", JSON.stringify(DEFAULT_CERTS));
  }

  // Refresh the default technology list.
  localStorage.setItem("techStack", JSON.stringify(DEFAULT_TECH));
};

// Projects
export const getProjects = () =>
  JSON.parse(localStorage.getItem("projects") || "[]");

export const addProject = (project) => {
  const data = getProjects();
  data.push({ id: Date.now().toString(), ...project });
  localStorage.setItem("projects", JSON.stringify(data));
};

export const deleteProject = (id) => {
  const data = getProjects().filter((project) => project.id !== id);
  localStorage.setItem("projects", JSON.stringify(data));
};

// Certificates
export const getCertificates = () =>
  JSON.parse(localStorage.getItem("certificates") || "[]");

export const addCertificate = (cert) => {
  const data = getCertificates();
  data.push({ id: Date.now().toString(), ...cert });
  localStorage.setItem("certificates", JSON.stringify(data));
};

export const deleteCertificate = (id) => {
  const data = getCertificates().filter((cert) => cert.id !== id);
  localStorage.setItem("certificates", JSON.stringify(data));
};

// Tech Stack
export const getTechStack = () =>
  JSON.parse(localStorage.getItem("techStack") || "[]");

export const addTech = (tech) => {
  const data = getTechStack();
  data.push({ id: Date.now().toString(), ...tech });
  localStorage.setItem("techStack", JSON.stringify(data));
};

export const deleteTech = (id) => {
  const data = getTechStack().filter((tech) => tech.id !== id);
  localStorage.setItem("techStack", JSON.stringify(data));
};
