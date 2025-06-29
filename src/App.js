import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NavbarEn from './components/NavbarEn';
import Hero from './components/Hero';
import HeroEn from './components/HeroEn';
import Services from './components/Services';
import ServicesEn from './components/ServicesEn';
import About from './components/About';
import AboutEn from './components/AboutEn';
import Contact from './components/Contact';
import ContactEn from './components/ContactEn';
import Footer from './components/Footer';
import FooterEn from './components/FooterEn';
import Catalog from './components/Catalog';
import TouchSwitchCatalog from './components/TouchSwitchCatalog';
import PhotocellCatalog from './components/PhotocellCatalog';
import './App.css';

// Layout component for pages with header, navbar and footer
const Layout = ({ children, language = 'ar' }) => (
  <div className="App">
    <Header />
    {language === 'en' ? <NavbarEn /> : <Navbar />}
    {children}
    {language === 'en' ? <FooterEn /> : <Footer />}
  </div>
);

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
        {/* Arabic Routes */}
        <Route path="/" element={
          <Layout language="ar">
            <Hero />
            <Services />
            <About />
            <Contact />
          </Layout>
        } />
        <Route path="/catalog" element={
          <Layout language="ar">
            <Catalog />
          </Layout>
        } />
        <Route path="/touch-switch-catalog" element={
          <Layout language="ar">
            <TouchSwitchCatalog />
          </Layout>
        } />
        <Route path="/photocell-catalog" element={
          <Layout language="ar">
            <PhotocellCatalog />
          </Layout>
        } />
        
        {/* English Routes */}
        <Route path="/en" element={
          <Layout language="en">
            <HeroEn />
            <ServicesEn />
            <AboutEn />
            <ContactEn />
          </Layout>
        } />
        <Route path="/en/catalog" element={
          <Layout language="en">
            <Catalog />
          </Layout>
        } />
        <Route path="/en/touch-switch-catalog" element={
          <Layout language="en">
            <TouchSwitchCatalog />
          </Layout>
        } />
        <Route path="/en/photocell-catalog" element={
          <Layout language="en">
            <PhotocellCatalog />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App; 