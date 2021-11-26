import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../img/logo-clens.jpg';
import cart from '../../img/icons/cart.svg';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <Link to="/">
        <img className="header__img" src={logo} alt="logo-clens" />
      </Link>
    </div>
    <div className="header__btn-menu" id="btn-menu-id">
      <div className="header__btn-menu--1" />
      <div className="header__btn-menu--2" />
      <div className="header__btn-menu--3" />
    </div>
    <div className="header__menu" id="menu-id">
      <Link className="header__a" to="/why-us">
        ¿Por qué nosotros?
      </Link>
      <Link className="header__a" to="/services">
        Servicios
      </Link>
      <Link className="header__a" to="/personal">
        Personal
      </Link>
      <Link className="header__a" to="/reseñas">
        Reseñas
      </Link>
      <Link className="header__a" to="/cotiza">
        Cotiza
      </Link>
      <Link className="header__a" to="/postula">
        Postula
      </Link>
      <Link className="header__a" to="./register">
        Registrate
      </Link>
      <Link className="header__a" to="./login">
        Ingresa
      </Link>
    </div>
    <div className="header__perfil" id="menu-perfil">
      <Link className="header__perfil__a" to="/info-cuenta">
        Mi Perfil
      </Link>
      <Link className="header__perfil__a" to="/mis-servicios">
        Mis servicios
      </Link>
      <Link className="header__perfil__a" to="/mi-historial">
        Mi historial
      </Link>
      <Link className="header__perfil__a" to="/mi-carrito">
        Mi carrito
      </Link>
      <Link className="header__perfil__a" to="/">
        Cerrar sesion
      </Link>
    </div>
    <div className="header__user">
      <div className="header__cart">
        <img className="header__icon" src={cart} alt="carrito-compras" />
      </div>
      <img
        className="header__picture"
        src="https://randomuser.me/api/portraits/women/40.jpg"
        alt="foto-usuario"
        id="perfil"
      />
    </div>
  </header>
);

export default Header;
