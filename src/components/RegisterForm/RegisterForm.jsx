import './RegisterForm.scss';
import gmailLogo from '../../img/icons/gmail.png';
import facebookLogo from '../../img/icons/facebook.png';
import instagramLogo from '../../img/icons/instagram.png';

const RegisterForm = () => (
  <form className="form_register" action="">
    <div className="form_register__item">
      <h3>Nombre completo</h3>
      <input type="text" />
    </div>
    <div className="form_register__item">
      <h3>Identificación/DNI</h3>
      <input type="text" />
    </div>
    <div className="form_register__item">
      <h3>Correo</h3>
      <input type="email" />
    </div>
    <div className="form_register__item">
      <h3>Contraseña</h3>
      <input type="password" placeholder="******" />
      <p>6 caracteres como mínimo</p>
    </div>
    <div className="form_register__item">
      <h3>Confirmar Contraseña</h3>
      <input type="password" placeholder="******" />
    </div>
    {/* boton */}
    <button className="form_register__button__register" type="submit">
      Regístrate
    </button>
    <p className="form_register__text">o Regístrate con:</p>
    <div className="form_register__logos_register">
      <a href target>
        <img
          className="form_register__logo_register"
          src={facebookLogo}
          alt="facebook"
        />
      </a>
      <a href target>
        <img
          className="form_register__logo_register"
          src={instagramLogo}
          alt="instagram"
        />
      </a>
      <a href>
        <img className="form_register__logo_register" src={gmailLogo} alt="gmail" />
      </a>
    </div>
    <p className="form_register__text">¿Ya tienes una cuenta?</p>
    <a className="form_register__button__login" href="./login.html">
      Ingresa
    </a>
  </form>
);

export default RegisterForm;
