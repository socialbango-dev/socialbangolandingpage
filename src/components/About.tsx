import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Bringing the Bango to Your Brand.
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            At Social Bango, we don't guess.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            We build systems that scale — from thumb-stopping Meta Ads to AI setups that automate your back-end, and websites that guide your audience from scroll to sale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;