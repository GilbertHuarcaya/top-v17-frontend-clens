import { useEffect, useState } from 'react';
import './styles.scss';
import MinititleTitle from '../MinititleTitle';
import CardsReviews from './CardsReviews';
import { getAllReviews } from './reviews';

const ReviewsHome = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getAllReviews();
        setTimeout(() => {
          setReviews(data);
        }, 1000);
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
      {reviews.length > 0 ? (
        <CardsReviews reseñas={reviews} />
      ) : (
        <h1>Loading ...</h1>
      )}
    </section>
  );
};

export default ReviewsHome;
