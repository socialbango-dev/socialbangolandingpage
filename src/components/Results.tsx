import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

const Results = () => {
  const results = [
    {
      icon: <TrendingUp size={24} />,
      stat: '10x ROAS',
      description: 'for eCom client in 30 days.',
    },
    {
      icon: <Clock size={24} />,
      stat: '20+ hours/month',
      description: 'saved with smart AI systems.',
    },
    {
      icon: <Target size={24} />,
      stat: '12%+ CVR',
      description: 'launched DTC site from Day 1.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Results That Speak Louder Than Words
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d3fba3] rounded-full mb-6 text-gray-900">
                {result.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {result.stat}
              </h3>
              
              <p className="text-gray-600 text-lg">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;