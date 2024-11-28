import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Bhavya Bansal</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
            CTO at Persist Ventures
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Leading technology and innovation across 30+ subsidiary companies. 
            Transforming ideas into scalable solutions.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/bhavya-bansal98" 
               className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@bhavyabansal.com" 
               className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/bhavyabansal" 
               className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
            <img
              src="/public/images/bhavya-profile.jpg"
              alt="Bhavya Bansal"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;