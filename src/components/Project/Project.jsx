import React from 'react';

const TechTag = ({ name, variant = 'filled' }) => {
  // Styles now include hover states that switch between filled and outline
  const styles = {
    filled: "bg-[#2d5857] text-white hover:bg-transparent hover:text-[#2d5857] border-2 border-[#2d5857]",
    outline: "bg-transparent text-[#2d5857] border-2 border-[#2d5857] hover:bg-[#2d5857] hover:text-white"
  };

  return (
    <span
      className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 cursor-default ${styles[variant]}`}
    >
      {name}
    </span>
  );
};
const ProjectCard = ({ title, description, technologies, image, githubUrl, keyFeatures }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
    <div className="flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-2/5 relative overflow-hidden h-[300px] md:h-auto">
        <div className="relative h-full">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center transition-all duration-500 group-hover:rotate-2 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#2d5857] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            >
              {/* <button className="px-6 py-2 bg-white text-[#2d5857] rounded-full font-medium hover:bg-[#2d5857] hover:text-white transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Project
              </button> */}
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="md:w-3/5 p-6">
        <h3 className="text-2xl font-semibold text-[#2d5857] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

        {/* Key Features Section */}
        {keyFeatures && keyFeatures.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#2d5857] mb-3">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-3 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg">{feature.icon}</span>
                    <div>
                      <h5 className="font-medium text-[#2d5857] mb-1 text-sm">
                        {feature.title}
                      </h5>
                      <p className="text-xs text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechTag 
              key={index} 
              name={tech} 
              variant={index % 2 === 0 ? 'filled' : 'outline'}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
const Projects = () => {
  const projects = [
    {
      title: "BidWise",
      description: "An innovative online and real-time auction platform that redefines the auction experience by prioritizing user control. BidWise provides a seamless and enjoyable bidding experience with real-time insights, analytics, and adaptive scaling.",
      technologies: ["ANGULAR", "SPRINGBOOT", "MYSQL", "DOCKER", "TYPESCRIPT", "JAVA", "CHART.JS", "BOOTSTRAP"],
      image: "src/assets/Bidwise3.png",
      githubUrl: "https://github.com/shreymonka/bidwise",
      keyFeatures: [
        {
          icon: "🚀",
          title: "Real-time Bidding",
          description: "Live auction updates with WebSocket integration"
        },
        {
          icon: "📊",
          title: "Analytics Dashboard",
          description: "Comprehensive insights and bidding statistics"
        },
        {
          icon: "⚡",
          title: "Adaptive Scaling",
          description: "Handles multiple concurrent auctions efficiently"
        },
        {
          icon: "🔐",
          title: "Secure Authentication",
          description: "Role-based access control system"
        }
      ]
    },
    {
      title: "TravelBuddy",
      description: "The application provides a platform where users can create detailed travel plans, including flights, accommodations, activities, and transportation. The users can share their stories via a mini tweet like posts on the web application.",
      technologies: ["AWS", "EC2", "CloudFormation", "IaaS", "ANGULAR", "SPRINGBOOT", "MYSQL", "DOCKER", "BOOTSTRAP"],
      image: "src/assets/TravelBuddy.png",
      githubUrl: "https://github.com/shreymonka/TravelBuddy",
      keyFeatures: [
        {
          icon: "🔐",
          title: "Secure Authentication",
          description: "Advanced user authentication with encrypted passwords and authorized access control"
        },
        {
          icon: "✈️",
          title: "Smart Itinerary Planning",
          description: "Dynamic travel planning with category-specific inputs for flights, accommodations, and activities"
        },
        {
          icon: "📝",
          title: "Interactive Travel Journal",
          description: "Social platform for sharing travel experiences with ratings and community engagement"
        },
        {
          icon: "📧",
          title: "Email Notifications",
          description: "AWS SNS integration for automated email updates and user engagement"
        }
      ]
    },
    {
      title: "Cryppy : CryptoTracker",
      description: "A dynamic cryptocurrency tracking platform that delivers real-time market insights, personalized watchlists, and curated news updates. Built with React, this application empowers users to make informed decisions in the crypto market through intuitive analytics and live price monitoring.",
      technologies: ["REACT", "REDUX", "BOOTSTRAP", "CHARTJS", "ANT DESIGN", "BING NEWS API", "COIN RANKING API"],
      image: "src/assets/Cryppy.png",
      githubUrl: "https://github.com/shreymonka/Cryppy",
      keyFeatures: [
        {
          icon: "📊",
          title: "Real-time Tracking",
          description: "Live cryptocurrency price updates and market statistics with WebSocket integration"
        },
        {
          icon: "📰",
          title: "News Integration",
          description: "Curated news feed from multiple reliable crypto news sources via API integration"
        },
        {
          icon: "⭐",
          title: "Watchlist Management",
          description: "Personalized watchlists for tracking favorite cryptocurrencies with custom alerts"
        },
        {
          icon: "📈",
          title: "Market Analytics",
          description: "Interactive charts and detailed market analysis tools for informed decision-making"
        }
      ]
    },
    {
      title: "Drowsiness Detection System",
      description: "An advanced computer vision-based system that monitors driver alertness in real-time using facial landmark detection and Eye Aspect Ratio (EAR) analysis. This safety-critical application helps prevent accidents caused by driver fatigue by providing timely alerts, addressing a significant cause of road accidents in India.",
      technologies: [ "PYTHON",
      "OPENCV",
      "DLIB",
      "NUMPY",
      "IMUTILS",
      "HAAR-CASCADE",
      "IMAGE-PROCESSING"],
      image: "src/assets/ddp2.png",
      githubUrl: "https://github.com/shreymonka/DrowsinessDetectionSystem",
      keyFeatures: [
        {
          icon: "👁️",
          title: "Real-time Eye Tracking",
          description: "Continuous monitoring of eye movements using Eye Aspect Ratio (EAR) analysis for precise drowsiness detection"
        },
        {
          icon: "🔍",
          title: "Facial Landmark Detection",
          description: "Advanced facial feature tracking using DLIB and Haar cascade classifiers for accurate face and eye detection"
        },
        {
          icon: "⚡",
          title: "Instant Alert System",
          description: "Real-time alert when signs of drowsiness are detected, ensuring immediate driver awareness"
        },
        {
          icon: "📊",
          title: "Computer Vision Processing",
          description: "Sophisticated image processing using OpenCV and NumPy for reliable drowsiness detection in various conditions"
        }
      ]
    },
    {
      title: "Sign Language Detection System",
      description: "An innovative machine learning-based system that bridges the communication gap between speech-impaired and hearing individuals by detecting and interpreting sign language in real-time. Using transfer learning and advanced computer vision techniques, the system converts hand gestures into text, making communication more accessible and efficient.",
      technologies: [
        "TENSORFLOW",
        "OPENCV",
        "NUMPY",
        "PYTHON",
        "TENSORFLOW-API",
        "SSD-MOBILENET",
        "TRANSFER-LEARNING",
        "COMPUTER-VISION"
      ],
      image: "src/assets/slds.png",
      githubUrl: "https://github.com/shreymonka/SignLanguageDetectionSystem",
      keyFeatures: [
        {
          icon: "🤲",
          title: "Real-time Detection",
          description: "Instant recognition and interpretation of sign language gestures using advanced object detection"
        },
        {
          icon: "🔄",
          title: "Transfer Learning",
          description: "Utilizes pre-trained models from TensorFlow Zoo for efficient and accurate gesture recognition"
        },
        {
          icon: "📝",
          title: "Text Conversion",
          description: "Seamless conversion of detected hand gestures into readable text for immediate understanding"
        },
        {
          icon: "🎯",
          title: "Custom Model Training",
          description: "Specialized training using LabelImg for precise hand gesture recognition and classification"
        }
      ]
    },
  ];

  return (
    <section id="projects" className="pb-5">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2d5857]">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;