import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CardsReseñas = (props) => {
  const { reseñas } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const check = (index) => setSelectedIndex(index);

  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };
  const checkBefore = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex =
      selectedIndex === 0 ? labels.length - 1 : selectedIndex - 1;
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="review-cards" id="review-cards">
      <button
        className="review-cards__button-before"
        type="button"
        onClick={checkBefore}
      >
        {'<'}
      </button>
      <section id="slider">
        {reseñas.map((e) => (
          <input
            type="radio"
            name="slider"
            id={`s${e.reviewid}`}
            checked={selectedIndex === e.reviewid - 1}
            onClick={() => check(e.reviewid - 1)}
            key={`id--${e.reviewid}`}
          />
        ))}
        {reseñas.map((e) => (
          <label
            htmlFor={`s${e.reviewid}`}
            id={`slide${e.reviewid}`}
            className="review-card"
            key={`id-${e.reviewid}`}
          >
            <div className="review-card__comment">
              <h3>{e.title}</h3>
              <p>{e.info}</p>
            </div>
            <div className="review-card__client">
              <div className="review-card__picture">
                <img src={e.img} alt={e.reviewid} />
              </div>
              <div className="review-card__name">
                <h4>{e.client}</h4>
              </div>
            </div>
          </label>
        ))}
      </section>
      <button
        className="review-cards__button-next"
        type="button"
        onClick={checkNext}
      >
        {'>'}
      </button>
    </div>
  );
};

CardsReseñas.propTypes = {
  reseñas: PropTypes.arrayOf(PropTypes.object),
};

CardsReseñas.defaultProps = {
  reseñas: [],
};

export default CardsReseñas;
