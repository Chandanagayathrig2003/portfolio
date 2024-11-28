import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Ventures from './components/Ventures';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <CursorEffect />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Ventures />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;