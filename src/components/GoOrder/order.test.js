import PropTypes from 'prop-types';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Order from './index';

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
  renderWithRouter(<Order />);

  const cotizar = screen.getAllByText(/cotizar/i);
  cotizar.forEach((e) => {
    expect(e).toBeInTheDocument();
  });
  const tiempo = screen.getAllByText(/tiempo/i);
  tiempo.forEach((e) => {
    expect(e).toBeInTheDocument();
  });

  const info = screen.getAllByText(/info/i);
  info.forEach((e) => {
    expect(e).toBeInTheDocument();
  });

  const pago = screen.getAllByText(/pago/i);
  pago.forEach((e) => {
    expect(e).toBeInTheDocument();
  });
});
