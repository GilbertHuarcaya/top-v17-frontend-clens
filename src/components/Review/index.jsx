import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import {
  postUserReview,
  patchUserOrder,
  getUserOrdersFromDB,
} from '../../store/actions';
import useForm from '../../hooks/useForm';
import './styles.scss';

// eslint-disable-next-line react/prop-types
const Review = ({ reviewOrder }) => {
  const [reviewRating, setReviewRating] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  let prefilledForm = {};
  if (user) {
    prefilledForm = {
      userId: user.id,
      userName: user.userName,
      userPhoto: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * (100 - 1 + 1) + 1,
      )}.jpg`,
    };
  } else {
    prefilledForm = {};
  }
  const { form, handleChange } = useForm(prefilledForm);
  const [formOk, setFormOk] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      try {
        if (form.comentario && reviewRating > 0) {
          setFormOk(true);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    validateForm();
  }, [handleChange]);

  const proceedToReviewOrder = async (order) => {
    // eslint-disable-next-line no-console
    await patchUserOrder(dispatch, { ...order, reviewed: true });
    await getUserOrdersFromDB(dispatch, user.id);
  };

  const handleRating = (rate) => {
    setReviewRating(rate);
    // other logic
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postUserReview(dispatch, { ...form, rating: reviewRating });
    proceedToReviewOrder(reviewOrder);
  };
  return (
    <div className="review">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Comentario
            <div className="slot">
              <textarea
                className="input-text"
                name="comentario"
                onChange={handleChange}
                required
                type="text"
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <div className="control-label" htmlFor="email">
            Rating
            <div className="slot">
              <Rating
                onClick={handleRating}
                ratingValue={reviewRating} /* Available Props */
              />
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary"
          id="btn-continue"
          disabled={!formOk}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Review;
