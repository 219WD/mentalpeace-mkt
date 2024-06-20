import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './AboutUs.css';
import Icon1 from '../assets/tiempo libre.png';
import Icon2 from '../assets/libertad financiera.png';
import Icon3 from '../assets/paz mental.png';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const largeCardsRef = useRef([]);
  const smallCardsRef = useRef([]);
  useEffect(() => {
    // Animar las tarjetas grandes
    largeCardsRef.current.forEach((el, index) => {
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
            start: "top 90%", 
            end: "bottom 10%", 
            scrub: 1,
          },
        }
      );
    });

    // Animar las tarjetas pequeñas
    smallCardsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2, // Delay each element slightly for a staggered effect
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Start animation when the element is 80% from the top of the viewport
            end: "bottom 20%", // End animation when the element is 20% from the bottom of the viewport
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="about-us-section">
      <div className="large-cards">
        <div className="large-card" ref={el => largeCardsRef.current[0] = el}>
          <h2>Nuestro Propósito</h2>
          <p>“En Paz Mental Marketing Funnels nos dedicamos a ser el aliado confiable de nuestros clientes en la industria estética. Nuestro compromiso es claro: trabajar codo a codo para que alcancen el éxito comercial y personal que anhelan en un mercado tan competitivo. A través de una metodología sistemática y probada brindamos un flujo constante de pacientes calificados fundamentales para el crecimiento de su práctica. Nos regimos por valores de honestidad, integridad y profesionalismo, lo que garantiza una relación de confianza mutua. En resumen, estamos aquí para ofrecerles las herramientas y el apoyo necesarios para que logren destacar y prosperar en su negocio y vida profesional.”</p>
        </div>
        <div className="large-card" ref={el => largeCardsRef.current[1] = el}>
          <p>“Los clientes que elijan nuestra agencia experimentarán un enfoque estratégico y profesional, mientras se benefician de una solución de marketing de precisión probada que les brinda un flujo constante de clientes calificados, ayudándoles a aumentar su rentabilidad en ventas en el sector de la estética y belleza”</p>
        </div>
      </div>
      <div className="small-cards">
        <div className="small-card" ref={el => smallCardsRef.current[0] = el}>
          <img src={Icon1} alt="Tiempo Libre" />
          <h3>Tiempo Libre</h3>
          <p>Disfruta de más tiempo libre con nuestro sistema automatizado que atrae y retiene clientes.</p>
        </div>
        <div className="small-card" ref={el => smallCardsRef.current[1] = el}>
          <img src={Icon2} alt="Libertad Financiera" />
          <h3>Libertad Financiera</h3>
          <p>Alcanza una mayor estabilidad financiera y libertad para invertir en tus proyectos personales o profesionales.</p>
        </div>
        <div className="small-card" ref={el => smallCardsRef.current[2] = el}>
          <img src={Icon3} alt="Paz Mental" />
          <h3>Paz Mental</h3>
          <p>Relájate sabiendo que tu negocio está en buenas manos y en camino hacia el éxito.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
