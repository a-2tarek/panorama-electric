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
            {/* Current Transformer Box */}
            <div style={{ flex: 1, minWidth: 0, background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', margin: '0 0.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem', flexGrow: 0 }}>Current Transformer</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.95rem', flexGrow: 0 }}>لقياس التيارات العالية بدقة وأمان للتطبيقات الصناعية والتجارية.</p>
              <a href="https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/Efmzr03OustEp2AfyMXlsyEBmkjpedAedKFGsoZnIo_Prg?e=3bGzul" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem', marginTop: 'auto', width: '100%' }} target="_blank" rel="noopener noreferrer">
                عرض الكتالوج
              </a>
            </div>
            {/* Touch Switch Box */}
            <div style={{ flex: 1, minWidth: 0, background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', margin: '0 0.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem', flexGrow: 0 }}>Touch Swich</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.95rem', flexGrow: 0 }}>مفتاح لمس ذكي لتحكم عصري وسهل وأنيق في الإضاءة.</p>
              <a href="https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/EaR9xsuMLdNBt6bGmvNjCaQBCjLs-SEpoxUEVcdnx1NrBA?e=W4ojcF" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem', marginTop: 'auto', width: '100%' }} target="_blank" rel="noopener noreferrer">
                عرض الكتالوج
              </a>
            </div>
            {/* Photocell Box */}
            <div style={{ flex: 1, minWidth: 0, background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', margin: '0 0.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem', flexGrow: 0 }}>Photocell</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.95rem', flexGrow: 0 }}>فوتوسيل للتحكم التلقائي في الإضاءة وتوفير الطاقة.</p>
              <a href="https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/Eb9YjRr_oDxAlFzxgJJ91aEB3HwciBAH4JebaeMfufSJ1w?e=HhkBSG" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem', marginTop: 'auto', width: '100%' }} target="_blank" rel="noopener noreferrer">
                عرض الكتالوج
              </a>
            </div>
            {/* Load Center Box */}
            <div style={{ flex: 1, minWidth: 0, background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', margin: '0 0.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem', flexGrow: 0 }}>Load Center</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.95rem', flexGrow: 0 }}>لوحات توزيع كهربائية عالية الجودة للأمان والتحكم في توزيع الطاقة.</p>
              <a href="https://mustedueg-my.sharepoint.com/:b:/g/personal/83605_must_edu_eg/EWHEYZLs9EpHij3UUgWBodcBKuHzwIKWTM9AkNjJEdA9ig?e=myJcqO" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 2rem', marginTop: 'auto', width: '100%' }} target="_blank" rel="noopener noreferrer">
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