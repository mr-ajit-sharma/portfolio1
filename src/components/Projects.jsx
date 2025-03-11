import { motion } from "motion/react";
const Projects = ({ darkMode }) => {
    const projects = [
      {
        title: "🏥 Hospital Management System",
        description: "A full-stack hospital management system with patient records & admin management.",
        tech: "React, Node.js, SQL",
      },
      {
        title: "🚗 Service Provider System",
        description: "A platform like Ola/Uber for hiring service providers with real-time tracking.",
        tech: "PostgreSQL, Flask, React, AWS",
      },
      {
        title: "📱 React + Flask App",
        description: "Mobile app with video calling functionality using WebRTC.",
        tech: "React Native, Flask",
      },
    ];
  
    return (
      <section className={`p-8 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`p-4 rounded-xl shadow-lg transition-all 
              ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <p className="mt-2"><span className="font-semibold">Tech Used:</span> {project.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;