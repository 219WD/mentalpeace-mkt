import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Testimonials = () => {

  const testimonials = [
    {
      img: "https://i.imgur.com/nL9kGQF.png",
      text: "Medicina Estética - Pasó de 1800 a 7.000 dólares x mes.",
      name: "Dra. Soledad",
      link: "https://www.youtube.com/watch?v=U2CNcxsbifg"
    },
    {
      img: "https://i.imgur.com/0mj8Udq.jpg",
      text: "Medicina Estética - pasó de 3000 a 17.000 dólares x mes.",
      name: "Dra. Mayra",
      link: "https://www.youtube.com/watch?v=rsu69ihHjFc"
    },
    {
      img: "https://i.imgur.com/71lmljQ.png",
      text: "Medicina Estética - Recomiendo altamente sus servicios, son de gran valor para cualquier clínica.",
      name: "Dra. Noelia",
      link: "https://youtu.be/rBD8eW2rvMc"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_1280.jpg",
      text: "Ecografías - pasó de 800 a 5.000 dólares x mes",
      name: "Dr. Robert",
      link: "https://www.youtube.com/watch?v=oAWeF4AH0W0"
    },
    {
      img: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "El diseño de la página web nos ha permitido conectar mejor con nuestros pacientes.",
      name: "Dra. Ana G."
    },
    {
      img: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Ahora podemos enfocarnos en lo que realmente importa: nuestros pacientes.",
      name: "Dra. Maria L."
    }
  ];

  return (
    <div className="testimonials-section" id="testimonios" >
      <h2>Testimonios</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
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
                <a className='btn-youtube' href={testimonial.link} target="_blank"><FontAwesomeIcon icon={faYoutube} className='icon-yt'/> Ver video</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
