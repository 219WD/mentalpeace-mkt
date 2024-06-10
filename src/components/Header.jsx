import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Agencia Médica</div>
        <ul className="nav-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#beneficios">Beneficios</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="https://wa.me/tu_numero" className="btn-whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </nav>
    </header>
  );
}

export default Header;
