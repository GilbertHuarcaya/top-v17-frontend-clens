/* eslint-disable no-restricted-globals */
import { Outlet, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import './styles.scss';

const GoOrder = () => {
  return (
    <>
      <Header />
      <div className="order">
        <div className="order__nav">
          <ul className="steps">
            <li>
              <NavLink to="/order/cotiza" className={`step ${'step-complete'}`}>
                <div className="step-bullet" />
                <span className="visible-inline">Cotizar</span>
                <span className="hidden">Cotiza tu orden</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/tiempo" className="step">
                <div className="step-bullet" />
                <span className="visible-inline">Tiempo</span>
                <span className="hidden">Escoge el tiempo</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/tu-info" className="step">
                <div className="step-bullet" />
                <span className="visible-inline">Info</span>
                <span className="hidden">Tu Información</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/pago" className="step">
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
              <p>4 servicios</p>
              <p>+ $200.00</p>
            </div>

            <div className="order__resumen__info">
              <p>2 Horas por servicio</p>
              <p>+ $29.99</p>
            </div>

            <div className="order__resumen__info">
              <p>Incluir productos</p>
              <p>+ $10.00</p>
            </div>
            <div className="order__resumen__price">
              <p>Total</p>
              <p>$239.99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoOrder;
