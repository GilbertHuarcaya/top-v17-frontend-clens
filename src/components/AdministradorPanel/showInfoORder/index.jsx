/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';
// import PropTypes from 'prop-types';

const ShowInfoOrder = (
  { userName, ciudad, completed, direccion, telefono },
  role,
) => {
  const { rolePersonal } = role;
  console.log(rolePersonal);
  return (
    <>
      <ul className="show-info-order-wrapper">
        <li className="show-info-order-wrapper__item">
          {`Nombre del cliente: ${userName}`}
        </li>
        <li className="show-info-order-wrapper__item">Ciudad: {ciudad}</li>
        <li className="show-info-order-wrapper__item">
          {`Servicio terminado: ${completed}`}
        </li>
        <li className="show-info-order-wrapper__item">
          Direccion: {direccion}
        </li>
        <li className="show-info-order-wrapper__item">
          {`Telefono contacto: ${telefono}`}
        </li>
      </ul>
      <section className="asign-wrapper">
        <h3>Asignar servicio a:</h3>
        <form>
          <select name="personal" id="personal-id">
            <option value="default">Elegir</option>
            {rolePersonal.map((person, index) => {
              return (
                <option key={Math.random()} value={index + 1}>
                  {person.firstName}
                </option>
              );
            })}
          </select>
        </form>
        <h3>Servicio asignado a:</h3>
      </section>
    </>
  );
};

// ShowInfoOrder.propTypes = {
// };

export default ShowInfoOrder;

// ciudad, completed, direccion, telefono,
