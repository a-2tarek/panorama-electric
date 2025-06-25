import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center' }}>
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}
        >
          شركة بانوراما الكتريك للصناعات الهندسية
        </motion.h1>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            الدقة والثقة والابتكار في صناعة محول التيار
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="btn btn-primary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              احصل على عرض سعر مجاني
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              منتجاتنا
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToServices}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
        <span>مرر للأسفل للاستكشاف</span>
      </motion.div>
    </section>
  );
};

export default Hero; 