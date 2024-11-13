import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Project/Project';
import Skills from './components/Skill/Skill';
import ContactSection from './components/Contact/Contact';

function App() {
  const [scrollBg, setScrollBg] = useState('rgb(240, 247, 255)'); // Initial light blue color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500; // Adjust this value to control fade speed
      
      // Calculate opacity based on scroll position
      const opacity = Math.max(0, 1 - scrollPosition / maxScroll);
      
      // Interpolate between light blue and lavender (e.g., rgb(230, 230, 250))
      const red = Math.round(240 + (230 - 240) * (1 - opacity));
      const green = Math.round(247 + (230 - 247) * (1 - opacity));
      const blue = Math.round(255 + (250 - 255) * (1 - opacity));
      
      setScrollBg(`rgb(${red}, ${green}, ${blue})`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main 
      className="min-h-screen transition-colors duration-200"
      style={{ backgroundColor: scrollBg }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactSection />
    </main>
  );
}

export default App;