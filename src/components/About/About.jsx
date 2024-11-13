import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const TimelineItem = ({ year, title, location, description, icon: Icon }) => (
  <div className="flex gap-8 mb-16">
    <div className="w-32 text-right">
      <span className="text-gray-600">{year}</span>
    </div>
    <div className="relative">
      <div className="absolute h-full w-0.5 bg-[#2d5857] opacity-30 left-1/2 transform -translate-x-1/2" />
      <div className="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-[#2d5857] rounded-full">
        <Icon size={16} className="text-[#2d5857]" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const About = () => {
  const timelineData = [
    {
      year: "2019-2023",
      title: "Graduated Bachelor's (CE)",
      location: "Gandhinagar, India",
      description: "Completed Computer Engineering degree with gaining knowledge in modern programming languages and software methodologies.",
      icon: GraduationCap
    },
    {
      year: "2022 - 2023",
      title: "Web Dev, Intern",
      location: "Ahmedabad, India",
      description: "Gained experience in web and software development, worked on Python-based web projects as part of an internship, using frameworks like Flask and Django to develop and deploy web applications.",
      icon: Briefcase
    },
    {
      year: "2023-Present",
      title: "Pursuing Master's (MACS)",
      location: "Halifax, Canada",
      description: "Specializing in cloud architecture, full-stack software development, and mobile solutions while pursuing Master's in Applied Computer Science at Dalhousie University.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="about" className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2d5857]">About Me</h2>
        
        {/* Personal Introduction */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            I love solving problems and designing cloud solutions. I like to transforming complex challenges into simple and representable solutions. My journey in technology is simple and I have an unwavering enthusiasm for cloud architecture and software development, where I find joy in building scalable, efficient solutions that make a real impact.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-semibold text-center mb-12 text-[#2d5857]">My Journey</h3>
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index}
              year={item.year}
              title={item.title}
              location={item.location}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;