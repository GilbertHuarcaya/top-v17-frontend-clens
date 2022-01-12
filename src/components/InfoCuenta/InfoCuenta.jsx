import './InfoCuenta.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faImage } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import info from '../../img/info-cuenta.png';

const image = <FontAwesomeIcon icon={faImage} />;
const eye = <FontAwesomeIcon icon={faEye} />;

const InfoCuenta = () => {
  const user = useSelector((state) => state.user);
  const [actualPasswordShown, setActualPasswordShown] = useState(false);
  const toggleActualPasswordVisiblity = () => {
    setActualPasswordShown(!actualPasswordShown);
  };

  const onKeyDownActual = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      setActualPasswordShown(!actualPasswordShown);
    }
  };

  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const toggleNewPasswordVisiblity = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const onKeyDownNew = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      setNewPasswordShown(!newPasswordShown);
    }
  };

  return (
    <div className="card--desktop">
      <div className="card">
        {user ? (
          <form className="card__form">
            <h2 className="card__form__h2">Información de Cuenta</h2>
            <h5 className="card__form__h5">
              Aqui puede actualizar su información:
            </h5>
            <div className="card__form__group">
              <p className="card__form__titulo">Dirección</p>
              <input
                type="text"
                id="input-direccion"
                className="card__form__input"
                defaultValue={user.direccion}
              />
            </div>
            <div className="card__form__group">
              <p className="card__form__titulo">Nombre Completo</p>
              <input
                type="text"
                id="input-nombre"
                className="card__form__input"
                defaultValue={user.fullname}
              />
            </div>
            <div className="card__form__group">
              <p className="card__form__titulo">Teléfono</p>
              <input
                type="tel"
                id="input-telefono"
                className="card__form__input"
                defaultValue={user.telefono}
              />
            </div>

            <h4 className="card__form__h4">Cambie su información de ingreso</h4>
            <div className="card__form__group">
              <p className="card__form__titulo">Correo</p>
              <input
                type="email"
                className="card__form__input"
                defaultValue={user.email}
              />
            </div>
            <div className="card__form__group">
              <p className="card__form__titulo">Contraseña actual</p>
              <div className="pass-eye">
                <input
                  type={actualPasswordShown ? 'text' : 'password'}
                  className="card__form__input"
                  id="old-password"
                />
                <i
                  role="button"
                  tabIndex="0"
                  onKeyDown={onKeyDownActual}
                  onClick={toggleActualPasswordVisiblity}
                >
                  {eye}
                </i>
              </div>
            </div>
            <div className="card__form__group">
              <p className="card__form__titulo">Nueva contraseña</p>
              <div className="pass-eye">
                <input
                  type={newPasswordShown ? 'text' : 'password'}
                  className="card__form__input"
                  id="new-password"
                />
                <i
                  role="button"
                  tabIndex="0"
                  onKeyDown={onKeyDownNew}
                  onClick={toggleNewPasswordVisiblity}
                >
                  {eye}
                </i>
              </div>
            </div>
            <div className="card__form__group">
              <p className="card__form__titulo">Foto</p>
              <input type="text" className="card__form__input" />
              <i role="button" tabIndex="0" onKeyDown={onKeyDownNew}>
                {image}
              </i>
            </div>
            <button type="submit" className="card__form__btn">
              Actualizar
            </button>
          </form>
        ) : (
          'is Loading...'
        )}
        <img className="info__img" src={info} alt="" />
      </div>
    </div>
  );
};

export default InfoCuenta;
