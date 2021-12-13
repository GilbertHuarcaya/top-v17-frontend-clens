import React from 'react';
import TitleMinititle from '../TitleMinititleInfo';
import deepCleanImg from '../../img/cards/deep-clean.svg';
import desinfectionImg from '../../img/cards/desinfection.svg';
import laundringImg from '../../img/cards/laundring.svg';
import './styles.scss';

const PlansCards = () => {
  return (
    <section className="plan-cards">
      <TitleMinititle
        title="Con cualquiera de nuestros planes recibes la mejor y profesional atención"
        minititle="¿Qué incluye?"
      />
      <div className="plan-cards__wrapper-cards">
        <div className="plan-cards__wrapper-cards__card">
          <img
            className="plan-cards__wrapper-cards__card--img"
            src={deepCleanImg}
            alt="imagen-limpieza"
          />
          <h3 className="plan-cards__wrapper-cards__card--title">
            Limpieza a Profundidad
          </h3>
          <p className="plan-cards__wrapper-cards__card--description">
            Limpiamos cocinas, baños, habitaciones y zonas sociales.
          </p>
        </div>
        <div className="plan-cards__wrapper-cards__card">
          <img
            className="plan-cards__wrapper-cards__card--img"
            src={desinfectionImg}
            alt="imagen-desinfeccion"
          />
          <h3 className="plan-cards__wrapper-cards__card--title">
            Desinfección de puntos de alto contacto
          </h3>
          <p className="plan-cards__wrapper-cards__card--description">
            Desinfectamos baños, cocinas, electrodomésticos, manijas e
            interruptores.
          </p>
        </div>
        <div className="plan-cards__wrapper-cards__card">
          <img
            className="plan-cards__wrapper-cards__card--img"
            src={laundringImg}
            alt="imagen-lavanderia"
          />
          <h3 className="plan-cards__wrapper-cards__card--title">
            Lavado de Ropa
          </h3>
          <p className="plan-cards__wrapper-cards__card--description">
            Lavamos ropa a máquina o a mano según el tipo de prenda.
          </p>
        </div>
      </div>
      <div className="plan-cards__wrapper-prices">
        <div className=" plan-cards__wrapper-prices__price-card-1 ">
          <div className="plan-cards__wrapper-prices__price-card-1--title">
            2 HORAS
          </div>
          <div className="plan-cards__wrapper-prices__price-card-1--price">
            $20
          </div>
          <button
            className="plan-cards__wrapper-prices__price-card-1--button"
            type="button"
          >
            Agendar
          </button>
        </div>
        <div className="plan-cards__wrapper-prices__price-card-2">
          <div className="plan-cards__wrapper-prices__price-card-2--title">
            4 HORAS
          </div>
          <div className="plan-cards__wrapper-prices__price-card-2--price">
            $35
          </div>
          <button
            className="plan-cards__wrapper-prices__price-card-2--button"
            type="button"
          >
            Agendar
          </button>
        </div>
        <div className="plan-cards__wrapper-prices__price-card-3">
          <div className="plan-cards__wrapper-prices__price-card-3--title">
            6 HORAS
          </div>
          <div className="plan-cards__wrapper-prices__price-card-3--price">
            $50
          </div>
          <button
            className="plan-cards__wrapper-prices__price-card-3--button"
            type="button"
          >
            Agendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansCards;
