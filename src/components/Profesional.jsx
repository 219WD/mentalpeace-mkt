import React from 'react';
import './Profesional.css';
import PngDra from '../assets/about.png'
import VideoComponent from './VideoComponent '

const Profesional = () => {
  return (
    <section id="profesional" className="profesional-section">
      <div className="profesional-card">
        <img src={PngDra} alt="Doctora" />
        <div className="txt">
          <h2>Bienvenido profesional de la medicina.</h2>
          <p>Ayudamos a centros de medicina estética a convertir más prospectos en clientes leales mediante un sistema automatizado de atención y marketing.</p>
          <h5>Mental Peace Agency</h5>
        </div>
        <div className="video"><VideoComponent /></div>
      </div>
    </section>
  );
}

export default Profesional;
