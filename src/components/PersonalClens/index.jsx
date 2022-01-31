import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsFromDB } from '../../store/actions';
import MinititleTitle from '../MinititleTitle';
import PersonalCard from './PersonalClensCard';

const PersonalReviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getReviews = async () => {
      if (reviews === null) {
        await getReviewsFromDB(dispatch);
      }
    };
    getReviews();
  }, []);

  return (
    <section className="personal-reviews">
      <MinititleTitle
        title="Nuestro Personal CLENS es el mejor en el campo de limpieza"
        minititle="Personal"
      />
      <PersonalCard personal={user} />
    </section>
  );
};

export default PersonalReviews;
