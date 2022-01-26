import React from 'react';
import './styles.scss';

const MisServicios = () => {
  return (
    <section className="my-services-wrapper">
      <article className="my-services-wrapper__services-assigned">
        <h2>Servicios Asignados</h2>
      </article>
      <article className="my-services-wrapper__services-finished">
        <h2>Servicios Terminados</h2>
      </article>
      <article className="my-services-wrapper__benefits-earned">
        <h2>Dinero Ganado</h2>
      </article>
    </section>
  );
};

export default MisServicios;
