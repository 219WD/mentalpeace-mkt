import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './DoctorSection.css';
import img1 from '../assets/dr1.jpg'
import img2 from '../assets/dr2.webp'
import img3 from '../assets/dr3.webp'

const doctors = [
  {
    name: "Dr. Juan Pérez",
    img: img1,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Dra. Laura Martínez",
    img: img2,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Dr. Carlos Rodríguez",
    img: img3,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  }
];

const DoctorSection = () => {
  return (
    <section className="doctor-section">
      <div className="container">
        <h2>Presenta a tu personal</h2>
        <div className="doctors-container">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-img-container">
                <img src={doctor.img} alt={`Dr. ${doctor.name}`} className="doctor-img" />
              </div>
              <h3 style={{ color: '#333' }}>{doctor.name}</h3>
              <div className="social-icons">
                <a href={doctor.social.facebook}><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href={doctor.social.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={doctor.social.instagram}><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorSection;
