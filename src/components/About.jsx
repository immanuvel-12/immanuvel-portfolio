import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profileImg from "../assets/immanuvel-profile.png";
import cvPdf from "../assets/imman-resume.pdf";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            {/* Soft glowing background blob */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0 transform -translate-y-4 scale-90"></div>

            <div className="relative z-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl max-w-sm w-full mx-auto transform transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img
                  src={profileImg}
                  alt="Immanuvel s"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl z-20 hidden md:block"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -top-6 -left-2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full opacity-60 z-20 hidden md:block"
            ></motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-4 text-white">
              Building with Purpose
            </h3>
            <p className="text-textSecondary text-lg mb-6 leading-relaxed">
              I am an aspiring MERN Stack Developer passionate about building
              modern, responsive, and user-friendly web applications. I enjoy
              transforming ideas into practical digital solutions using modern
              web technologies.
            </p>
            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              My approach combines problem-solving, clean code, and continuous
              learning to develop efficient applications that deliver meaningful
              user experiences.
            </p>

            <div className="flex space-x-4">
              <a
                href={cvPdf}
                download="imman-resume.pdf"
                target="_blank"
                className="px-6 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium transition-colors"
              >
                Download Resume
              </a>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="px-6 py-3 rounded-lg glass hover:bg-white/10 border border-white/10 text-white font-medium transition-colors cursor-pointer"
              >
                Explore My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
