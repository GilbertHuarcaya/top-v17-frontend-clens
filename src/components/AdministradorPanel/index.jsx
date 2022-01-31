import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, getAllRolePersonal } from '../../store/actions';
import ShowInfoOrder from './showInfoORder';
import './styles.scss';
// import PropTypes from 'prop-types';

const AdministratorPanel = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);
  const RolePersonal = useSelector((state) => state);
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
        {allOrders.map((order) => (
          <li key={Math.random()}>{ShowInfoOrder(order, RolePersonal)}</li>
        ))}
      </section>
    </>
  );
};

// AdministratorPanel.propTypes = {// };

export default AdministratorPanel;
