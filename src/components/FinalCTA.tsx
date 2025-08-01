import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-[#f8f7f2]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Growth Starts with a Call.
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Get clarity on what's slowing your growth — and how we'll fix it.
        </p>
        
        <button className="inline-flex items-center gap-3 bg-[#d3fba3] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c8f298] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Book Your Free Strategy Call
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;