import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: '/slider/WhatsApp Image 2025-06-29 at 2.48.53 PM.jpeg',
      alt: 'Panorama Electric Product 1',
      link: '/products/current-transformer'
    },
    {
      id: 2,
      image: '/slider/WhatsApp Image 2025-06-29 at 11.32.23 AM.jpeg',
      alt: 'Panorama Electric Product 2',
      link: '/products/photo-cell'
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
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
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
                            e.target.src = '/slider/WhatsApp Image 2025-06-29 at 2.48.53 PM.jpeg'; // fallback image
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
          <div 
            className="owl-carousel owl-theme"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
                            e.target.src = '/slider/WhatsApp Image 2025-06-29 at 2.48.53 PM.jpeg'; // fallback image
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

export default Hero; 