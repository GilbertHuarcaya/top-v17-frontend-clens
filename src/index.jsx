import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import InfoCuenta from './components/InfoCuenta/InfoCuenta';
import Historial from './components/Historial/Historial';
import Postula from './components/Postula/Postula';
import Layout from './pages/Layout/Layout';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout unico  */}
        {/* <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}

        {/* Compartir layout */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="postula" element={<Postula />} />
          <Route path="info-cuenta" element={<InfoCuenta />} />
          <Route path="mi-historial" element={<Historial />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
