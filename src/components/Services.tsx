import React from 'react';
import { Target, Zap, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target size={32} />,
      title: 'Meta Ads That Perform',
      description: 'Audience-first campaigns that drive revenue — not just traffic.',
    },
    {
      icon: <Zap size={32} />,
      title: 'AI Automation',
      description: 'Ditch the busywork. Smart workflows to run your business on autopilot.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Websites That Convert',
      description: 'Designed for clarity. Built for clicks. Optimized for conversion.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#f8f7f2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          What We Do Best
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-gray-900 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button className="inline-flex items-center gap-2 bg-[#d3fba3] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#c8f298] transition-all duration-300 group">
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;