import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { registerUser } from '../../context/actions';
import { useAppDispatch } from '../../context/store';

import './RegisterForm.scss';
import gmailLogo from '../../img/icons/Google__G__Logo.svg';
import facebookLogo from '../../img/icons/facebook.png';
import logo from '../../img/logo-clens.jpg';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { form, handleChange } = useForm({});
  const [formOk, setFormOk] = useState(0);

  useEffect(() => {
    const validateForm = () => {
      try {
        if (form.password !== undefined) {
          const data =
            form?.password.length > 5 &&
            form?.confirmpassword === form?.password;
          setFormOk(data);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    validateForm();
  }, [handleChange]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    registerUser(dispatch, form);
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          name="firstName"
          type="text"
          placeholder="nombres"
          value={undefined}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_register__item">
        <input
          name="lastName"
          type="text"
          placeholder="apellidos"
          value={undefined}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_register__item">
        <input
          name="identificacion"
          type="text"
          placeholder="identificación/DNI"
          value={undefined}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_register__item">
        <input
          name="telefono"
          type="text"
          placeholder="telefono/celular"
          value={undefined}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_register__item">
        <input
          name="direccion"
          type="text"
          placeholder="dirección completa"
          value={undefined}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_register__item">
        <input
          name="email"
          type="email"
          placeholder="correo"
          value={undefined}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_register__item">
        <input
          name="password"
          type="password"
          placeholder="contraseña/mínimo 6 caracteres"
          value={undefined}
          onChange={handleChange}
          required
        />
        <p>6 caracteres como mínimo</p>
      </div>
      <div className="form_register__item">
        <input
          name="confirmpassword"
          type="password"
          placeholder="confirmar contraseña/mínimo 6 caracteres"
          value={undefined}
          onChange={handleChange}
          required
        />
      </div>

      <button
        className="form_register__button__register"
        type="submit"
        disabled={!formOk}
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
