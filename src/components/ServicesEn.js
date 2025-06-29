import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Services.css';

const ServicesEn = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'Current Transformer',
      nameEn: 'Current Transformer',
      description: 'High-precision current measurement for industrial and commercial applications. Provides accurate electrical current measurements with equipment protection.',
      descriptionEn: 'High-precision current measurement for industrial and commercial applications. Provides accurate electrical current measurements with equipment protection.',
      image: '/catalog/ct-cover.png',
      catalogLink: 'https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/Efmzr03OustEp2AfyMXlsyEBmkjpedAedKFGsoZnIo_Prg?e=3bGzul'
    },
    {
      id: 2,
      name: 'Touch Switch',
      nameEn: 'Touch Switch',
      description: 'Smart touch switch for modern, easy and elegant lighting control. Provides smooth and sophisticated control experience with elegant design.',
      descriptionEn: 'Smart touch switch for modern, easy and elegant lighting control. Provides smooth and sophisticated control experience with elegant design.',
      image: '/touch-swich/WhatsApp Image 2025-06-29 at 4.14.46 PM.jpeg',
      catalogLink: 'https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/EaR9xsuMLdNBt6bGmvNjCaQBCjLs-SEpoxUEVcdnx1NrBA?e=W4ojcF'
    },
    {
      id: 3,
      name: 'Photocell',
      nameEn: 'Photocell',
      description: 'Photocell for automatic lighting control and energy saving. Works based on ambient light levels for optimal operation.',
      descriptionEn: 'Photocell for automatic lighting control and energy saving. Works based on ambient light levels for optimal operation.',
      image: '/photocell/WhatsApp Image 2025-06-29 at 4.08.51 PM.jpeg',
      catalogLink: 'https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/Eb9YjRr_oDxAlFzxgJJ91aEB3HwciBAH4JebaeMfufSJ1w?e=HhkBSG'
    },
    {
      id: 4,
      name: 'Load Center',
      nameEn: 'Load Center',
      description: 'High-quality electrical distribution panels for safety and power distribution control. Designed to provide effective protection and monitoring of electrical systems.',
      descriptionEn: 'High-quality electrical distribution panels for safety and power distribution control. Designed to provide effective protection and monitoring of electrical systems.',
      image: '/slider/WhatsApp Image 2025-06-29 at 2.46.32 PM.jpeg',
      catalogLink: 'https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/EWHEYZLs9EpHij3UUgWBodcBKuHzwIKWTM9AkNjJEdA9ig?e=myJcqO'
    }
  ];

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToProduct = (index) => {
    setCurrentProduct(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProduct();
    }
    if (isRightSwipe) {
      prevProduct();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="products-slider-container">
          <h2 className="products-title">Products</h2>
          
          <div className="products-slider">
            <div 
              className="owl-carousel owl-theme"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProduct}
                      className="owl-item active"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="product-item">
                        <div className="product-image">
                          <img 
                            src={products[currentProduct].image} 
                            alt={products[currentProduct].name}
                            onError={(e) => {
                              e.target.src = '/catalog/ct-cover.png';
                            }}
                          />
                        </div>
                        <div className="product-content ltr">
                          <h3 className="product-name">{products[currentProduct].nameEn}</h3>
                          <p className="product-description">{products[currentProduct].description}</p>
                          <a 
                            href={products[currentProduct].catalogLink} 
                            className="btn btn-primary catalog-btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            View Catalog
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="owl-nav">
                <button 
                  type="button" 
                  role="presentation" 
                  className="owl-prev"
                  onClick={prevProduct}
                >
                  <FaChevronLeft />
                </button>
                <button 
                  type="button" 
                  role="presentation" 
                  className="owl-next"
                  onClick={nextProduct}
                >
                  <FaChevronRight />
                </button>
              </div>
              
              <div className="owl-dots">
                {products.map((_, index) => (
                  <button 
                    key={index}
                    role="button" 
                    className={`owl-dot ${index === currentProduct ? 'active' : ''}`}
                    onClick={() => goToProduct(index)}
                  >
                    <span></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesEn; 