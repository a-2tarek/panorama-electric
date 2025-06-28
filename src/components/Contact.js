import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'الهاتف',
      content: '+201223196030'
    },
    {
      icon: FaEnvelope,
      title: 'البريد الإلكتروني',
      content: 'info@panoramaelectric.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'العنوان',
      content: "المنطقة الصناعية، قطعة 102، مدينة السادس من أكتوبر، الجيزة، مصر"
    },
    {
      icon: FaClock,
      title: 'ساعات العمل',
      content: 'السبت-الأربع: 8 صباحًا - 4 مساءً'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('شكرًا لرسالتك! سنعود إليك قريبًا.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>تواصل معنا</h2>
          <p>للاستفسار أو الحصول على استشارة وعرض سعر مجاني، لا تتردد في التواصل معنا</p>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <info.icon className="contact-icon" />
                <div>
                  <h3>{info.title}</h3>
                  <p>{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="contact-form" variants={itemVariants}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="اسمك"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="بريدك الإلكتروني"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="رقم هاتفك"
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">اختر الخدمة</option>
                  <option value="current-transformer">محول التيار</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="رسالتك"
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 