import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserFromLocalStorage, logout } from '../../store/actions';

import Loader from '../Loader';
import './Header.scss';
import logo from '../../img/logo-clens.jpg';

const Header = () => {
  const user = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleClassBtnMenu, setToggleCLassBtn] = useState('false');
  const [toggleClassBtnUser, setToggleCLassBtnUser] = useState('false');
  const [toggleClassBtnCart, setToggleClassBtnCart] = useState('false');

  /* url Actual */
  const url = window.location.pathname.split('/').pop();

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos !== currentScrollPos) {
      setToggleCLassBtn(true);
      setToggleCLassBtnUser(true);
    }
    prevScrollpos = currentScrollPos;
  };
  /* Cerrar los menu al cambiar de url */
  useEffect(() => {
    setToggleCLassBtnUser(true);
    setToggleClassBtnCart(true);
    setToggleCLassBtn(true);
    window.scrollTo(0, 0);
  }, [url]);

  useEffect(() => {
    const getUser = () => {
      getUserFromLocalStorage(dispatch);
    };
    if (user === null) {
      getUser();
    }
  }, []);

  const handleClick = () => {
    if (!toggleClassBtnMenu) return setToggleCLassBtn(true);
    setToggleCLassBtnUser(true);
    return setToggleCLassBtn(false);
  };
  const handlerMenuUser = () => {
    if (!toggleClassBtnUser) {
      return setToggleCLassBtnUser(true);
    }
    setToggleCLassBtn(true);
    return setToggleCLassBtnUser(false);
  };
  const handlerCart = () => {
    if (!toggleClassBtnCart) return setToggleClassBtnCart(true);
    return setToggleClassBtnCart(false);
  };

  const handleCloseSession = () => {
    logout(dispatch);
    navigate('/');
    handlerMenuUser();
  };

  let buttons;

  if (!isLoading) {
    buttons = user ? (
      <div className="header__user">
        <Link className="header__user__linkto-cart" to="/mi-carrito">
          <button
            className="header__user--cart"
            type="button"
            aria-label="foto-carrito"
            onClick={handlerCart}
          />
          {!isLoading ? (
            <span className="header__user--cart__quantity">{0}</span>
          ) : null}
        </Link>
        <button
          className="header__user--user"
          type="button"
          aria-label="foto-perfil"
          onClick={handlerMenuUser}
        />
      </div>
    ) : (
      <>
        <Link className="header__login" to="/login">
          Ingresa
        </Link>
        <Link className="header__register" to="/register">
          Registrate
        </Link>
      </>
    );
  } else {
    buttons = <Loader />;
  }

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__img" src={logo} alt="logo-clens" />
        </Link>
      </div>
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
        <Link className="header__a" to="/order/cotiza">
          Cotiza
        </Link>
        <Link className="header__a" to="/postula">
          Postula
        </Link>
      </div>
      {/* <div
        className={
          toggleClassBtnCart
            ? 'header__cart'
            : 'header__cart is-active-menu-cart'
        }
        id="menu-perfil"
      >
        <Link className="header__perfil__a" to="/mi-carrito">
          Ir al carrito
        </Link>
      </div> */}
      {buttons}
      {user ? (
        <div
          className={
            toggleClassBtnUser
              ? 'header__perfil'
              : 'header__perfil is-active-menu-perfil'
          }
          id="menu-perfil"
        >
          <Link
            onClick={handlerMenuUser}
            className="header__perfil__a"
            to="/info-cuenta"
          >
            Mi Perfil
          </Link>
          <Link
            onClick={handlerMenuUser}
            className="header__perfil__a"
            to="/mis-servicios"
          >
            Mis servicios
          </Link>
          <Link
            onClick={handlerMenuUser}
            className="header__perfil__a"
            to="/mi-historial"
          >
            Mi historial
          </Link>
          <Link
            onClick={handlerMenuUser}
            className="header__perfil__a"
            to="/mi-carrito"
          >
            Ir al carrito
          </Link>
          <Link
            onClick={handleCloseSession}
            type="button"
            className="header__perfil__a"
            to="/"
          >
            Cerrar sesion
          </Link>
        </div>
      ) : null}
      <button
        type="button"
        className={
          toggleClassBtnMenu
            ? 'header__btn-menu'
            : 'header__btn-menu change-menu'
        }
        id="btn-menu-id"
        onClick={handleClick}
      >
        <div className="header__btn-menu--1" />
        <div className="header__btn-menu--2" />
        <div className="header__btn-menu--3" />
      </button>
    </header>
  );
};

export default Header;
