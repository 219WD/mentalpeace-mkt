import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Testimonials.css';

const Testimonials = () => {

  const testimonials = [
    {
      img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
      text: "Desde que contraté el servicio de turnos online, no reniego más. ¡Mis pacientes están felices!",
      name: "Dr. Juan P."
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
      text: "Desde que hice mi página web, triplicamos nuestras consultas.",
      name: "Dra. Laura M."
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_1280.jpg",
      text: "El manejo de citas online ha sido increíblemente eficiente. ¡Muy recomendado!",
      name: "Dr. Carlos R."
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/29/06/09/woman-1867720_1280.jpg",
      text: "El diseño de la página web nos ha permitido conectar mejor con nuestros pacientes.",
      name: "Dra. Ana G."
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/10/16/05/55/girl-990585_1280.jpg",
      text: "Ahora podemos enfocarnos en lo que realmente importa: nuestros pacientes.",
      name: "Dra. Maria L."
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      text: "Recomiendo altamente sus servicios, son de gran valor para cualquier clínica.",
      name: "Dr. Pedro S."
    }
  ];

  return (
    <div className="testimonials-section" id="testimonios" >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <div className="testimonial-img-container">
                <img className='testimonial-img' src={testimonial.img} alt={`Testimonial ${index + 1}`} />
              </div>
              <div className="testimonial-text">
                <h2>{testimonial.name}</h2>
                <p>- {testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
