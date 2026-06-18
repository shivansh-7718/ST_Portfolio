import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Compass, Coffee, Leaf, Brain, ShieldCheck, Database, GitBranch, Cpu, Terminal } from 'lucide-react';
import './Technologies.css';

export default function Technologies() {
  const skills = [
    { name: 'React.js', icon: <Code2 />, color: '#22d3ee', delay: 0 },
    { name: 'Java', icon: <Coffee />, color: '#f97316', delay: 0.1 },
    { name: 'SpringBoot', icon: <Leaf />, color: '#6db33f', delay: 0.2 },
    { name: 'AI & ML', icon: <Brain />, color: '#a855f7', delay: 0.3 },
    { name: 'Node.js', icon: <Cpu />, color: '#22c55e', delay: 0.4 },
    { name: 'MongoDB', icon: <Database />, color: '#10b981', delay: 0.5 },
    { name: 'JavaScript', icon: <Terminal />, color: '#f59e0b', delay: 0.6 },
    { name: 'Tailwind CSS', icon: <Compass />, color: '#38bdf8', delay: 0.7 },
    { name: 'GitHub', icon: <GitBranch />, color: '#ec4899', delay: 0.8 },
    { name: 'Bootstrap', icon: <ShieldCheck />, color: '#7c3aed', delay: 0.9 }
  ];

  const floatAnimation = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  });

  return (
    <section id="skills" className="tech-section">
      <h2 className="section-title">
        Core <span>Skills</span>
      </h2>

      <div className="tech-container">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            variants={floatAnimation(3 + (idx % 3))}
            initial="initial"
            animate="animate"
            className="tech-card glass-card"
            style={{ '--hover-glow': skill.color }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="tech-icon-box" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="tech-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
