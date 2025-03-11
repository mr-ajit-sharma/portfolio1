import { motion } from "framer-motion";
import React from "react";

const Experience = ({ darkMode }) => {
    const experiences = [
        {
          company: "Bharat Telepharma",
          role: "Full-Stack Developer",
          duration: "2024 - Present",
          description: "Handling backend development and DevOps, working with PostgreSQL, Flask, and AWS infrastructure.",
          tech: "Flask, PostgreSQL, AWS",
        },
        {
          company: "Coding Ninjas",
          role: "Teaching Assistant (ReactJS)",
          duration: "2023",
          description: "Assisted students in debugging ReactJS projects and clarifying core frontend concepts.",
          tech: "ReactJS",
        },
        {
          company: "Self-Employed",
          role: "Teaching & Mentoring",
          duration: "2020 - 2023",
          description: "Conducted online/offline coding classes, mentoring students in ReactJS, JavaScript, and DSA.",
          tech: "ReactJS, JavaScript, DSA",
        },
        {
          company: "Freelancing",
          role: "Full-Stack Developer",
          duration: "2020 - 2023",
          description: "Developed full-stack web applications for global clients, handling frontend, backend, and deployment.",
          tech: "HTML,CSS AND JS",
        },
    ];

  return (
    <section className={`p-8 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={`p-6 rounded-xl shadow-lg transition-all 
            ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">{exp.duration}</p>
            <p className="mt-2">{exp.description}</p>
            <p className="mt-2"><span className="font-semibold">Tech Used:</span> {exp.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
