import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0, rotate: -3 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-grid"
      >
        {/* Left Side: Content */}
        <div className="hero-content">
          <motion.div variants={itemVariants} className="hero-badge">
            Available for Freelance & Full-time
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I am <span className="highlight-text">Shivansh</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Software Developer
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-description">
            I am a passionate software developer specializing in building highly interactive, responsive, and performance-optimized web applications. I love turning complex designs into beautiful, clean code.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
              <Mail size={18} className="btn-icon" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Picture Container */}
        <motion.div 
          variants={imageVariants} 
          className="hero-image-wrapper"
        >
          <div className="image-outer-ring">
            <div className="image-inner-ring">
              <img 
                src={profileImg} 
                alt="Shivansh Profile" 
                className="hero-img" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://st-portfolio-fr12yzcw3-shivansh-s-projects-9eb0fac7.vercel.app/assets/stprofilepic-CY2K32FW.png";
                }}
              />
            </div>
          </div>
          {/* Subtle floating glow cards */}
          <motion.div 
            className="floating-badge badge-top-right glass-card"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            💻 React Specialist
          </motion.div>
          <motion.div 
            className="floating-badge badge-bottom-left glass-card"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            🚀 Clean Code
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
