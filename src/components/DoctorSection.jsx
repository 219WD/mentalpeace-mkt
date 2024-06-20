import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './DoctorSection.css';
import img1 from '../assets/dr1.jpg';
import img2 from '../assets/dr2.webp';
import img3 from '../assets/dr3.webp';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section className="doctor-section">
      <div className="container" ref={containerRef}>
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
