import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Testimonials = () => {

  const testimonialsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 80%", // Comienza la animación cuando el 80% del contenedor es visible
        end: "bottom 20%", // Termina la animación cuando el 20% del contenedor es visible
        scrub: 1, // Configuración para hacer que la animación sea más suave mientras se hace scroll
      }
    });

    tl.fromTo(testimonialsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );

  }, []);

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
      text: "Medicina Estética - pasó de 4000 a 21.000 dólares x mes.",
      name: "Dra. Noelia",
      link: "https://youtu.be/rBD8eW2rvMc"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_1280.jpg",
      text: "Ecografías - pasó de 800 a 5.000 dólares x mes.",
      name: "Dr. Robert",
      link: "https://www.youtube.com/watch?v=oAWeF4AH0W0"
    },
    {
      img: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Medicina Estética - pasó de 1200 a 13.000 dólares x mes.",
      name: "Dra. Ana G."
    },
    {
      img: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Medicina Estética - pasó de 900 a 5.000 dólares x mes.",
      name: "Dra. Maria L."
    }
  ];

  return (
    <div className="testimonials-section" id="testimonios" >
      <h2>Testimonios</h2>
      <Swiper ref={testimonialsRef}
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
