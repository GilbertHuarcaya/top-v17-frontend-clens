import PropTypes from 'prop-types';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import InfoCuenta from './InfoCuenta';

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
  renderWithRouter(<InfoCuenta />);
});
