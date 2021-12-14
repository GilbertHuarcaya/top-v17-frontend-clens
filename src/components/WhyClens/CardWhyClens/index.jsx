import React from 'react';
import './styles.scss';
// import MinititleTitle from '../MinititleTitle';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const CardWhyClens = ({ title, description, img }) => {
  return (
    <section className="Wrapper-whyClens">
      <div className="Wrapper-whyClens__container">
        <figure className="Wrapper-whyClens__container--figure-container">
          <img src={img} alt={`${title}-imagen`} />
        </figure>
        <section className="Wrapper-whyClens__container__info">
          <div className="Wrapper-whyClens__container__info--title">
            <h2>{title}</h2>
          </div>
          <div className="Wrapper-whyClens__container__info--text">
            <p>{description}</p>
          </div>
        </section>
      </div>
    </section>
  );
};

// CardWhyClens.PropTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// };

export default CardWhyClens;
