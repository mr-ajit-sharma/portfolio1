import { motion } from "framer-motion";
import profile from '../../src/assets/profile.jpeg';

const Hero = ({ darkMode }) => {
    return (
      <section className={`p-8 text-center flex flex-col items-center transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        <motion.img 
          src={profile}
          alt="Ajit Sharma"
          className={`w-40 h-40 rounded-full border-4 border-primary shadow-lg ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
  
        <motion.h2
          className="text-4xl font-bold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Ajit Sharma 🚀
        </motion.h2>
  
        <p className="mt-2 text-lg">
          Full Stack Developer | MERN | Flask | AWS | AI Enthusiast
        </p>
      </section>
    );
  };
  
export default Hero;
