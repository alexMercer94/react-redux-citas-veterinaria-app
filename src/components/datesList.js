import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDateAction } from '../redux/actions/datesActions';

const DatesList = () => {
    // Obtener las citas del state
    const dates = useSelector(state => state.dates);

    // Mensaje condicional
    const message = Object.keys(dates.dates).length === 0 ? 'No hay citas' : 'Administra las citas aquí';

    // Dispatch para mandar llamar la accion de eliminar
    const dispatch = useDispatch();

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{message}</h2>
                <div className="lista-citas">
                    {dates.dates.map(date => (
                        <div key={date.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{date.pet}</h3>
                                <p className="card-text">
                                    <span>Nombre Dueño:</span>
                                    {date.propietario}
                                </p>
                                <p className="card-text">
                                    <span>Fecha:</span>
                                    {date.date}
                                </p>
                                <p className="card-text">
                                    <span>Hora:</span> {date.hour}
                                </p>
                                <p className="card-text">
                                    <span>Sintomas:</span> <br /> {date.sintomas}
                                </p>
                                <button className="btn btn-danger" onClick={() => dispatch(deleteDateAction(date.id))}>
                                    Borrar &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DatesList;
