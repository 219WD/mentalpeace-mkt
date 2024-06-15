import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/MPMarketingFunnels" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/mentalpeace.agency/" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/lic-franco-diaz-parajon/" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="info">
          <p>Lunes a viernes de 09:00 a 21:00</p>
      </div>
      <p className='copy'>© 2024 Agencia de Marketing para Médicos. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
