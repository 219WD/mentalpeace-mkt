import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Incrementa la Facturación de tu Clínica sin complicaciones</h1>
        <p>Transformamos tu negocio en estética y belleza generando crecimiento económico con marketing de Resultados. Enfócate en lo que amas embellecer a tus clientes.</p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">Contratar Servicio</a>
          <a href="https://wa.me/3816380954" className="btn-secondary">Contacto por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
