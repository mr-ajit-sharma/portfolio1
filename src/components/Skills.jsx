import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaTerminal, FaWindows } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiFlask, SiJavascript, SiTailwindcss, SiNginx, SiHtml5, SiCss3, SiPycharm, SiVim, SiDbeaver, SiBootstrap } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ darkMode }) => {
    const skills = [
        { name: "React", icon: <FaReact className={`text-4xl ${darkMode ? "text-blue-300" : "text-blue-500"}`} /> },
        { name: "Node.js", icon: <FaNodeJs className={`text-4xl ${darkMode ? "text-green-300" : "text-green-500"}`} /> },
        { name: "Python", icon: <FaPython className={`text-4xl ${darkMode ? "text-yellow-300" : "text-yellow-500"}`} /> },
        { name: "AWS", icon: <FaAws className={`text-4xl ${darkMode ? "text-orange-300" : "text-orange-500"}`} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className={`text-4xl ${darkMode ? "text-blue-300" : "text-blue-600"}`} /> },
        { name: "MongoDB", icon: <SiMongodb className={`text-4xl ${darkMode ? "text-green-300" : "text-green-600"}`} /> },
        { name: "Flask", icon: <SiFlask className={`text-4xl ${darkMode ? "text-gray-300" : "text-gray-700"}`} /> },
        { name: "JavaScript", icon: <SiJavascript className={`text-4xl ${darkMode ? "text-yellow-300" : "text-yellow-400"}`} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className={`text-4xl ${darkMode ? "text-blue-300" : "text-blue-400"}`} /> },
        { name: "Bootstrap", icon: <SiBootstrap className={`text-4xl ${darkMode ? "text-purple-300" : "text-purple-600"}`} /> },
        { name: "HTML5", icon: <SiHtml5 className={`text-4xl ${darkMode ? "text-orange-300" : "text-orange-600"}`} /> },
        { name: "CSS3", icon: <SiCss3 className={`text-4xl ${darkMode ? "text-blue-300" : "text-blue-500"}`} /> },
        { name: "Nginx", icon: <SiNginx className={`text-4xl ${darkMode ? "text-green-300" : "text-green-500"}`} /> },
        { name: "GitHub", icon: <FaGithub className={`text-4xl ${darkMode ? "text-gray-300" : "text-gray-700"}`} /> },
        { name: "VS Code", icon: <VscVscode className={`text-4xl ${darkMode ? "text-blue-300" : "text-blue-500"}`} /> },
        { name: "DBeaver", icon: <SiDbeaver className={`text-4xl ${darkMode ? "text-gray-300" : "text-black"}`} /> },
        { name: "PyCharm", icon: <SiPycharm className={`text-4xl ${darkMode ? "text-green-300" : "text-green-500"}`} /> },
        { name: "Vim Editor", icon: <SiVim className={`text-4xl ${darkMode ? "text-green-300" : "text-green-600"}`} /> },
        { name: "Nano Editor", icon: <FaTerminal className={`text-4xl ${darkMode ? "text-gray-300" : "text-gray-700"}`} /> },
        { name: "Command Prompt", icon: <FaWindows className={`text-4xl ${darkMode ? "text-gray-300" : "text-gray-700"}`} /> }
    ];

    return (
        <section className={`py-10 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold">My Skills</h2>
                <p className="mt-2 text-lg">Here are some technologies I work with:</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center shadow-lg p-4 rounded-xl transition-all transform hover:scale-105
                            ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
                        >
                            {skill.icon}
                            <p className="mt-2 font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
