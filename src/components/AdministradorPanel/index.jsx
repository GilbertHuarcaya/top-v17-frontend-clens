import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../../store/actions';
import ShowInfoOrder from './showInfoORder';
import './styles.scss';
// import PropTypes from 'prop-types';

const AdministratorPanel = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);
  console.log(allOrders);
  useEffect(() => {
    const getAllOrdersFromDB = () => {
      getAllOrders(dispatch);
    };
    getAllOrdersFromDB();
  }, []);

  return (
    <>
      <h2>Panel de administrador</h2>
      <section className="administrator-panel-wrapper">
        {allOrders.map((order) => (
          <li key={Math.random()}>{ShowInfoOrder(order)}</li>
        ))}
      </section>
    </>
  );
};

// AdministratorPanel.propTypes = {// };

export default AdministratorPanel;
