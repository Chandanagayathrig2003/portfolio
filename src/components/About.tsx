import React from 'react';
import { Briefcase, Users, Lightbulb, Trophy, Code, Target, Rocket, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Companies', value: '30+' },
    { label: 'Years Experience', value: '8+' },
    { label: 'Team Members', value: '100+' },
    { label: 'Projects', value: '50+' }
  ];

  const skills = [
    { name: 'Technology Leadership', icon: Code },
    { name: 'Strategic Planning', icon: Target },
    { name: 'Innovation Management', icon: Rocket },
    { name: 'Global Operations', icon: Globe }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
          About Me
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></div>
        </h2>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              As the CTO of Persist Ventures, I spearhead technological innovation and digital transformation across our diverse portfolio of 30+ subsidiary companies. My role combines strategic leadership with hands-on technical expertise to drive business growth and innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a passion for emerging technologies and a proven track record in scaling businesses, I focus on creating sustainable technological solutions that drive real business value. My approach combines cutting-edge technology with practical business applications.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center bg-gray-900 px-4 py-2 rounded-full">
                  <skill.icon className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800">
              <Briefcase className="text-blue-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Leadership</h3>
              <p className="text-gray-400">Guiding teams towards technological excellence</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800">
              <Users className="text-blue-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Team Building</h3>
              <p className="text-gray-400">Fostering collaborative tech environments</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800">
              <Lightbulb className="text-blue-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">Driving technological advancement</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800">
              <Trophy className="text-blue-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Achievement</h3>
              <p className="text-gray-400">Delivering exceptional results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;