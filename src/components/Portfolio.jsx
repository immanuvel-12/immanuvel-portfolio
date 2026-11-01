import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  initData,
  getProjects,
  getCertificates,
  getTechStack,
} from "../dataManager";

import { FiExternalLink, FiX } from "react-icons/fi";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiSocketdotio,
  SiJsonwebtokens,
} from "react-icons/si";

// ================= ICON MAP =================

const iconMap = {
  FaHtml5: <FaHtml5 color="#E34F26" />,
  FaCss3Alt: <FaCss3Alt color="#1572B6" />,
  SiJavascript: <SiJavascript color="#F7DF1E" />,
  FaReact: <FaReact color="#61DAFB" />,
  FaNodeJs: <FaNodeJs color="#339933" />,
  SiExpress: <SiExpress color="currentColor" />,
  SiMongodb: <SiMongodb color="#47A248" />,
  SiGithub: <SiGithub color="currentColor" />,
  SiTailwindcss: <SiTailwindcss color="#06B6D4" />,
  SiGit: <SiGit color="#F05032" />,
  SiPostman: <SiPostman color="#FF6C37" />,
  SiVercel: <SiVercel color="currentColor" />,
  SiNetlify: <SiNetlify color="#00C7B7" />,
  SiSocketdotio: <SiSocketdotio color="currentColor" />,
  SiJsonwebtokens: <SiJsonwebtokens color="#FB015B" />,
};

// ================= PORTFOLIO COMPONENT =================

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const [projects, setProjects] = useState([]);
  const [certs, setCerts] = useState([]);
  const [techStack, setTechStack] = useState([]);

  const [selectedCert, setSelectedCert] = useState(null);

  // ================= LOAD DATA =================

  useEffect(() => {
    initData();

    setProjects(getProjects());
    setCerts(getCertificates());
    setTechStack(getTechStack());
  }, []);

  // ================= TABS =================

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "tech", label: "Tech Stack" },
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>

          <p className="text-textSecondary text-sm md:text-base mb-6">
            Explore my projects, certifications, and technical expertise.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* ================= PORTFOLIO TABS ================= */}

        <div className="flex justify-center mb-12 space-x-2 md:space-x-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 mb-2 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass text-textSecondary hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {/* ================= PROJECTS ================= */}

          {activeTab === "projects" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                >
                  {/* PROJECT IMAGE */}

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      onError={(e) => {
                        e.currentTarget.style.visibility = "hidden";
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {project.link && project.link !== "#" && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* PROJECT DETAILS */}

                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-textSecondary text-sm leading-relaxed line-clamp-4">
                      {project.desc}
                    </p>

                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-5 hover:gap-3 transition-all"
                      >
                        View Project
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ================= CERTIFICATES ================= */}

          {activeTab === "certificates" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all border border-white/10 hover:border-primary/50"
                >
                  {/* CERTIFICATE IMAGE */}

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      onError={(e) => {
                        e.currentTarget.style.visibility = "hidden";
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium scale-0 group-hover:scale-100 transition-transform duration-300">
                        View Certificate
                      </span>
                    </div>
                  </div>

                  {/* CERTIFICATE TITLE */}

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-display font-semibold text-white">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ================= TECH STACK ================= */}

          {activeTab === "tech" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex flex-col items-center justify-center gap-4 p-6 glass-card rounded-2xl min-w-[125px] min-h-[125px] border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
                >
                  {/* TECHNOLOGY ICON */}

                  <div className="text-4xl">{iconMap[tech.icon] || null}</div>

                  {/* TECHNOLOGY NAME */}

                  <span className="text-sm font-medium text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* ================= CERTIFICATE PREVIEW MODAL ================= */}

      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate"
              className="absolute -top-12 right-0 md:-top-16 md:-right-4 text-white/70 hover:text-white transition-colors p-2"
            >
              <FiX size={32} />
            </button>

            {/* FULL CERTIFICATE IMAGE */}

            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />

            {/* CERTIFICATE TITLE */}

            <div className="mt-6 text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                {selectedCert.title}
              </h3>

              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
9;
