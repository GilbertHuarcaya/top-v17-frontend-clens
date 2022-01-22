import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions';
import useForm from '../../hooks/useForm';

import './LoginForm.scss';
import gmailLogo from '../../img/icons/Google__G__Logo.svg';
import facebookLogo from '../../img/icons/facebook.png';
import logo from '../../img/logo-clens.jpg';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const response = useSelector((state) => state.response);
  const { form, handleChange } = useForm({});
  const [formOk, setFormOk] = useState(0);

  useEffect(() => {
    const validateForm = () => {
      try {
        if (form?.password !== undefined) {
          const data = form?.password.length > 5;
          setFormOk(data);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    validateForm();
  }, [handleChange]);

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(dispatch, form);
    setTimeout(() => {
      dispatch({ type: 'reset-response', response: null });
    }, 2500);
  };
  useEffect(() => {
    const validateLogin = async () => {
      if (user) {
        navigate('/');
      }
    };
    validateLogin();
  }, [handleSubmit]);

  return (
    <>
      <form className="form_login" onSubmit={handleSubmit}>
        <div className="form_login__logo">
          <Link to="/">
            <img
              className="form_login__logo__img"
              src={logo}
              alt="clens-logo"
            />
          </Link>
          <p className="form_login__logo__text">
            El mejor servicio, al mejor precio
          </p>
        </div>
        <div className="form_login__item">
          <input
            name="email"
            type="email"
            placeholder="correo"
            value={undefined}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_login__item">
          <input
            name="password"
            type="password"
            value={undefined}
            placeholder="contraseña"
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="form_login__button__login"
          type="submit"
          disabled={!formOk}
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
            <img
              className="form_login__logo_login"
              src={gmailLogo}
              alt="gmail"
            />
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
          <Link className="form_login__button__p" to="/forgot-password">
            Recuperala
          </Link>
        </div>
      </form>
      {response ? <p className="alert">{response.message}</p> : null}
    </>
  );
};

export default LoginForm;
