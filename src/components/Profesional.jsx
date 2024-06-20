import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Profesional.css';
import PngDra from '../assets/about.png'
import VideoComponent from './VideoComponent '
gsap.registerPlugin(ScrollTrigger);

const Profesional = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const videoRef = useRef(null);
  const h5Ref = useRef(null);

  useEffect(() => {
    const elements = [
      imgRef.current,
      titleRef.current,
      paragraphRef.current,
      h5Ref.current,
      videoRef.current
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
    <section id="profesional" className="profesional-section">
      <div className="profesional-card">
        <img ref={imgRef} src={PngDra} alt="Doctora" />
        <div className="txt">
          <h2 ref={titleRef}>Bienvenido profesional de la medicina.</h2>
          <p ref={paragraphRef}>Ayudamos a centros de medicina estética a convertir más prospectos en clientes leales mediante un sistema automatizado de atención y marketing.</p>
          <h5 ref={h5Ref}>Mental Peace Agency</h5>
        </div>
        <div ref={videoRef} className="video"><VideoComponent /></div>
      </div>
    </section>
  );
}

export default Profesional;