import PropTypes from 'prop-types';
import './styles.scss';

const CardsReseñas = (props) => {
  const { reseñas } = props;

  return (
    <div className="review-cards">
      {reseñas.map((e) => (
        <div className="review-card" id={e.id} key={`id-${e.id}`}>
          <div className="review-card__comment">
            <h3>{e.title}</h3>
            <p>{e.info}</p>
          </div>
          <div className="review-card__client">
            <div className="review-card__picture">
              <img src={e.img} alt={e.id} />
            </div>
            <div className="review-card__name">
              <h4>{e.client}</h4>
            </div>
          </div>
        </div>
      ))}
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
