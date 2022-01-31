import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, getAllRolePersonal } from '../../store/actions';
import ShowInfoOrder from './showInfoORder';
import './styles.scss';
// import PropTypes from 'prop-types';

const AdministratorPanel = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);
  const rolePersonal = useSelector((state) => state.rolePersonal);

  useEffect(() => {
    const getAllOrdersFromDB = () => {
      getAllOrders(dispatch);
    };
    const getAllRolePersonalFromDB = () => {
      getAllRolePersonal(dispatch);
    };
    getAllOrdersFromDB();
    getAllRolePersonalFromDB();
  }, []);

  return (
    <>
      <h2>Panel de administrador</h2>
      <section className="administrator-panel-wrapper">
        {allOrders && rolePersonal
          ? allOrders
              .filter((e) => e.completed === false)
              .map((order) => (
                <div key={Math.random()}>
                  <ShowInfoOrder order={order} rolePersonal={rolePersonal} />
                </div>
              ))
          : null}
      </section>
    </>
  );
};

// AdministratorPanel.propTypes = {// };

export default AdministratorPanel;
