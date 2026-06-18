import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: 'Email Me',
      value: 'tshivansh279@gmail.com',
      href: 'mailto:tshivansh279@gmail.com'
    },
    {
      icon: <Phone size={22} />,
      label: 'Call Me',
      value: '+91 9118 6179 11',
      href: 'tel:+919118617911'
    },
    {
      icon: <MapPin size={22} />,
      label: 'My Location',
      value: 'PSIT Kanpur, Bhauti Pratappur',
      href: 'https://maps.google.com/?q=PSIT+Kanpur'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container-centered">
        {/* Contact Info Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-info-panel-centered"
        >
          <h3>Let's build something amazing together!</h3>
          <p className="contact-subtext text-center">
            Have a project in mind or want to talk about software engineering opportunities? Feel free to reach out. I will get back to you as soon as possible!
          </p>

          <div className="info-list-centered">
            {contactInfo.map((info, idx) => (
              <a key={idx} href={info.href} target="_blank" rel="noopener noreferrer" className="info-item glass-card">
                <div className="info-icon-wrapper">
                  {info.icon}
                </div>
                <div className="info-text">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
