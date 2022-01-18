import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './InfoCuenta.scss';
import Loader from '../Loader';
import info from '../../img/info-cuenta.png';

const InfoCuenta = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="card--desktop">
      <div className="card">
        {user !== null ? <Outlet /> : <Loader />}
        <img className="info__img" src={info} alt="" />
      </div>
    </div>
  );
};

export default InfoCuenta;
