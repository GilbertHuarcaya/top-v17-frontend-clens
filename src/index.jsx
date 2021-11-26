import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Account from './pages/Account/Account';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Login />
    <Home />
    <Account />
    <Register />
  </React.StrictMode>,
  document.getElementById('root'),
);
