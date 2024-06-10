// AgendaMedica.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './AgendaMedica.css';

const AgendaMedica = () => {
    return (
        <div className="section agenda-medica">
            <h2><FontAwesomeIcon icon={faCalendarAlt} /> Agenda Médica</h2>
            <p>Olvídate de las llamadas. Nuestro sistema de agendamiento online es rápido y eficiente. Selecciona el día y la hora que más te convenga y agenda tu cita en segundos.</p>
            <div className="agenda-form">
                <label>
                    Seleccione una fecha:
                    <input type="date" />
                </label>
                <label>
                    Seleccione una hora:
                    <input type="time" />
                </label>
                <button>Agendar Cita</button>
            </div>
        </div>
    );
};

export default AgendaMedica;
