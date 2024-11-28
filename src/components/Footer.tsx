import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top wave decoration */}
      <div className="w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-16 rotate-180"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-black"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#ventures" className="hover:text-blue-400 transition-colors">Ventures</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:contact@bhavyabansal.com" className="hover:text-blue-400 transition-colors">
                  contact@bhavyabansal.com
                </a>
              </li>
              <li>
                <p>Persist Ventures</p>
                <p>India</p>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/bhavya-bansal98" 
                 className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/bhavyabansal" 
                 className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:contact@bhavyabansal.com" 
                 className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="flex items-center justify-center text-sm">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Bhavya Bansal © {currentYear}
          </p>
          <p className="text-sm mt-2 text-gray-500">
            CTO at Persist Ventures
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;