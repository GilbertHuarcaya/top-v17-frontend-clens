import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
// import PropTypes from 'prop-types';

const AdministratorPanel = () => {
  const allOrders = useSelector((state) => state.orders);
  console.log(allOrders);
  return (
    <section className="administrator-panel-wrapper">
      <h2>Panel de administrador</h2>
      {allOrders}
    </section>
  );
};

// AdministratorPanel.propTypes = {// };

export default AdministratorPanel;
