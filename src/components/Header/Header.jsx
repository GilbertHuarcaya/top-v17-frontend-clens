import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.scss';
import logo from '../../img/logo-clens.jpg';

const Header = () => {
  const [toggleClassBtnMenu, setToggleCLassBtn] = useState('false');
  const [toggleClassBtnUser, setToggleCLassBtnUser] = useState('false');
  const handleClick = () => {
    if (!toggleClassBtnMenu) return setToggleCLassBtn(true);
    return setToggleCLassBtn(false);
  };
  const handlerMenuUser = () => {
    if (!toggleClassBtnUser) return setToggleCLassBtnUser(true);
    return setToggleCLassBtnUser(false);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__img" src={logo} alt="logo-clens" />
        </Link>
      </div>
      <button
        type="button"
        className="header__btn-menu"
        id="btn-menu-id"
        onClick={handleClick}
      >
        <div className="header__btn-menu--1" />
        <div className="header__btn-menu--2" />
        <div className="header__btn-menu--3" />
      </button>
      <div
        className={
          toggleClassBtnMenu ? 'header__menu' : 'header__menu is-active'
        }
        id="menu-id"
      >
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
      <div
        className={
          toggleClassBtnUser
            ? 'header__perfil'
            : 'header__perfil is-active-menu-perfil'
        }
        id="menu-perfil"
      >
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
        <button
          className="header__user--cart"
          type="button"
          aria-label="foto-carrito"
        />
        <button
          className="header__user--user"
          type="button"
          aria-label="foto-perfil"
          onClick={handlerMenuUser}
        />
      </div>
    </header>
  );
};

export default Header;
