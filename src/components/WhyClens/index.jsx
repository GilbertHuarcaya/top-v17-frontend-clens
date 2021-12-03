import React from 'react';
import CardWhyClens from '../CardWhyClens';
import MinititleTitle from '../MinititleTitle';
import './styles.scss';

const WhyClens = () => {
  return (
    <>
      <MinititleTitle title="¿Por qué elegir Clens?" />
      <section className="Why-Clens">
        <CardWhyClens
          title="Personal profesional"
          description="Todos nuestros colaboradores son amigables y confiables. Han sido examinados, verificados de antecedentes y calificados con 5 estrellas"
          img="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/design-tokens/images/housekeepers/window-washer.c0184b75b554.svg"
        />
        <CardWhyClens
          title="Sin contrato mínimo"
          description="Cuando reserva una limpieza semanal o quincenal periódica, puede cambiar su limpiador o cancelar sus limpiezas en cualquier momento"
          img="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/design-tokens/images/housekeepers/window-washer.c0184b75b554.svg"
        />
        <CardWhyClens
          title="Control online"
          description="Puede agregar visitas, omitir visitas, dejar notas y reservar servicios adicionales que incluyen planchado, lavandería, nevera y limpieza del horno."
          img="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/design-tokens/images/housekeepers/window-washer.c0184b75b554.svg"
        />
        <CardWhyClens
          title="Ofrecemos el mejor servicio"
          description="Puede agregar notas e instrucciones, darles instrucciones precisas de limpieza e incluso chatear con ellos directamente usando nuestra aplicación"
          img="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/design-tokens/images/housekeepers/window-washer.c0184b75b554.svg"
        />
      </section>
    </>
  );
};

export default WhyClens;
