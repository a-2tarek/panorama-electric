import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية', type: 'scroll' },
    { id: 'about', label: 'من نحن', type: 'scroll' },
    { id: 'services', label: 'المنتجات', type: 'scroll' },
    { id: 'contact', label: 'تواصل معنا', type: 'scroll' }
  ];

  const handleNavClick = (item) => {
    if (item.type === 'scroll') {
      scrollToSection(item.id);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Search Bar - Left side for Arabic */}
        <motion.div 
          className="nav-search"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="البحث..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FaSearch />
            </button>
          </form>
        </motion.div>

        <ul className={`nav-menu rtl ${isOpen ? 'active' : ''}`}>
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
                  handleNavClick(item);
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