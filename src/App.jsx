import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { initData } from './dataManager';

function App() {
  useEffect(() => {
    // Initialize mock data in local storage
    initData();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      
    </div>
  );
}

export default App;
