import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/shreymonka?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#2d5857] transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreymonka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#2d5857] transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sh605539@dal.ca"
              className="text-gray-600 hover:text-[#2d5857] transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Made with ❤️ by Shrey.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;