import React, { useState } from 'react';

const AddDate = props => {
    // State del componente
    const [pet, savePet] = useState('');
    const [propietario, savePropietario] = useState('');
    const [date, saveDate] = useState('');
    const [hour, saveHour] = useState('');
    const [sintomas, saveSintomas] = useState('');

    // Cuando el formulario es enviado
    const submitNewDate = e => {
        e.preventDefault();

        // Validar el formulario

        // Crear la nueva cita

        // Reiniciar el formulario
    };

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form onSubmit={submitNewDate}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                value={pet}
                                onChange={e => savePet(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño de la Mascota"
                                value={propietario}
                                onChange={e => savePropietario(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input
                                type="date"
                                className="form-control"
                                value={date}
                                onChange={e => saveDate(e.target.value)}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="time"
                                className="form-control"
                                value={hour}
                                onChange={e => saveHour(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                value={sintomas}
                                onChange={e => saveSintomas(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">
                                Agregar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDate;
