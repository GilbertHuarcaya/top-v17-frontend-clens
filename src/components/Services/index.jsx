import React from 'react';
import HowItWorks from '../HowItWorks';
import WhyClens from '../WhyClens';
import ServicesHome from '../ServicesHome';

const Services = () => {
  return (
    <>
      <section className="hero-section">
        <h2 className="hero-section__title">
          Servicio de limpieza de la casa diario, semanal y quincenal.
        </h2>
        <p className="hero-section__information">
          Limpiadores experimentados. Todo gestionado online. El servicio
          doméstico que funciona.
        </p>
      </section>
      <HowItWorks />
      <WhyClens />
      <ServicesHome />
    </>
  );
};

export default Services;
