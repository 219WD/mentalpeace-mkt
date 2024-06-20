import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faUserDoctor, faBlog } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardRef = useRef(null);
  useEffect(() => {
    const elements = [
      cardRef.current,
    ];

    elements.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", 
            end: "bottom 20%", 
            scrub: 1,
          },
        }
      );
    });
  }, []);
  return (
    <section id="servicios" className="services-section">
      <div className="services-card" ref={cardRef}>
        <div className="services-card-image">
          <img src="https://i.imgur.com/anJrFeM.png" alt="Descripción de la imagen" />
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
          <a href='https://wa.me/3816380954' className="cta-button">Quiero un sitio web</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
