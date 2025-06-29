import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const HeroEn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: '/catalog/ct-cover.png',
      alt: 'Current Transformer',
      link: '/en/products/current-transformer'
    },
    {
      id: 2,
      image: '/photocell/photocell.jpeg',
      alt: 'Photo Cell',
      link: '/en/products/photo-cell'
    },
    {
      id: 3,
      image: '/catalog/1.png', // Using catalog image as placeholder for loadcenter
      alt: 'Load Center',
      link: '/en/products/load-center'
    },
    {
      id: 4,
      image: '/touch-swich/touch-swich.png',
      alt: 'Touch Switch',
      link: '/en/products/touch-switch'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="home" className="hero">
      <div className="hero-slider-container">
        <div className="desktop-slider">
          <div className="owl-carousel owl-theme">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="owl-item active"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="item">
                      <a href={slides[currentSlide].link} target="_self">
                        <img 
                          decoding="async" 
                          src={slides[currentSlide].image} 
                          alt={slides[currentSlide].alt}
                          onError={(e) => {
                            e.target.src = '/catalog/ct-cover.png'; // fallback image
                          }}
                        />
                      </a>
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
                onClick={prevSlide}
              >
                <FaChevronLeft />
              </button>
              <button 
                type="button" 
                role="presentation" 
                className="owl-next"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>
            
            <div className="owl-dots">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  role="button" 
                  className={`owl-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mobile-slider">
          <div className="owl-carousel owl-theme">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="owl-item active"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="item">
                      <a href={slides[currentSlide].link} target="_self">
                        <img 
                          decoding="async" 
                          src={slides[currentSlide].image} 
                          alt={slides[currentSlide].alt}
                          onError={(e) => {
                            e.target.src = '/catalog/ct-cover.png'; // fallback image
                          }}
                        />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            <div className="owl-nav disabled">
              <button 
                type="button" 
                role="presentation" 
                className="owl-prev"
                onClick={prevSlide}
              >
                <FaChevronLeft />
              </button>
              <button 
                type="button" 
                role="presentation" 
                className="owl-next"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>
            
            <div className="owl-dots">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  role="button" 
                  className={`owl-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEn; 