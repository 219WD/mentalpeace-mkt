import React, { useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    // Animación para el fondo del menú
    gsap.fromTo(".header", 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
    
    // Animación para el logo, lista y botón con delay
    gsap.fromTo(".logo, .nav-links li, .btn-whatsapp", 
      { y: -30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, delay: 1, stagger: 0.2, ease: "power4.out" }
    );
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Mental Peace</div>
        <ul className="nav-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#beneficios">Beneficios</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="https://wa.me/3816380954" className="btn-whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </nav>
    </header>
  );
}

export default Header;
