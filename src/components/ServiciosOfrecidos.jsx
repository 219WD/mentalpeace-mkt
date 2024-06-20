import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCalendarAlt, faBullhorn, faEnvelope, faBlog, faUsers, faPalette } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ServiciosOfrecidos.css';

gsap.registerPlugin(ScrollTrigger);

const servicios = [
  {
    icon: faGlobe,
    title: 'Optimización de Presencia Online',
    description: 'El desarrollo web es esencial para crear soluciones de software efectivas. Las landing pages captan nuevos prospectos interesados en productos o servicios, convirtiendo visitantes en suscriptores de correos. Las páginas con múltiples secciones organizan la información y mejoran la experiencia del usuario. Además, los correos electrónicos nutren leads, educando y convenciendo a los prospectos de realizar una compra.'
  },
  {
    icon: faCalendarAlt,
    title: 'Automatización de Agendas',
    description: 'Sistema con inteligencia artificial para contestar mensajes de WhatsApp. Tu secretaria 24/7 agenda turnos automáticamente en el calendario de Google, mejorando la eficiencia y disponibilidad. Esta herramienta ahorra tiempo y asegura una atención continua a los clientes, sin importar la hora del día.'
  },
  {
    icon: faBullhorn,
    title: 'Marketing Estratégico y de Precisión',
    description: 'Creamos la Estrategia integral de la clínica o consultorio que le permita mediante su propuesta de valor transformar desconocidos en clientes de pago. Montamos Campañas publicitarias efectivas para promocionar servicios y productos estéticos en meta y google ads. Campañas de Email marketing.'
  },
  {
    icon: faEnvelope,
    title: 'Campañas de Email Marketing',
    description: 'Captar nuevos prospectos interesados en los productos o servicios ofrecidos por la empresa. Convertir visitantes del sitio web en suscriptores de la lista de correos. Nutrir leads a través de una serie de correos electrónicos diseñados para educar y convencer a los prospectos de realizar una compra.'
  },
  {
    icon: faBlog,
    title: 'Blog y Contenidos',
    description: 'Crear un blog permite al profesional médico subir contenido educativo de forma sencilla. Este espacio es ideal para compartir artículos, videos y actualizaciones sobre salud. Además, mejora la visibilidad online y la credibilidad del médico, ofreciendo información valiosa a los pacientes y fortaleciendo la relación con ellos.'
  },
  {
    icon: faUsers,
    title: 'Community Manager',
    description: 'Un Community Manager gestiona las redes sociales, creando y compartiendo contenido atractivo para aumentar la interacción. Este profesional responde a comentarios y mensajes, construyendo una comunidad activa y leal. Además, analiza métricas para mejorar las estrategias y aumentar la presencia en línea de la marca.'
  },
  {
    icon: faPalette,
    title: 'Diseño Gráfico',
    description: 'El diseño gráfico es crucial para crear una identidad visual atractiva. Los diseñadores gráficos desarrollan logos, materiales publicitarios y contenido visual que comunica eficazmente los valores de la marca. Un buen diseño mejora la percepción de la empresa y capta la atención del público objetivo.'
  }
];

const ServiciosOfrecidos = () => {
  const serviciosRef = useRef([]);

  useEffect(() => {
    serviciosRef.current.forEach((el, index) => {
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
    <section className="custom-services-section">
      <h2>Servicios Ofrecidos</h2>
      <div className="custom-services-container">
        {servicios.map((servicio, index) => (
          <div className="custom-service-card" key={index} ref={el => serviciosRef.current[index] = el}>
            <FontAwesomeIcon icon={servicio.icon} className="custom-service-icon" />
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosOfrecidos;
