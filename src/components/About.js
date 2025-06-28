import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: '15+', label: 'سنة خبرة' },
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
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', gap: '2rem', flexDirection: 'row-reverse' }}
        >
          <motion.div className="about-text" variants={itemVariants} style={{ textAlign: 'right', flex: 1, direction: 'rtl', unicodeBidi: 'plaintext' }}>
            <h2>من نحن - بانوراما الكتريك</h2>
            <p>
              بخبرة 15 عامًا في مجال الكهرباء، تقدم شركة بانوراما الكتريك حلولاً كهربائية موثوقة وآمنة وفعالة للعملاء  .
            </p>
            <p>
              يلتزم فريقنا من الفنيين  بتقديم خدمة استثنائية بأعلى معايير الجودة والسلامة. نحن نتميز باهتمامنا بالتفاصيل، وأسعارنا التنافسية، ورضا عملائنا.
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
          <motion.div className="about-logo" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/logo.png" alt="Panorama Electric Logo" style={{ maxWidth: '250px', width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 