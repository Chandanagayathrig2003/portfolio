import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Bhavya's technical leadership has been instrumental in our company's digital transformation journey.",
      author: "John Doe",
      position: "CEO, Tech Company"
    },
    {
      text: "Working with Bhavya has helped us implement cutting-edge solutions that transformed our business.",
      author: "Jane Smith",
      position: "Founder, StartUp"
    },
    {
      text: "His vision and technical expertise have been crucial in scaling our operations.",
      author: "Mike Johnson",
      position: "CTO, Enterprise"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 text-blue-500/20 w-8 h-8" />
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-blue-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;