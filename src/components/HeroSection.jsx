import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { gsap } from "gsap";


const HeroSection = () => {
  const tl = useRef(null);

  useEffect(() => {
    gsap.set(".hero-content, .hero-buttons", { y: -75, opacity: 0 });
    gsap.set("h1, p", { y: -30, opacity: 0 });

    tl.current = gsap.timeline({ paused: true })
      .to(".hero-content, .hero-buttons", {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.inOut",
      })
      .to("h1, p", {
        opacity: 1,
        y: 0,
        delay: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power4.inOut",
      })
      
    tl.current.play();
  }, []);
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
