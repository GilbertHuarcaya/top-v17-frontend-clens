/* eslint-disable no-restricted-globals */
import { Outlet, NavLink } from 'react-router-dom';
import { useAppState } from '../../context/store';

import Header from '../Header/Header';
import './styles.scss';

const GoOrder = () => {
  const { orderCotizada, orderDetalles, orderTiempo, orderPago } =
    useAppState();

  const precioPorServicios =
    ((orderCotizada.cocina === undefined ? 0 : Number(orderCotizada.cocina)) +
      (orderCotizada.habitacion === undefined
        ? 0
        : Number(orderCotizada.habitacion)) +
      (orderCotizada.baño === undefined ? 0 : Number(orderCotizada.baño)) +
      (orderCotizada.sala === undefined ? 0 : Number(orderCotizada.sala))) *
    50;

  const precioPorTiempoServicio = orderCotizada.servicesHours
    ? (((orderCotizada.cocina === undefined
        ? 0
        : Number(orderCotizada.cocina)) +
        (orderCotizada.habitacion === undefined
          ? 0
          : Number(orderCotizada.habitacion)) +
        (orderCotizada.baño === undefined ? 0 : Number(orderCotizada.baño)) +
        (orderCotizada.sala === undefined ? 0 : Number(orderCotizada.sala))) *
        orderCotizada.servicesHours) /
      5
    : 0;
  const precioPorProductoIncluido =
    orderCotizada.incluirProductos === 'si' ? 10 : 0;

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
                  Object.keys(orderCotizada).length >= 4
                    ? 'step-complete'
                    : null
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
                className={`step ${orderTiempo ? 'step-complete' : null}`}
              >
                <div className="step-bullet" />
                <span className="visible-inline">Tiempo</span>
                <span className="hidden">Escoge el tiempo</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/tu-info"
                className={`step ${orderDetalles ? 'step-complete' : null}`}
              >
                <div className="step-bullet" />
                <span className="visible-inline">Info</span>
                <span className="hidden">Tu Información</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/pago"
                className={`step ${orderPago ? 'step-complete' : null}`}
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
              <p>
                {(orderCotizada.cocina === undefined
                  ? 0
                  : Number(orderCotizada.cocina)) +
                  (orderCotizada.habitacion === undefined
                    ? 0
                    : Number(orderCotizada.habitacion)) +
                  (orderCotizada.baño === undefined
                    ? 0
                    : Number(orderCotizada.baño)) +
                  (orderCotizada.sala === undefined
                    ? 0
                    : Number(orderCotizada.sala))}{' '}
                servicios
              </p>
              <p>+ ${precioPorServicios.toFixed(2)}</p>
            </div>

            {orderCotizada.servicesHours ? (
              <div className="order__resumen__info">
                <p>{orderCotizada.servicesHours} Horas por servicio</p>
                <p>+ ${precioPorTiempoServicio.toFixed(2)}</p>
              </div>
            ) : null}
            {orderCotizada.incluirProductos === 'true' ? (
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
