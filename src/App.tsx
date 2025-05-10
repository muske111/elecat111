import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ColorfulBackground from './components/ColorfulBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600">
      <ColorfulBackground />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Tokenomics />
          <Community />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;