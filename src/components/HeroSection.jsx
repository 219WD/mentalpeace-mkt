import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Incrementa tus ingresos sin complicaciones</h1>
        <p>Ayudamos a transformar tu negocio en estética y belleza generando crecimiento económico implementando performance marketing. Enfocate en lo que realmente amas embellecer a tus clientes.</p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">Contratar Servicio</a>
          <a href="https://wa.me/tu_numero" className="btn-secondary">Contacto por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
