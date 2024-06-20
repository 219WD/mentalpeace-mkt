import React, { useEffect, useRef } from 'react';
import './Benefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUserMd, faBaby, faTooth } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const benefitCardsRef = useRef([]);

  useEffect(() => {
    benefitCardsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
    <section id="beneficios" className="benefits-section">
      <h2>Trabajamos con distintos profesionales</h2>
      <div className="benefit-cards">
        <div className="benefit-card" ref={el => benefitCardsRef.current[0] = el}>
          <FontAwesomeIcon className='icon-benefit' icon={faStethoscope} size="3x" />
          <h3>Médicos</h3>
          <p>Trabajamos con médicos de diversas especialidades para mejorar su presencia en línea.</p>
        </div>
        <div className="benefit-card" ref={el => benefitCardsRef.current[1] = el}>
          <FontAwesomeIcon className='icon-benefit' icon={faUserMd} size="3x" />
          <h3>Cirujanos Plásticos</h3>
          <p>Ayudamos a cirujanos plásticos a destacar sus servicios y llegar a más pacientes potenciales.</p>
        </div>
        <div className="benefit-card" ref={el => benefitCardsRef.current[2] = el}>
          <FontAwesomeIcon className='icon-benefit' icon={faBaby} size="3x" />
          <h3>Obstetras</h3>
          <p>Apoyamos a obstetras en la promoción de sus servicios para cuidado materno e infantil.</p>
        </div>
        <div className="benefit-card" ref={el => benefitCardsRef.current[3] = el}>
          <FontAwesomeIcon className='icon-benefit' icon={faTooth} size="3x" />
          <h3>Dentistas</h3>
          <p>Colaboramos con dentistas para optimizar su presencia en línea y atraer a más pacientes.</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
