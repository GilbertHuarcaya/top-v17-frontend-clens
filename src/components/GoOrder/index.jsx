/* eslint-disable no-restricted-globals */
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import './styles.scss';

const GoOrder = () => {
  const {
    precio,
    service,
    horasPorServicio,
    incluirProductos,
    horaLlegada,
    ciudad,
    CVC,
  } = useSelector((state) => state.orderDetails);
  const orderDetails = useSelector((state) => state.orderDetails);

  let TotalServicios = 0;
  let precioPorServicios = 0;
  if (service) {
    if (service.length > 0) {
      service.forEach((e) => {
        TotalServicios += Number(e.cantidad);
        precioPorServicios += e.precio * Number(e.cantidad);
      });
    }
  }
  const precioPorTiempoServicio = horasPorServicio
    ? (precioPorServicios * horasPorServicio) / 10
    : 0;

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
              <p>${precio}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoOrder;
