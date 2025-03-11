import { motion } from "framer-motion";

const About = ({ darkMode }) => {
    return (
      <section className={`p-8 text-center transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className={`font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>Ajit Sharma</span>, a  
          <span className={`font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}> Full-Stack Developer </span>  
          with expertise in <span className="font-semibold">MERN, Flask, PostgreSQL, and AWS</span>.
        </motion.p>

        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          I'm currently learning <span className={`font-semibold ${darkMode ? "text-green-400" : "text-green-600"}`}>Agentic AI </span>  
          and improving my problem-solving skills.
        </motion.p>

      </section>
    );
};

export default About;