import { Link } from 'react-router-dom';

import './LoginForm.scss';
import gmailLogo from '../../img/icons/gmail.png';
import facebookLogo from '../../img/icons/facebook.png';
import instagramLogo from '../../img/icons/instagram.png';

const LoginForm = () => (
  <form className="form_login" action="">
    <div className="form_login__item">
      <h3>Correo</h3>
      <input type="email" />
    </div>
    <div className="form_login__item">
      <h3>Contraseña</h3>
      <input type="password" placeholder="******" />
    </div>
    <button className="form_login__button__login" type="submit">
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
        <img
          className="form_login__logo_login"
          src={instagramLogo}
          alt="instagram"
        />
      </Link>
      <Link to="/">
        <img className="form_login__logo_login" src={gmailLogo} alt="gmail" />
      </Link>
    </div>
    <p className="form_login__text">¿Aún no tienes una cuenta?</p>
    <Link className="form_login__button__register" to="/register">
      Regístrate
    </Link>
  </form>
);

export default LoginForm;
