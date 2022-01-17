import PropTypes from 'prop-types';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

const Wrapper = (props) => {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
};
Wrapper.defaultProps = {
  children: () => {},
};

test('should renders a name', () => {
  const renderWithRouter = (ui) => {
    return render(ui, { wrapper: Wrapper });
  };
  renderWithRouter(<Footer />);

  const servicios = screen.getByText(/servicios/i);
  expect(servicios).toBeDefined();

  const empresa = screen.getByText(/empresa/i);
  expect(empresa).toBeDefined();

  const soporte = screen.getByText(/soporte/i);
  expect(soporte).toBeDefined();

  const contáctenos = screen.getByText(/contáctenos/i);
  expect(contáctenos).toBeDefined();

  const nuestrasRedes = screen.getByText(/nuestras redes/i);
  expect(nuestrasRedes).toBeDefined();
});
