import React from 'react';
import './AboutUs.css';
import Icon1 from '../assets/tiempo libre.png';
import Icon2 from '../assets/libertad financiera.png';
import Icon3 from '../assets/paz mental.png';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="large-cards">
        <div className="large-card">
          <h2>Nuestro Propósito</h2>
          <p>“En Paz Mental Marketing Funnels, nos dedicamos a ser el aliado confiable de nuestros clientes en la industria estética. Nuestro compromiso es claro: trabajar codo a codo para que alcancen el éxito comercial y personal que anhelan en un mercado tan competitivo. A través de una metodología sistemática y probada, brindamos un flujo constante de pacientes calificados, fundamentales para el crecimiento de su práctica. Nos regimos por valores de honestidad, integridad y profesionalismo, lo que garantiza una relación de confianza mutua. En resumen, estamos aquí para ofrecerles las herramientas y el apoyo necesarios para que logren destacar y prosperar en su negocio y vida profesional.”</p>
        </div>
        <div className="large-card">
          <p>“Los clientes que elijan nuestra agencia experimentarán un enfoque estratégico y profesional, mientras se benefician de una solución de marketing de precisión probada que les brinda un flujo constante de clientes calificados, ayudándoles a aumentar su rentabilidad en ventas en el sector de la estética y belleza”</p>
        </div>
      </div>
      <div className="small-cards">
        <div className="small-card">
          <img src={Icon1} alt="Tiempo Libre" />
          <h3>Tiempo Libre</h3>
          <p>Al tener un sistema automatizado que atrae y retiene clientes, nuestro cliente podrá disfrutar de más tiempo libre para dedicarlo a actividades personales o familiares</p>
        </div>
        <div className="small-card">
          <img src={Icon2} alt="Libertad Financiera" />
          <h3>Libertad Financiera</h3>
          <p>Con un negocio próspero y rentable, nuestro cliente podrá disfrutar de una mayor estabilidad financiera y la libertad de invertir en sus proyectos personales o profesionales</p>
        </div>
        <div className="small-card">
          <img src={Icon3} alt="Paz Mental" />
          <h3>Paz Mental</h3>
          <p>Con un sistema bien estructurado y efectivo en su lugar, nuestro cliente podrá disfrutar de una mayor tranquilidad y paz mental, sabiendo que su negocio está en buenas manos y en camino hacia el éxito</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
