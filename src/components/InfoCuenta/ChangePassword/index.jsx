import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const eye = <FontAwesomeIcon icon={faEye} />;

const NewPassword = () => {
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
    <form className="card__form">
      <h4 className="card__form__h4">Cambie su información de ingreso</h4>
      <div className="card__form__group">
        <p className="card__form__titulo">Correo</p>
        <input
          type="email"
          className="card__form__input"
          defaultValue={user.email}
        />
      </div>
      <h4 className="card__form__h4">Cambie su contraseña</h4>
      <div className="card__form__group">
        <p className="card__form__titulo">Contraseña actual</p>
        <div className="pass-eye">
          <input
            type={actualPasswordShown ? 'text' : 'password'}
            className="card__form__input"
            id="old-password"
          />
          <button
            type="button"
            className="password-btn"
            tabIndex="0"
            onKeyDown={onKeyDownActual}
            onClick={toggleActualPasswordVisiblity}
          >
            {eye}
          </button>
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
          <button
            type="button"
            className="password-btn"
            tabIndex="0"
            onKeyDown={onKeyDownNew}
            onClick={toggleNewPasswordVisiblity}
          >
            {eye}
          </button>
        </div>
      </div>
      <button type="submit" className="card__form__btn">
        Cambiar
      </button>

      <p className="card__form__link">
        <Link to="/mi-perfil">Volver</Link>
      </p>
    </form>
  );
};

export default NewPassword;
