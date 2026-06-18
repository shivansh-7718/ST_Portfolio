import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Users, Trophy } from 'lucide-react';
import './About.css';

export default function About() {
  const pillars = [
    {
      icon: <Code className="pillar-icon" />,
      title: 'Frontend Engineering',
      desc: 'Expertise in building scalable React.js and modern JavaScript architectures.'
    },
    {
      icon: <Smartphone className="pillar-icon" />,
      title: 'Responsive Design',
      desc: 'Crafting visually stunning layouts that look beautiful on any device size.'
    },
    {
      icon: <Users className="pillar-icon" />,
      title: 'Media Strategy',
      desc: 'Managing brands and media analytics to maximize viewer engagement.'
    },
    {
      icon: <Trophy className="pillar-icon" />,
      title: 'Impact Projects',
      desc: 'Building technology solutions for fraud detection and user validation.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-grid">
        {/* Left Side: Story */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about-story"
        >
          <h3 className="story-heading">Redefining web interfaces with passion & code</h3>
          <p className="story-paragraph">
            I am <strong>Shivansh</strong>, a Software Developer who focuses on creating polished web applications. I specialize in the React ecosystem, creating user-friendly interfaces that are functional, accessible, and responsive.
          </p>
          <p className="story-paragraph">
            Beyond coding, I bring a unique perspective through my experience in **social media management**. I analyze user behavior and engagement patterns, which directly influences how I design user interfaces to capture and hold user attention.
          </p>
          <p className="story-paragraph">
            I enjoy building software that solves concrete problems, whether it's optimizing data-driven workflows, developing fraud-detection interfaces, or creating personal utilities like text editors. Let's collaborate to build something outstanding!
          </p>
        </motion.div>

        {/* Right Side: Pillars Grid */}
        <div className="about-pillars">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pillar-card glass-card"
            >
              <div className="pillar-icon-wrapper">
                {pillar.icon}
              </div>
              <div className="pillar-info">
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
