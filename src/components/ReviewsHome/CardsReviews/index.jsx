import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';
import './styles.scss';

const CardsReviews = (props) => {
  const { reviews } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [review, setReview] = useState({});

  const checkNext = () => {
    const nextIndex =
      selectedIndex === reviews.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };
  const checkBefore = () => {
    const nextIndex =
      selectedIndex === 0 ? reviews.length - 1 : selectedIndex - 1;
    setSelectedIndex(nextIndex);
  };

  useEffect(() => {
    const showReview = () => {
      try {
        if (reviews) {
          setReview(reviews[selectedIndex]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    showReview();
  }, [selectedIndex]);

  return (
    <div className="review-cards" id="review-cards">
      {review ? (
        <div className="review-card">
          <button
            className="review-cards__button-before"
            type="button"
            onClick={checkBefore}
          >
            {'<'}
          </button>
          <div className="review-card__comment">
            <p>{review.comentario}</p>
            <p className="rate">
              <Rating size="3rem" ratingValue={review.rating} readonly />
            </p>
          </div>
          <div className="review-card__client">
            <div className="review-card__picture">
              <img src={review.userPhoto} alt={review.userid} />
            </div>
            <div className="review-card__name">
              <h4>{review.userName}</h4>
            </div>
          </div>
          <button
            className="review-cards__button-next"
            type="button"
            onClick={checkNext}
          >
            {'>'}
          </button>
        </div>
      ) : null}
    </div>
  );
};

CardsReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

CardsReviews.defaultProps = {
  reviews: [],
};

export default CardsReviews;
