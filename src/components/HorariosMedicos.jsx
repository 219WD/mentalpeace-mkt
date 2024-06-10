// HorariosMedicos.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './HorariosMedicos.css';

const HorariosMedicos = () => {
    const horarios = [
        { dia: 'Lunes', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Martes', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Miércoles', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Jueves', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Viernes', horario: '9:00 AM - 5:00 PM' },
        { dia: 'Sábado', horario: '10:00 AM - 2:00 PM' },
    ];

    return (
        <div className="section horarios-medicos">
            <FontAwesomeIcon icon={faCalendarAlt} className='partedelfondo' />
            <FontAwesomeIcon icon={faClock} className='partedelfondo2' />
            <h2>Horarios Médicos</h2>
            <p>Muestre la disponibilidad de sus profesionales para que los pacientes puedan programar sus citas de una manera mas intuitiva.</p>
            <table>
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
