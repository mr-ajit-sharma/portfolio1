import { FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Contact = ({ darkMode }) => {
    return (
      <section className={`p-8 text-center transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2">Feel free to connect with me on my social media platforms.</p>
  
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {/* <a href="mailto:sharmaajit80437@gmail.com" className={`${darkMode ? "text-blue-400" : "text-blue-500"} flex items-center gap-2 hover:underline`}>
            <FaEnvelope size={20} /> sharmaajit80437@gmail.com
          </a> */}
          <a href="https://www.linkedin.com/in/ajitsharma1999" target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-blue-500" : "text-blue-700"} flex items-center gap-2 hover:underline`}>
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-blue-400" : "text-blue-600"} flex items-center gap-2 hover:underline`}>
            <FaFacebook size={20} /> Facebook
          </a>
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-pink-400" : "text-pink-500"} flex items-center gap-2 hover:underline`}>
            <FaInstagram size={20} /> Instagram
          </a>
          <a href="https://www.youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer" className={`${darkMode ? "text-red-400" : "text-red-500"} flex items-center gap-2 hover:underline`}>
            <FaYoutube size={20} /> YouTube
          </a>
        </div>
      </section>
    );
  };
  export default Contact;
  