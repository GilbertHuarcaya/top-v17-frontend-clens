import { Link } from 'react-router-dom';
import { useState } from 'react';

import './LoginForm.scss';
import gmailLogo from '../../img/icons/Google__G__Logo.svg';
import facebookLogo from '../../img/icons/facebook.png';
import logo from '../../img/logo-clens.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="form_login" onSubmit={handleSubmit}>
      <div className="form_login__logo">
        <Link to="/">
          <img className="form_login__logo__img" src={logo} alt="clens-logo" />
        </Link>
        <p className="form_login__logo__text">
          El mejor servicio, al mejor precio
        </p>
      </div>
      <div className="form_login__item">
        <input
          type="email"
          placeholder="correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form_login__item">
        <input
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="form_login__button__login"
        type="submit"
        disabled={!validateForm()}
      >
        Ingresa
      </button>
      <p className="form_login__text">o Ingresa con:</p>
      <div className="form_login__logos_login">
        <Link to="/">
          <img
            className="form_login__logo_login"
            src={facebookLogo}
            alt="facebook"
          />
        </Link>
        <Link to="/">
          <img className="form_login__logo_login" src={gmailLogo} alt="gmail" />
        </Link>
      </div>
      <div className="to_register">
        <p className="form_login__text">¿Aún no tienes una cuenta?</p>
        <Link className="form_login__button__p" to="/register">
          Regístrate
        </Link>
      </div>
      <div className="to_recover">
        <p className="form_login__text">¿Olvidaste tu contraseña?</p>
        <Link className="form_login__button__p" to="/">
          Recuperala
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
