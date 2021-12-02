import { Link } from 'react-router-dom';
import { useState } from 'react';

import './RegisterForm.scss';
import gmailLogo from '../../img/icons/Google__G__Logo.svg';
import facebookLogo from '../../img/icons/facebook.png';
import logo from '../../img/logo-clens.jpg';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordtwo, setPasswordtwo] = useState('');
  const [ID, setID] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 5 &&
      passwordtwo === password &&
      ID.length > 0 &&
      firstname.length > 0 &&
      lastname.length > 0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form className="form_register" onSubmit={handleSubmit}>
      <div className="form_login__logo">
        <Link to="/">
          <img className="form_login__logo__img" src={logo} alt="clens-logo" />
        </Link>
        <p className="form_login__logo__text">
          El mejor servicio, al mejor precio
        </p>
      </div>
      <div className="form_register__item">
        <input
          type="text"
          placeholder="nombres"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="form_register__item">
        <input
          type="text"
          placeholder="apellidos"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="form_register__item">
        <input
          type="text"
          placeholder="identificación/DNI"
          value={ID}
          onChange={(e) => setID(e.target.value)}
        />
      </div>
      <div className="form_register__item">
        <input
          type="email"
          placeholder="correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form_register__item">
        <input
          type="password"
          placeholder="contraseña/mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>6 caracteres como mínimo</p>
      </div>
      <div className="form_register__item">
        <input
          type="password"
          placeholder="confirmar contraseña/mínimo 6 caracteres"
          value={passwordtwo}
          onChange={(e) => setPasswordtwo(e.target.value)}
        />
      </div>

      <button
        className="form_register__button__register"
        type="submit"
        disabled={!validateForm()}
      >
        Regístrate
      </button>

      <p className="form_register__text">o Regístrate con:</p>
      <div className="form_register__logos_register">
        <Link to="/">
          <img
            className="form_register__logo_register"
            src={facebookLogo}
            alt="facebook"
          />
        </Link>
        <Link to="/">
          <img
            className="form_register__logo_register"
            src={gmailLogo}
            alt="gmail"
          />
        </Link>
      </div>
      <div className="to_login">
        <p className="form_register__text">¿Ya tienes una cuenta?</p>
        <Link className="form_register__button__p" to="/login">
          Ingresa
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
