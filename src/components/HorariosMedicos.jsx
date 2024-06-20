import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './HorariosMedicos.css';

gsap.registerPlugin(ScrollTrigger);

const HorariosMedicos = () => {
    const horarios = [
        { dia: 'Lunes', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Martes', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Miércoles', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Jueves', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Viernes', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Sábado', horario: '10:00 AM - 2:00 PM' },
    ];

    const iconRef1 = useRef(null);
    const iconRef2 = useRef(null);
    const tableRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(iconRef1.current,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: iconRef1.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                }
            }
        );

        gsap.fromTo(iconRef2.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: iconRef2.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                }
            }
        );

        gsap.fromTo(tableRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: tableRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                }
            }
        );
    }, []);

    return (
        <div className="section horarios-medicos">
            <FontAwesomeIcon icon={faCalendarAlt} className='partedelfondo' ref={iconRef1} />
            <FontAwesomeIcon icon={faClock} className='partedelfondo2' ref={iconRef2} />
            <h2>Horarios Médicos</h2>
            <p>Muestre la disponibilidad de sus profesionales para que los pacientes puedan programar sus citas de una manera más intuitiva.</p>
            <table ref={tableRef}>
                <thead>
                    <tr>
                        <th><FontAwesomeIcon icon={faCalendarAlt} /> Día</th>
                        <th><FontAwesomeIcon icon={faClock} /> Horario</th>
                    </tr>
                </thead>
                <tbody>
                    {horarios.map((horario, index) => (
                        <tr key={index}>
                            <td>{horario.dia}</td>
                            <td>{horario.horario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HorariosMedicos;
