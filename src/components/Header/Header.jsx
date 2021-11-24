import './Header.scss';
import logo from '../../img/logo-clens.jpg';
import cart from '../../img/icons/cart.svg';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <a href="https://alonsogaray.github.io/">
        <img className="header__img" src={logo} alt="logo-clens" />
      </a>
    </div>
    <div className="header__btn-menu" id="btn-menu-id">
      <div className="header__btn-menu--1" />
      <div className="header__btn-menu--2" />
      <div className="header__btn-menu--3" />
    </div>
    <div className="header__menu" id="menu-id">
      <a className="header__a" href="https://alonsogaray.github.io/">¿Por qué nosotros?</a>
      <a className="header__a" href="https://alonsogaray.github.io/">Servicios</a>
      <a className="header__a" href="https://alonsogaray.github.io/">Personal</a>
      <a className="header__a" href="https://alonsogaray.github.io/">Reseñas</a>
      <a className="header__a" href="https://alonsogaray.github.io/">Cotiza</a>
      <a className="header__a" href="https://alonsogaray.github.io/">Postula</a>
      <a className="header__a" href="./register.html">Registrate</a>
      <a className="header__a" href="./login.html">Ingresa</a>
    </div>
    <div className="header__perfil" id="menu-perfil">
      <a className="header__perfil__a" href="./info-cuenta.html">Mi Perfil</a>
      <a className="header__perfil__a" href="https://alonsogaray.github.io/">Mis servicios</a>
      <a className="header__perfil__a" href="https://alonsogaray.github.io/">Mi historial</a>
      <a className="header__perfil__a" href="https://alonsogaray.github.io/">Mi carrito</a>
      <a className="header__perfil__a" href="./index.html">Cerrar sesion</a>
    </div>
    <div className="header__user">
      <div className="header__cart">
        <img className="header__icon" src={cart} alt="carrito-compras" />
      </div>
      <img className="header__picture" src="https://randomuser.me/api/portraits/women/40.jpg" alt="foto-usuario" id="perfil" />
    </div>
  </header>
);

export default Header;
