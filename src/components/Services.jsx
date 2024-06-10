import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faUserDoctor, faBlog } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import img1 from '../assets/banner-1-600x502.jpg'

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <div className="services-card">
        <div className="services-card-image">
          <img src={img1} alt="Descripción de la imagen" />
        </div>
        <div className="services-card-content">
          <h1>Creamos una página web para médicos</h1>
          <ul className="benefits-list">
            <li>
              <FontAwesomeIcon icon={faClock} className="benefit-icon" /> Horarios médicos: Muestra a tus pacientes el horario disponible por horas, días de cada doctor.
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} className="benefit-icon" /> Agenda médica: Olvídate de las llamadas, permite que cada usuario agende su cita online
            </li>
            <li>
              <FontAwesomeIcon icon={faUserDoctor} className="benefit-icon" /> Personal médico: Presenta a todo tu equipo de trabajo con su perfil profesional, trayectoria, link redes sociales
            </li>
            <li>
              <FontAwesomeIcon icon={faBlog} className="benefit-icon" /> Blog para médicos: Comparte tu contenido científico, consejos, novedades, tratamientos o eventos de salud
            </li>
          </ul>
          <button className="cta-button">Quiero un sitio web</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
