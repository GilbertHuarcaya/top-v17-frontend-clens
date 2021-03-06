import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendUserEmailResetPassword } from '../../store/actions';
import useForm from '../../hooks/useForm';
import ActionSuccess from '../ActionSuccess';

import './styles.scss';
import logo from '../../img/logo-clens.jpg';

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const { form, handleChange } = useForm({});
  const [formOk, setFormOk] = useState(0);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState();

  useEffect(() => {
    const validateForm = () => {
      try {
        if (form?.email !== undefined) {
          setFormOk(true);
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

    const response = await sendUserEmailResetPassword(dispatch, form);
    setFormData(response);
  };

  const handleClose = () => {
    setSuccess(false);
    setFormData(null);
  };

  useEffect(() => {
    if (formData?.ok) {
      setSuccess(true);
    }
  }, [formData]);

  return (
    <>
      <form className="form_forgot-password" onSubmit={handleSubmit}>
        <div className="form_forgot-password__logo">
          <Link to="/">
            <img
              className="form_forgot-password__logo__img"
              src={logo}
              alt="clens-logo"
            />
          </Link>
          <p className="form_forgot-password__logo__text">
            El mejor servicio, al mejor precio
          </p>
        </div>
        <div className="form_forgot-password__item">
          <input
            name="email"
            type="email"
            placeholder="correo"
            value={undefined}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="form_forgot-password__button__send"
          type="submit"
          disabled={!formOk}
        >
          Enviar
        </button>
        <div className="to_register">
          <p className="form_forgot-password__text">
            ??Recordaste tu contrase??a?
          </p>
          <Link className="form_forgot-password__button__p" to="/login">
            Ingresa
          </Link>
        </div>
      </form>
      {formData?.message ? (
        <ActionSuccess
          title="Error"
          message="No se encontr?? un usuario con el email otorgado, vuelva a intentarlo"
          redirect="/"
          button="Volver a Home"
          visible
          handleClose={handleClose}
        />
      ) : (
        <ActionSuccess
          title="Email enviado"
          message="Un email de cambio de contrase??a ha sido enviado a su correo, porfavor revisarlo"
          redirect="/"
          button="Volver a Home"
          visible={success}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default ResetPasswordForm;
