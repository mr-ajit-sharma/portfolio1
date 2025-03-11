import React from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? " dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className='pt-16'>

        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer />
      </main>
    </div>
  )
}

export default App