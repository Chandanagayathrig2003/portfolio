import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "Persist Ventures",
      period: "2023 - Present",
      description: "Leading technology strategy and innovation across 30+ subsidiary companies. Driving digital transformation and technological advancement."
    },
    {
      title: "Technology Lead",
      company: "Previous Company",
      period: "2021 - 2023",
      description: "Led development teams and implemented cutting-edge solutions for enterprise clients."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>
          
          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 pr-8 pl-8">
                  <div className="bg-black p-6 rounded-lg shadow-xl transform transition-all hover:scale-105">
                    <div className="flex items-center mb-4">
                      <Building2 className="text-blue-500 w-6 h-6 mr-2" />
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <div className="flex items-center text-blue-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;