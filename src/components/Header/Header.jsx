import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import {
  getUserFromLocalStorage,
  logout,
  getUserOrdersFromDB,
  getPendingOrderFromOrders,
  getPendingReviewFromOrders,
  getAllRolePersonal,
} from '../../store/actions';

import Loader from '../Loader';
import './Header.scss';
import logo from '../../img/logo-clens.jpg';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;

const Header = () => {
  const user = useSelector((state) => state.user);
  const userOrders = useSelector((state) => state.userOrders);
  const userPendingOrders = useSelector((state) => state.userPendingOrders);
  const isLoading = useSelector((state) => state.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [toggleClassBtnMenu, setToggleCLassBtn] = useState('false');
  const [toggleClassBtnUser, setToggleCLassBtnUser] = useState('false');
  const [toggleClassBtnCart, setToggleClassBtnCart] = useState('false');

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos !== currentScrollPos) {
      setToggleCLassBtn(true);
      setToggleCLassBtnUser(true);
    }
    prevScrollpos = currentScrollPos;
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });

  /* Cerrar los menu al cambiar de url */
  useEffect(() => {
    setToggleCLassBtnUser(true);
    setToggleClassBtnCart(true);
    setToggleCLassBtn(true);
  }, [location]);

  useEffect(() => {
    const getUser = async () => {
      await getUserFromLocalStorage(dispatch);
      await getAllRolePersonal(dispatch);
    };
    if (user === null) {
      getUser();
    }
  }, []);

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        if (userOrders && user) {
          await getUserOrdersFromDB(dispatch, user.id);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getUserOrders();
  }, [user]);

  useEffect(() => {
    const getPendingOrder = () => {
      getPendingOrderFromOrders(dispatch, userOrders);
      getPendingReviewFromOrders(dispatch, userOrders);
    };
    if (user) {
      getPendingOrder();
    }
  }, [userOrders]);

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

  if (user && !isLoading) {
    buttons = user ? (
      <div className="header__user">
        <Link className="header__user__linkto-cart" to="/mi-carrito">
          <button
            className="header__user--cart"
            type="button"
            aria-label="foto-carrito"
            onClick={handlerCart}
          />
          {!userPendingOrders ? (
            <span className="header__user--cart__quantity">
              {userPendingOrders.length}
            </span>
          ) : null}
        </Link>
        <button
          className="header__user--user"
          type="button"
          aria-label="foto-perfil"
          onClick={handlerMenuUser}
        >
          <AdvancedImage cldImg={cld.image(user?.photo?.id || 'cld-sample')} />
        </button>
      </div>
    ) : (
      <Link className="header__login" to="/login">
        Ingresa
      </Link>
    );
  } else if (!user && !isLoading) {
    buttons = (
      <Link className="header__login" to="/login">
        Ingresa
      </Link>
    );
  } else if (user && isLoading) {
    buttons = user ? (
      <div className="header__user">
        <Loader />
        <Link className="header__user__linkto-cart" to="/mi-carrito">
          <button
            className="header__user--cart"
            type="button"
            aria-label="foto-carrito"
            onClick={handlerCart}
          />
          {!userPendingOrders ? (
            <span className="header__user--cart__quantity">
              {userPendingOrders.length}
            </span>
          ) : null}
        </Link>
        <button
          className="header__user--user"
          type="button"
          aria-label="foto-perfil"
          onClick={handlerMenuUser}
        >
          <AdvancedImage cldImg={cld.image(user?.photo?.id || 'cld-sample')} />
        </button>
      </div>
    ) : (
      <Link className="header__login" to="/login">
        Ingresa
      </Link>
    );
  } else if (isLoading && !user) {
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
        <Link className="header__a" to="/services">
          Servicios
        </Link>
        <Link className="header__a" to="/personal">
          Personal
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
            to="/mi-perfil"
          >
            Mi Perfil
          </Link>
          {user?.role === 'personal' ? (
            <Link
              onClick={handlerMenuUser}
              className="header__perfil__a"
              to="/mis-servicios"
            >
              Mis servicios
            </Link>
          ) : null}
          {user?.role === 'personal' ? (
            <Link
              onClick={handlerMenuUser}
              className="header__perfil__a"
              to="/disponibilidad"
            >
              Mi horario
            </Link>
          ) : null}
          <Link
            onClick={handlerMenuUser}
            className="header__perfil__a"
            to="/mi-historial"
          >
            Mi historial
          </Link>
          {user?.role === 'admin' ? (
            <Link
              onClick={handlerMenuUser}
              className="header__perfil__a"
              to="/panel-administrador"
            >
              Administrador
            </Link>
          ) : null}
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
