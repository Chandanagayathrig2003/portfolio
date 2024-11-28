import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Ventures = () => {
  const companies = [
    {
      name: "TechVenture 1",
      description: "Innovation in AI and Machine Learning",
      category: "Technology"
    },
    {
      name: "FinTech Solution",
      description: "Revolutionary financial technology platform",
      category: "Finance"
    },
    {
      name: "HealthTech Pro",
      description: "Advanced healthcare technology solutions",
      category: "Healthcare"
    },
    {
      name: "EduTech Platform",
      description: "Next-generation learning solutions",
      category: "Education"
    }
  ];

  return (
    <section id="ventures" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Subsidiary Companies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="bg-gray-900 p-8 rounded-xl transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-blue-500 w-6 h-6" />
                </div>
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-4">
                  {company.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{company.name}</h3>
                <p className="text-gray-400">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;