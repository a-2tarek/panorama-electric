import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2>About Panorama Electric</h2>
            <p>
              With over 15 years of experience in the electrical industry, Panorama Electric has been providing reliable, safe, and efficient electrical solutions to residential and commercial clients.
            </p>
            <p>
              Our team of licensed and certified electricians is committed to delivering exceptional service with the highest standards of safety and quality. We pride ourselves on our attention to detail, competitive pricing, and customer satisfaction.
            </p>
            
            <motion.div 
              className="about-stats"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="stat"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="about-image" variants={itemVariants}>
            <motion.div 
              className="image-placeholder"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaUsers className="about-icon" />
              <p>Our Professional Team</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 