import React, { useState, useEffect } from 'react';
import { Download, Send, Github, Linkedin } from 'lucide-react'; 
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="flex flex-col items-center pt-32 pb-16 w-full max-w-7xl mx-auto px-4">
      <div 
        className={`text-[#2d5857] mt-20 transition-all duration-1000 ease-out text-center w-full ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-7xl font-medium mb-4 hero-text animate-fadeIn"> 
          Hi,
        </h1>
        <h2 className="text-4xl md:text-7xl font-medium hero-text animate-slideUp"> 
          I am Shrey Monka
        </h2>
        <h3 className="text-2xl md:text-2xl text-[#2d5857] mt-4 animate-slideUp opacity-80"> 
          Cloud Architect & Full Stack Developer
        </h3>

        <p className="mt-6 text-lg md:text-xl text-[#2d5857] max-w-3xl mx-auto opacity-75"> 
          Transforming ideas into scalable solutions with modern technologies
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-8">
  <a 
    href="your_cv.pdf" 
    download
    className="px-8 py-3 rounded-full bg-[#2d5857] text-white hover:bg-opacity-90 transition-all duration-300 text-lg flex items-center gap-2"
  >
    Download CV
    <Download size={20} />
  </a>
  <a 
    href="#contact" 
    className="px-8 py-3 rounded-full border-2 border-[#2d5857] text-[#2d5857] hover:bg-[#2d5857] hover:text-white transition-all duration-300 text-lg flex items-center gap-2"
  >
    Let's Connect
    <Send size={20} />
  </a>
</div>


<div className="flex justify-center gap-6 mt-6">
  <a 
    href="https://www.linkedin.com/in/shreymonka/" 
    target="_blank" 
    className="group flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#2d5857] text-[#2d5857] hover:bg-[#2d5857] hover:text-white transition-all duration-300"
  >
    <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
    <span>LinkedIn</span>
  </a>
  <a 
    href="https://github.com/shreymonka?tab=repositories" 
    target="_blank" 
    className="group flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#2d5857] text-[#2d5857] hover:bg-[#2d5857] hover:text-white transition-all duration-300"
  >
    <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
    <span>GitHub</span>
  </a>
</div>
      </div>
    </section>
  );
};

export default Hero;