import React from 'react';
import './Profesional.css';
import PngDra from '../assets/about.png'

const Profesional = () => {
  return (
    <section id="profesional" className="profesional-section">
      <div className="profesional-card">
        <img src={PngDra} alt="Doctora" />
        <div className="txt">
          <h2>Bienvenido profesional de la medicina.</h2>
          <p>Tenemos muchos servicios web y de marketing para ofrecerle y explotar su maximo potencial. Le aseguramos una increible mejora en la gestion de turnos para su consultorio, y campañas publicitarias para promocionar servicios o productos.</p>
          <h5>Mental Peace Agency</h5>
        </div>
      </div>
    </section>
  );
}

export default Profesional;
