import { useEffect } from 'react';
import './styles.scss';
import MinititleTitle from '../MinititleTitle';
import CardsReviews from './CardsReviews';
import { getReviewsFromDB } from '../../context/actions';
import { useAppState, useAppDispatch } from '../../context/store';

const ReviewsHome = () => {
  const dispatch = useAppDispatch();
  const { reviews, isLoading } = useAppState();

  useEffect(() => {
    const getReviews = async () => {
      try {
        getReviewsFromDB(dispatch);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getReviews();
  }, []);

  return (
    <section className="reviews">
      <MinititleTitle
        title="Reseñas de nuestros clientes"
        minititle="Reseñas"
      />
      {!isLoading ? <CardsReviews reviews={reviews} /> : <h1>Loading ...</h1>}
    </section>
  );
};

export default ReviewsHome;
