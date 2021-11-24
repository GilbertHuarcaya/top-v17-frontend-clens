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
    <button className="form_login__button__login" type="submit">Ingresa</button>
    <p className="form_login__text">o Ingresa con:</p>
    <div className="form_login__logos_login">
      <a href target>
        <img className="form_login__logo_login" src={facebookLogo} alt="facebook" />
      </a>
      <a href target>
        <img className="form_login__logo_login" src={instagramLogo} alt="instagram" />
      </a>
      <a href>
        <img className="form_login__logo_login" src={gmailLogo} alt="gmail" />
      </a>
    </div>
    <p className="form_login__text">¿Aún no tienes una cuenta?</p>
    <a className="form_login__button__register" href="./register.html">
      Regístrate
    </a>
  </form>
);

export default LoginForm;
