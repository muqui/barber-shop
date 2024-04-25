import React, { useState, useEffect } from 'react';
import { validate } from '../helpers/validate';

export const CreateAppointment = () => {
    const [appointmentData, setAppointmentData] = useState({
        subject: '',
        date: '',
        time: ''
    });

    const [errors, setErrors] = useState({
        subject: '',
        date: '',
        time: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (formSubmitted) {
            setErrors(validate(appointmentData));
        }
    }, [appointmentData, formSubmitted]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAppointmentData({
            ...appointmentData,
            [name]: value
        });

        // Solo actualizar errores si el formulario ha sido enviado
        if (formSubmitted) {
            setErrors(validate({ ...appointmentData, [name]: value }));
        }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (Object.keys(errors).length === 0) {
            alert(`Subject= ${appointmentData.subject} Date= ${appointmentData.date}  Time= ${appointmentData.time}`);
            // Aquí puedes enviar el formulario o realizar otras acciones
        } else {
            alert('Por favor, complete el formulario correctamente.');
            // Aquí puedes manejar el caso en que el formulario no se pueda enviar
        }
    };

    return (
      <div className='container'>
         <div className=" row align-items-center justify-content-center image-home">

       
         <div className="col-10 text-center mt-2 bg-white  border border-dark p-4 bg-light rounded-3">
         <form onSubmit={handleOnSubmit} className="form">
            <h2 className='text-center'>Agendar cita</h2>
            <div className="form-group pb-3">
                {/* Asunto */}
                <input
                    type="text"
                    className="form-control "
                    placeholder="Asunto"
                    value={appointmentData.subject}
                    name="subject"
                    onChange={handleInputChange}
                />
                {formSubmitted && errors.subject && <p className="text-danger">{errors.subject}</p>}
            </div>
            <div className="form-group pb-3">
                {/* Fecha */}
                <input
                    type="date"
                    className="form-control"
                    placeholder="Fecha"
                    value={appointmentData.date}
                    name="date"
                    onChange={handleInputChange}
                />
                {formSubmitted && errors.date && <p className="text-danger">{errors.date}</p>}
            </div>
            <div className="form-group pb-3">
                {/* Hora */}
                <input
                    type="time"
                    className="form-control"
                    placeholder="Hora"
                    value={appointmentData.time}
                    name="time"
                    onChange={handleInputChange}
                />
                {formSubmitted && errors.time && <p className="text-danger">{errors.time}</p>}
            </div>
            <div className="form-group pt-2 text-center">
            <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
           
        </form>

         </div>
      
       
        </div>
        </div>
    );
};
