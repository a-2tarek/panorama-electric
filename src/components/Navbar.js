import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'المنتجات' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
        >
          <img src="/logo.png" alt="Panorama Electric Logo" />
          <span>Panorama Electric</span>
        </motion.div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.li 
              key={item.id} 
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${item.id}`} 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 