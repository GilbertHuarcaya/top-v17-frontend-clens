/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../../store/actions';

import './styles.scss';

const MisServicios = () => {
  const user = useSelector((state) => state.user);
  // const services = useSelector((state) => state);
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);

  useEffect(() => {
    const getAllOrdersFromDB = () => {
      getAllOrders(dispatch);
    };
    getAllOrdersFromDB();
  }, []);

  const filteredServices = allOrders?.filter((order) => {
    return order.clensId === user?.id;
  });

  const filterCompleted = filteredServices.filter(
    (service) => service.completed === true,
  );

  // console.log(filterCompleted);
  const filtroDinero = filterCompleted.map((service) => service.precio);
  const dineroProducido = filtroDinero.reduce((a, b) => a + b, 0);

  return (
    <section className="my-services-wrapper">
      <h2 className="my-services-wrapper__user-name">
        Hola <span>{user?.fullname.toUpperCase()}</span>, estos son tus
        servicios:
      </h2>
      <section className="my-services-wrapper__grid-container">
        <article className="my-services-wrapper__grid-container-services-assigned">
          <h2>Servicios Asignados</h2>
          {filteredServices.length > 0 ? (
            filteredServices?.map(
              ({
                ciudad,
                distrito,
                direccion,
                horaLlegada,
                incluirProductos,
                ingresoAlLugar,
                nombre,
                telefono,
                fecha,
                completed,
                service,
              }) => {
                return !completed ? (
                  <ul
                    className="my-services-wrapper__grid-container-services-assigned__my-service-description"
                    key={Math.random()}
                  >
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>Ciudad: </span> {ciudad}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>distrito: </span> {distrito}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>direccion: </span>
                      {direccion}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>horaLlegada:</span>
                      {horaLlegada}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>incluirProductos: </span>
                      {incluirProductos}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>nombre: </span>
                      {nombre}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>ingresoAlLugar: </span>
                      {ingresoAlLugar}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>telefono: </span>
                      {telefono}
                    </li>
                    <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                      <span>fecha: </span>
                      {fecha.date}
                    </li>
                    {service?.length < 2 ? (
                      <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                        <span>SERVICIO</span>
                      </li>
                    ) : (
                      <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                        <span>SERVICIOS</span>
                        {fecha.date}
                      </li>
                    )}
                    {service.map((s) => {
                      return (
                        <li
                          className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail"
                          key={s._id}
                        >
                          <span>Servicio: </span>
                          <span>{s.name} </span>
                          <span>Cantidad: </span>
                          <span>{s.cantidad}: </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : null;
              },
            )
          ) : (
            <h3>No tienes servicios asignados.</h3>
          )}
        </article>
        <article className="my-services-wrapper__grid-container-services-finished">
          <h2>Servicios Terminados</h2>
          {filteredServices.length > 0 ? (
            filteredServices?.map(({ nombre, completed, precio }) => {
              return completed ? (
                <ul
                  className="my-services-wrapper__grid-container-services-assigned__my-service-description"
                  key={precio * Math.random()}
                >
                  <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                    <span>Nombre: </span> {nombre}
                  </li>
                  <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                    <span>Estado: </span>
                    {completed ? 'Servicio Completado' : 'Sin Completar'}
                  </li>
                  <li className="my-services-wrapper__grid-container-services-assigned__my-service-description--detail">
                    <span>Costo servicio: </span>
                    {precio}
                  </li>
                </ul>
              ) : null;
            })
          ) : (
            <h2>Aun no hay servicios terminados</h2>
          )}
          ;
        </article>
        <article className="my-services-wrapper__grid-container__benefits-earned">
          <h2>Dinero Ganado</h2>
          <ul className="my-services-wrapper__grid-container__benefits-earned__description-wrapper">
            <li
              key={Math.random() * 4}
              className="my-services-wrapper__grid-container__benefits-earned__description-wrapper--item"
            >
              Servicios Asignados
              <br />
              <span>{filteredServices.length}</span>
            </li>
            <li
              key={Math.random() * 5}
              className="my-services-wrapper__grid-container__benefits-earned__description-wrapper--item"
            >
              Servicios sin Terminar
              <br />
              <span>{filteredServices.length - filterCompleted.length}</span>
            </li>
            <li
              key={Math.random() * 6}
              className="my-services-wrapper__grid-container__benefits-earned__description-wrapper--item"
            >
              Servicios Terminados
              <br />
              <span>{filterCompleted.length}</span>
            </li>
            <li
              key={Math.random() * 7}
              className="my-services-wrapper__grid-container__benefits-earned__description-wrapper--item"
            >
              Dinero Producido
              <br />
              <span>{`$${dineroProducido}`}</span>
            </li>
            <li
              key={Math.random() * 8}
              className="my-services-wrapper__grid-container__benefits-earned__description-wrapper--item"
            >
              Comision Clens
              <br />
              <span>{`$${(dineroProducido * 10) / 100}`}</span>
            </li>
            <li
              key={Math.random() * 9}
              className="my-services-wrapper__grid-container__benefits-earned__description-wrapper--item"
            >
              Total Ganado
              <br />
              <span>{`$${dineroProducido -
                (dineroProducido * 10) / 100}`}</span>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default MisServicios;
