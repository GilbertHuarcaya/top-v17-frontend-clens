import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions';
import useForm from '../../hooks/useForm';

import './RegisterForm.scss';
import gmailLogo from '../../img/icons/Google__G__Logo.svg';
import facebookLogo from '../../img/icons/facebook.png';
import logo from '../../img/logo-clens.jpg';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleChange } = useForm({});
  const [formOk, setFormOk] = useState(0);
  const [formData, setFormData] = useState();

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

    const response = await registerUser(dispatch, form);

    setFormData(response);
    if (response.error) {
      setTimeout(() => {
        setFormData(null);
      }, 2500);
    }
  };

  useEffect(() => {
    const redirect = () => {
      if (formData?.ok) {
        navigate('/register-success');
      }
    };
    redirect();
  }, [formData]);

  return (
    <>
      <form className="form_register" onSubmit={handleSubmit}>
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
            placeholder="identificaci??n/DNI"
            value={undefined}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_register__item">
          <input
            name="telefono"
            type="text"
            placeholder="celular"
            minLength="8"
            value={undefined}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_register__item">
          <input
            name="direccion"
            type="text"
            placeholder="direcci??n completa"
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
            placeholder="contrase??a/m??nimo 6 caracteres"
            value={undefined}
            onChange={handleChange}
            required
          />
          <p>6 caracteres como m??nimo</p>
        </div>
        <div className="form_register__item">
          <input
            name="confirmpassword"
            type="password"
            placeholder="confirmar contrase??a/m??nimo 6 caracteres"
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
          Reg??strate
        </button>

        <p className="form_register__text">o Reg??strate con:</p>
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
          <p className="form_register__text">??Ya tienes una cuenta?</p>
          <Link className="form_register__button__p" to="/login">
            Ingresa
          </Link>
        </div>
      </form>
      {formData?.error ? (
        <p className="alert">
          {Object.keys(formData?.error)} is already in use
        </p>
      ) : null}
    </>
  );
};

export default RegisterForm;
