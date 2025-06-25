import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="loading-content"
        >
          <div className="loading-logo">
            <i className="fas fa-bolt"></i>
            <span>Panorama Electric</span>
          </div>
          <div className="loading-spinner"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App; 