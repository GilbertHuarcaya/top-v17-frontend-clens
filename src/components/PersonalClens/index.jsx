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
    <>
      {' '}
      <section className="hero-section">
        <h2 className="hero-section__title">
          Limpiadores a su disposicion, listos para darle una nueva cara a su
          hogar.
        </h2>
        <p className="hero-section__information">
          Limpiadores experimentados. Todo gestionado online. El servicio
          doméstico que funciona.
        </p>
      </section>
      <section className="personal-reviews">
        <MinititleTitle
          title="Nuestro personal es el mejor en el campo de limpieza"
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
    </>
  );
};

export default PersonalReviews;
