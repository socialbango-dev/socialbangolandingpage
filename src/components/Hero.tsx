import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#f8f7f2]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Let's Scale Your Brand —{' '}
          <span className="block text-gray-700">Smarter. Faster. Better.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Meta Ads that convert. AI automations that save time. Websites that sell.
        </p>
        
        <button className="inline-flex items-center gap-3 bg-[#d3fba3] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c8f298] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          🚀 Book Your Free Strategy Call
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;