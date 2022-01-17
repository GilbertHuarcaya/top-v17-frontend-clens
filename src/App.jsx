import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import InfoCuenta from './components/InfoCuenta/InfoCuenta';
import Historial from './components/Historial/Historial';
import Resumen from './components/Historial/Resumen';
import Postula from './components/Postula/Postula';
import Layout from './pages/Layout/Layout';
import Services from './components/Services';
import Page404 from './pages/Page404';
import PendingOrder from './components/PendingOrder';
import GoOrder from './components/GoOrder';
import Cotiza from './components/GoOrder/Cotiza';
import OrderTime from './components/GoOrder/OrderTime';
import OrderDetails from './components/GoOrder/OrderDetails';
import RegisterSuccess from './components/RegisterSuccess';
import Pay from './components/GoOrder/Pay';

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
        <Route path="mi-historial/:id" element={<Resumen />} />
        <Route path="mi-carrito" element={<PendingOrder />} />
      </Route>
      <Route path="/order/" element={<GoOrder />}>
        <Route path="cotiza" element={<Cotiza />} />
        <Route path="tiempo" element={<OrderTime />} />
        <Route path="tu-info" element={<OrderDetails />} />
        <Route path="pago" element={<Pay />} />
      </Route>
      <Route path="*" element={<Page404 />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
    </Routes>
  </BrowserRouter>
);

export default App;
