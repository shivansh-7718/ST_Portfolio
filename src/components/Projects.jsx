import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, TestTube2, Mic, CalendarCheck, FileCode2 } from 'lucide-react';
import './Projects.css';
import pathologyLabImg from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';

export default function Projects() {
  const projects = [
    {
      title: 'Pathology Lab Management System',
      description: 'A Pathology Lab Management System streamlines laboratory operations by automating patient data management, test result tracking, and billing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'HTML5', 'CSS3'],
      image: pathologyLabImg,
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      link: 'https://github.com/shivansh-7718/lab-management'
    },
    {
      title: 'Lumis',
      description: 'Lumis is an AI-powered voice journaling app that analyzes emotions from spoken reflections, visualizing mood trends and generating shareable emotion cards for self-reflection.',
      technologies: ['React', 'Firebase', 'Groq AI', 'Web Speech API'],
      image: project2Img,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      link: 'https://lumis-ai-journal.vercel.app/'
    },
    {
      title: 'Cricket turf Booking website',
      description: 'Developed a full-stack cricket turf booking platform enabling slot availability tracking, secure bookings, online payments, and automated receipt generation with a responsive user-friendly interface.',
      technologies: ['React.js', 'MongoDB', 'Razorpay', 'JWT Auth'],
      image: project3Img,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
      link: 'https://cricket-turf-booking.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing software engineering projects, tech skills, achievements, and professional contact information.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      icon: <FileCode2 size={32} />,
      gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="project-card glass-card"
          >
            {/* Visual Header Grid */}
            <div className="project-banner" style={{ background: proj.image ? 'none' : proj.gradient }}>
              <div className="banner-glow-overlay"></div>
              {proj.image ? (
                <img src={proj.image} alt={proj.title} className="project-banner-img" />
              ) : (
                <div className="project-icon-wrapper">
                  {proj.icon}
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="project-info">
              <div className="project-title-row">
                <h3>{proj.title}</h3>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Visit project">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="project-desc">{proj.description}</p>
              
              {/* Technology Tags */}
              <div className="project-tags">
                {proj.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
