import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    
    {
      title: 'روابط سريعة',
      links: [
        { label: 'الرئيسية', action: () => scrollToSection('home') },
        { label: 'من نحن', action: () => scrollToSection('about') },
        { label: 'تواصل معنا', action: () => scrollToSection('contact') }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaInstagram, href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="footer-section"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="footer-logo"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/logo.png" alt="Panorama Electric Logo"/>
              <span>Panorama Electric</span>
            </motion.div>
            <p>
              خبراء في تصميم وتصنيع محولات التيار 
            </p>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div 
              key={index} 
              className="footer-section"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.button
                      onClick={link.action}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div 
            className="footer-section"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Contact Info</h3>
            <p><FaPhone /> (+20)1223196030</p>
            <p><FaEnvelope /> info@panoramaelectric.com</p>
            <p><FaMapMarkerAlt /> المنطقة الصناعية، قطعة 102، مدينة السادس من أكتوبر، الجيزة، مصر</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
 