import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div style={{
          background: '#e2e8f0',
          borderRadius: '18px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          padding: '2.5rem 1.5rem',
          margin: '2rem auto',
          maxWidth: '900px',
        }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center' }}>المنتجات</h2>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            padding: '2rem 1rem',
            margin: '0 auto',
            maxWidth: '900px',
            textAlign: 'center',
          }}>
            {/* current transformer box */}
            <div style={{ flex: 1, minWidth: 0, background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', margin: '0 0.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Current Transformer</h3>
              <a href="/catalog" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem', marginTop: 'auto', width: '100%' }}>
                عرض الكتالوج
              </a>
            </div>
            {/* touch swich box  */}
            <div style={{ flex: 1, minWidth: 0, background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', margin: '0 0.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Touch Swich</h3>
              <a href="/touch-swich.png" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem', marginTop: 'auto', width: '100%' }}>
                عرض الكتالوج
              </a>
            </div>
            {/* صندوق الكابلات الكهربائية */}
            <div style={{ flex: 1, minWidth: 0, background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', margin: '0 0.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem' }}>الكابلات الكهربائية</h3>
              <p style={{ marginBottom: '1.5rem' }}>توفير كابلات كهربائية بمواصفات متنوعة وجودة عالية.</p>
              <a href="https://example.com/catalog-cables" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem', marginTop: 'auto', width: '100%' }}>
                عرض الكتالوج
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 