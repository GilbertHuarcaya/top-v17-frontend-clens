import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsFromDB } from '../../store/actions';
import './styles.scss';
import Loader from '../Loader';
import MinititleTitle from '../MinititleTitle';
import CardsReviews from './CardsReviews';

const ReviewsHome = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    const getReviews = async () => {
      await getReviewsFromDB(dispatch);
    };
    getReviews();
  }, []);

  return (
    <section className="reviews">
      <MinititleTitle
        title="Reseñas de nuestros clientes"
        minititle="Reseñas"
      />
      {!isLoading ? <CardsReviews reviews={reviews} /> : <Loader />}
    </section>
  );
};

export default ReviewsHome;
