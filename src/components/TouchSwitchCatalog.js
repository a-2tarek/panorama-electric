import React from 'react';

const TouchSwitchCatalog = () => {
  return (
    <section id="touch-switch-catalog" className="catalog-section" style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', width: '100%' }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        padding: '2rem',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '700px',
        width: '85vw',
      }}>
        <img src="/touch-swich/touch-swich.png" alt="Touch Swich Catalog" style={{ maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }} />
      </div>
    </section>
  );
};

export default TouchSwitchCatalog; 