import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import InfoCuenta from './components/InfoCuenta/InfoCuenta';
import Historial from './components/Historial/Historial';
import Postula from './components/Postula/Postula';
import Layout from './pages/Layout/Layout';
import Services from './components/Services';
import Page404 from './pages/Page404';
import Cart from './components/Cart';

import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="postula" element={<Postula />} />
        <Route path="info-cuenta" element={<InfoCuenta />} />
        <Route path="services" element={<Services />} />
        <Route path="mi-historial" element={<Historial />} />
        <Route path="mi-carrito" element={<Cart />} />
      </Route>
      <Route path="*" element={<Page404 />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;