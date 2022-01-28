import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const MisServicios = () => {
  const user = useSelector((state) => state.user);

  return (
    <section className="my-services-wrapper">
      <h2 className="my-services-wrapper__user-name">
        Hola <span>{user?.fullname.toUpperCase()}</span>, estos son tus
        servicios:
      </h2>
      <section className="my-services-wrapper__grid-container">
        <article className="my-services-wrapper__grid-container-services-assigned">
          <h2>Servicios Asignados</h2>
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
