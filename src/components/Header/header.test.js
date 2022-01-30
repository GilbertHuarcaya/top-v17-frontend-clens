import PropTypes from 'prop-types';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from './Header';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};
Wrapper.defaultProps = {
  children: () => {},
};

test('should render navbar', () => {
  const renderWithRouter = (ui) => {
    return render(ui, { wrapper: Wrapper });
  };
  renderWithRouter(<Header />);

  const Servicios = screen.getByText(/Servicios/i);
  expect(Servicios).toBeDefined();
  const Personal = screen.getByText(/Personal/i);
  expect(Personal).toBeDefined();
  const Reseñas = screen.getByText(/Reseñas/i);
  expect(Reseñas).toBeDefined();
  const Cotiza = screen.getByText(/Cotiza/i);
  expect(Cotiza).toBeDefined();
  const Postula = screen.getByText(/Postula/i);
  expect(Postula).toBeDefined();
  const login = screen.getByText(/Ingresa/i);
  expect(login).toBeDefined();
});
