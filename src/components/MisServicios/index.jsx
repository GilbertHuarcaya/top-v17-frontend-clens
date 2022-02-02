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
              }) => {
                return (
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
                  </ul>
                );
              },
            )
          ) : (
            <h3>No tienes servicios asignados.</h3>
          )}
        </article>
        <article className="my-services-wrapper__grid-container-services-finished">
          <h2>Servicios Terminados</h2>
        </article>
        <article className="my-services-wrapper__grid-container-benefits-earned">
          <h2>Dinero Ganado</h2>
        </article>
      </section>
    </section>
  );
};

export default MisServicios;
