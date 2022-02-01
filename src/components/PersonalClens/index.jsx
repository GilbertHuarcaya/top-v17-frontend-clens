import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsFromDB, getAllRolePersonal } from '../../store/actions';
import MinititleTitle from '../MinititleTitle';
import PersonalCard from './PersonalClensCard';
import './styles.scss';

const PersonalReviews = () => {
  const dispatch = useDispatch();
  const rolePersonal = useSelector((state) => state.rolePersonal);
  useEffect(() => {
    const getReviews = async () => {
      await getReviewsFromDB(dispatch);
    };
    const getAllRolePersonalFromDB = () => {
      getAllRolePersonal(dispatch);
    };

    getAllRolePersonalFromDB();
    getReviews();
  }, []);

  return (
    <section className="personal-reviews">
      <MinititleTitle
        title="Nuestros son los mejores en el campo de limpieza"
        minititle="Personal"
      />
      {rolePersonal ? (
        rolePersonal.map((personalClens) => {
          return (
            <PersonalCard personal={personalClens} key={personalClens.id} />
          );
        })
      ) : (
        <h1>Espere un momoento</h1>
      )}
    </section>
  );
};

export default PersonalReviews;
