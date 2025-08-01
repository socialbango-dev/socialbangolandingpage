import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <About />
      <Services />
      <Results />
      <FinalCTA />
    </div>
  );
}

export default App;