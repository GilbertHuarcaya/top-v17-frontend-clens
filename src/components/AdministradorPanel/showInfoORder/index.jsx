/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asignPersonalToOrder, getAllOrders } from '../../../store/actions';
import useForm from '../../../hooks/useForm';
import './styles.scss';
// import PropTypes from 'prop-types';

const ShowInfoOrder = ({ order, rolePersonal }) => {
  const {
    userName,
    ciudad,
    completed,
    direccion,
    telefono,
    _id,
    fecha,
  } = order;

  const dispatch = useDispatch();
  let prefilledForm = {};
  if (rolePersonal) {
    prefilledForm = {
      _id,
    };
  }
  const { form, handleChange } = useForm(prefilledForm);
  const [formOk, setFormOk] = useState(false);
  const [personalName, setPersonalName] = useState({});

  const personalPerson = rolePersonal.find(
    (person) => person.id === order.clensId,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* loginUser(dispatch, form); */
    await asignPersonalToOrder(dispatch, form);
    await getAllOrders(dispatch);
  };
  useEffect(() => {
    const validateForm = () => {
      if (form.clensId) {
        const personal = rolePersonal.find(
          (person) => person.id === form.clensId,
        );
        setPersonalName(personal);
      }
      if (Object.keys(form)?.length >= 2) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  return (
    <>
      <h3>Fecha solicitada: {fecha?.date}</h3>
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
      {personalPerson?.userName ? (
        <h3>Servicio asignado a: {personalPerson?.userName}</h3>
      ) : null}
      <section className="asign-wrapper">
        {personalPerson?.userName ? (
          <h3>Cambiar personal asignado:</h3>
        ) : (
          <h3>Asignar servicio a:</h3>
        )}

        <form onSubmit={handleSubmit}>
          <select name="clensId" id="personal-id" onChange={handleChange}>
            <option value="default">
              {personalName?.userName || 'Elegir'}
            </option>
            {rolePersonal.map((person) => {
              return (
                <option key={Math.random()} value={person.id}>
                  {person.userName}
                </option>
              );
            })}
          </select>

          <button
            className="btn btn-primary"
            id="btn-continue"
            type="submit"
            disabled={!formOk}
          >
            Asignar
          </button>
        </form>
      </section>
    </>
  );
};

// ShowInfoOrder.propTypes = {
// };

export default ShowInfoOrder;

// ciudad, completed, direccion, telefono,
