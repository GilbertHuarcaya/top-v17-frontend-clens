/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';
// import PropTypes from 'prop-types';

const ShowInfoOrder = ({
  userName,
  ciudad,
  completed,
  direccion,
  telefono,
}) => {
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
      <form>
        <select name="personal" id="personal-id">
          <option value="value1">Value 1</option>
          <option value="value2" selected>
            Value 2
          </option>
          <option value="value3">Value 3</option>
        </select>
      </form>
    </>
  );
};

// ShowInfoOrder.propTypes = {
// };

export default ShowInfoOrder;

// ciudad, completed, direccion, telefono,
