import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import PendingOrder from './components/PendingOrderCart';
import GoOrder from './components/GoOrder';
import Cotiza from './components/GoOrder/Cotiza';
import OrderTime from './components/GoOrder/OrderTime';
import OrderDetails from './components/GoOrder/OrderDetails';
import RegisterSuccess from './components/RegisterSuccess';
import Pay from './components/GoOrder/Pay';
import ScrollToTop from './hooks/ScrollToTop';
import MiPerfil from './components/InfoCuenta/MiPerfil';
import NewPassword from './components/InfoCuenta/ChangePassword';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ValidationEmail from './components/ValidationEmail';
import MisServicios from './components/MisServicios';
import AdministratorPanel from './components/AdministradorPanel';
import PersonalDisponibility from './components/PersonalDisponibility';
import PersonalClens from './components/PersonalClens';
import './index.scss';

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="postula" element={<Postula />} />
            <Route path="personal" element={<PersonalClens />} />
            <Route
              path="disponibilidad"
              element={
                user?.role === 'personal' ? (
                  <PersonalDisponibility />
                ) : (
                  <Navigate push to="/" />
                )
              }
            />
            <Route path="services" element={<Services />} />
            <Route
              path="/panel-administrador"
              element={
                user?.role === 'admin' ? (
                  <AdministratorPanel />
                ) : (
                  <Navigate push to="/" />
                )
              }
            />
            <Route
              path="/mis-servicios"
              element={
                user?.role === 'personal' ? (
                  <MisServicios />
                ) : (
                  <Navigate push to="/" />
                )
              }
            />
            <Route path="/mi-perfil/" element={<InfoCuenta />}>
              <Route path="" element={<MiPerfil />} />
              <Route path="cambio-contrasena" element={<NewPassword />} />
            </Route>
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
          <Route path="/forgot-password" element={<ForgotPassword />} />;
          <Route
            path="/validation-email/:userToken"
            element={<ValidationEmail />}
          />
          <Route
            path="/reset-password/:userToken"
            element={<ResetPassword />}
          />
          ;
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default App;
