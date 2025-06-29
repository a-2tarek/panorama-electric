import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const switchLanguage = () => {
    if (location.pathname.startsWith('/en')) {
      // Switch to Arabic
      let arabicPath = '/';
      if (location.pathname !== '/en') {
        arabicPath = location.pathname.replace('/en', '');
      }
      navigate(arabicPath);
    } else {
      // Switch to English
      let englishPath = '/en';
      if (location.pathname !== '/') {
        englishPath = `/en${location.pathname}`;
      }
      navigate(englishPath);
    }
  };

  const getCurrentLanguage = () => {
    return location.pathname.startsWith('/en') ? 'العربية' : 'English';
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        {/* Language Switcher */}
        <motion.button
          className="header-language-switcher"
          onClick={switchLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGlobe />
          <span>{getCurrentLanguage()}</span>
        </motion.button>

        <motion.div 
          className="header-logo"
          onClick={() => navigate(location.pathname.startsWith('/en') ? '/en' : '/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/logo.png" alt="Panorama Electric Logo" />
          <div className="header-text">
            <h1>Panorama Electric</h1>
            <p>for Engineering Industries</p>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 