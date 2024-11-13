import React from 'react';
const hoverStyles = {
  // Combined effects
  fancy: "hover:shadow-lg hover:-translate-y-1 hover:rotate-3 hover:bg-[#2d5857] hover:text-white"
};

const SkillPill = ({ name, hoverEffect = 'fancy' }) => (
  <div 
    className={`
      px-6 py-2 
      rounded-full 
      bg-white 
      shadow-sm 
      transition-all 
      duration-300 
      cursor-default
      ${hoverStyles[hoverEffect]}
    `}
  >
    <span className="transition-colors duration-300">{name}</span>
  </div>
);

const Skills = () => {
    const skills = [
        "AWS", "Azure", "GCP", "Terraform", "CI/CD", "React", "Angular", "HTML", "CSS", "Bootstrap", 
        "Tailwind", "JQuery",  "Node.js", "EJS", "Django", "Flask", "SpringBoot", "OpenCV", 
        "Junit5", "JIRA", "Postman", "Java", "Python", "C++", "C", "Perl", "TypeScript", 
        "JavaScript", "Kotlin", "PostgreSQL", "MongoDB", "Amazon Aurora", "Amazon S3",
        "Azure Blob", "DynamoDB"
      ];

  // Add these keyframes to your CSS file or Tailwind config
  const styles = `
    @keyframes glow {
      0% {
        box-shadow: 0 0 5px rgba(45,88,87,0.2);
      }
      100% {
        box-shadow: 0 0 20px rgba(45,88,87,0.4);
      }
    }
  `;

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="animate-fadeIn"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <SkillPill 
                name={skill} 
                // Try different effects from hoverStyles:
                // 'default',
                // 'rotate', 'pulse', 'bounce', or 'fancy'
                hoverEffect="fancy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;