/* eslint-disable no-restricted-globals */
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import './styles.scss';

const GoOrder = () => {
  const {
    cocina,
    habitacion,
    sala,
    baño,
    horasPorServicio,
    incluirProductos,
    horaLlegada,
    ciudad,
    CVC,
  } = useSelector((state) => state.orderDetails);
  const orderDetails = useSelector((state) => state.orderDetails);

  const TotalServicios =
    (cocina === undefined ? 0 : Number(cocina)) +
    (habitacion === undefined ? 0 : Number(habitacion)) +
    (baño === undefined ? 0 : Number(baño)) +
    (sala === undefined ? 0 : Number(sala));

  const precioPorServicios = TotalServicios * 50;

  const precioPorTiempoServicio = horasPorServicio
    ? (TotalServicios * horasPorServicio) / 5
    : 0;
  const precioPorProductoIncluido = incluirProductos === 'si' ? 10 : 0;

  const Total = (
    precioPorTiempoServicio +
    precioPorProductoIncluido +
    precioPorServicios
  ).toFixed(2);

  return (
    <>
      <Header />
      <div className="order">
        <div className="order__nav">
          <ul className="steps">
            <li>
              <NavLink
                to="/order/cotiza"
                className={`step ${
                  Object.keys(orderDetails).length >= 4 ? 'step-complete' : null
                }`}
              >
                <div className="step-bullet" />
                <span className="visible-inline">Cotizar</span>
                <span className="hidden">Cotiza tu orden</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/tiempo"
                className={`step ${horaLlegada ? 'step-complete' : null}`}
              >
                <div className="step-bullet" />
                <span className="visible-inline">Tiempo</span>
                <span className="hidden">Escoge el tiempo</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/tu-info"
                className={`step ${ciudad ? 'step-complete' : null}`}
              >
                <div className="step-bullet" />
                <span className="visible-inline">Info</span>
                <span className="hidden">Tu Información</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/pago"
                className={`step ${CVC ? 'step-complete' : null}`}
              >
                <span className="step-bullet" />
                <span className="visible-inline">Pago</span>
                <span className="hidden">Pago</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="order__container">
          <div className="order__form">
            <Outlet />
          </div>
          <div className="order__resumen">
            <h3 className="order__resumen__title">Resumen</h3>

            <div className="order__resumen__info">
              <p>{TotalServicios} servicios</p>
              <p>+ ${precioPorServicios.toFixed(2)}</p>
            </div>

            {horasPorServicio ? (
              <div className="order__resumen__info">
                <p>{horasPorServicio} Horas por servicio</p>
                <p>+ ${precioPorTiempoServicio.toFixed(2)}</p>
              </div>
            ) : null}
            {incluirProductos === 'si' ? (
              <div className="order__resumen__info">
                <p>Incluir productos</p>
                <p>+ $10.00</p>
              </div>
            ) : null}

            <div className="order__resumen__price">
              <p>Total</p>
              <p>${Total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoOrder;
