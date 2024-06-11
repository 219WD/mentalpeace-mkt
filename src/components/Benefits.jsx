import React from 'react';
import './Benefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUserMd, faBaby, faTooth } from '@fortawesome/free-solid-svg-icons'; // Importamos nuevos íconos

const Benefits = () => {
  return (
    <section id="beneficios" className="benefits-section">
      <h2>Trabajamos con distintos profesionales</h2> {/* Actualizamos el título */}
      <div className="benefit-cards">
        <div className="benefit-card">
          <FontAwesomeIcon className='icon-benefict' icon={faStethoscope} size="3x" /> {/* Cambiamos el ícono */}
          <h3>Médicos</h3> {/* Actualizamos el título */}
          <p>Trabajamos con médicos de diversas especialidades para mejorar su presencia en línea.</p> {/* Actualizamos el texto */}
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon className='icon-benefict' icon={faUserMd} size="3x" /> {/* Cambiamos el ícono */}
          <h3>Cirujanos Plásticos</h3> {/* Actualizamos el título */}
          <p>Ayudamos a cirujanos plásticos a destacar sus servicios y llegar a más pacientes potenciales.</p> {/* Actualizamos el texto */}
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon className='icon-benefict' icon={faBaby} size="3x" /> {/* Cambiamos el ícono */}
          <h3>Obstetras</h3> {/* Actualizamos el título */}
          <p>Apoyamos a obstetras en la promoción de sus servicios para cuidado materno e infantil.</p> {/* Actualizamos el texto */}
        </div>
        <div className="benefit-card">
          <FontAwesomeIcon className='icon-benefict' icon={faTooth} size="3x" /> {/* Cambiamos el ícono */}
          <h3>Dentistas</h3> {/* Actualizamos el título */}
          <p>Colaboramos con dentistas para optimizar su presencia en línea y atraer a más pacientes.</p> {/* Actualizamos el texto */}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
