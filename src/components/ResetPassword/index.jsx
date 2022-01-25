import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword, loginUser } from '../../store/actions';
import useForm from '../../hooks/useForm';

import './styles.scss';
import logo from '../../img/logo-clens.jpg';

const ResetPasswordForm = () => {
  const { userToken } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleChange } = useForm({ userToken });
  const [formOk, setFormOk] = useState(0);

  useEffect(() => {
    const validateForm = () => {
      try {
        if (form?.password !== undefined) {
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

    const response = await resetPassword(dispatch, form);
    if (response) {
      await loginUser(dispatch, {
        email: response.email,
        password: form.password,
      });
      navigate('/mi-perfil');
    }
  };

  return (
    <form className="form_reset-password" onSubmit={handleSubmit}>
      <div className="form_reset-password__logo">
        <Link to="/">
          <img
            className="form_reset-password__logo__img"
            src={logo}
            alt="clens-logo"
          />
        </Link>
        <p className="form_reset-password__logo__text">
          El mejor servicio, al mejor precio
        </p>
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
        className="form_reset-password__button__send"
        type="submit"
        disabled={!formOk}
      >
        Cambiar contraseña
      </button>
    </form>
  );
};

export default ResetPasswordForm;
