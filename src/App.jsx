import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* Background Ambient Glows */}
      <div className="ambient-glow-container">
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>
        <div className="glow-blob blob-3"></div>
      </div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Structural Layout */}
      <div className="portfolio-container">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '2rem 0 3rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
          color: 'var(--color-text-muted)',
          fontSize: '0.85rem',
          marginTop: '4rem'
        }}>
          <p>© {new Date().getFullYear()} Shivansh. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
