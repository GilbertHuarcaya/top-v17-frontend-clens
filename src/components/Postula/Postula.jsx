/* eslint-disable no-unused-vars */
import { faImage, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUploadFiles, sendPostulaEmail } from '../../store/actions';
import './Postula.scss';
import useForm from '../../hooks/useFormCotizar';
import ActionSuccess from '../ActionSuccess';
import PaymentSuccess from '../PaymentSuccess';

const image = <FontAwesomeIcon icon={faImage} />;
const file = <FontAwesomeIcon icon={faFileUpload} />;

const Postula = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files] = useState([]);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState();
  const [loadingPayment, setLoadingPayment] = useState(false);

  const data = {
    fullname: '',
    direccion: '',
    celular: '',
    identificacion: '',
    email: '',
    files,
  };

  const { form, handleChange } = useForm(data);

  const onSubmitFiles = async (e) => {
    e.preventDefault();
    setLoadingPayment(true);
    await postUploadFiles(dispatch, files);
    const response = await sendPostulaEmail(dispatch, form);
    setFormData(response);
    if (response.status === 200) {
      setLoadingPayment(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 6000);
    }
  };

  const onChangeFile = (e) => {
    e.preventDefault();
    files.push(e.target.files[0]);
  };

  const celular = (e) => {
    if (!/^[\d ()+-]+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const dni = (e) => {
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setFormData(null);
  };

  const paymentMessage = () => {
    if (formData?.status === 200) {
      return (
        <PaymentSuccess
          title="Envio realizado"
          message="Ha enviado satisfactoriamente sus datos, espere un correo de respuesta en su bandeja de mensajes"
          visible={success}
        />
      );
    }
    if (formData !== null && formData !== undefined) {
      return (
        <ActionSuccess
          title="Error"
          message={formData?.message || 'Error inesperado, vuelva a intentarlo'}
          redirect="/"
          button="Volver a Home"
          visible
          handleClose={handleClose}
        />
      );
    }
    return null;
  };

  return (
    <div className="card--desktop">
      <div className="card">
        <form className="card__form" onSubmit={onSubmitFiles}>
          <h2 className="card__form__h2">Postula</h2>
          <p className="card__form__p">
            Si estas interesado en formar parte del equipo Clens envia tus
            datos:
          </p>

          <div className="card__form__group">
            <p className="card__form__titulo">Dirección</p>
            <input
              type="text"
              id="direccion"
              name="direccion"
              className="card__form__input"
              placeholder="Calle ..."
              onChange={handleChange}
              defaultValue=""
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Nombre Completo</p>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="card__form__input"
              placeholder="Pedro Perez"
              onChange={handleChange}
              defaultValue=""
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Celular</p>
            <input
              type="tel"
              id="celular"
              name="celular"
              className="card__form__input"
              placeholder="+51 987-654-321"
              maxLength="15"
              onKeyPress={celular}
              onChange={handleChange}
              defaultValue=""
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">DNI</p>
            <input
              type="tel"
              id="identificacion"
              name="identificacion"
              className="card__form__input"
              placeholder="12345678"
              maxLength="8"
              onKeyPress={dni}
              onChange={handleChange}
              defaultValue=""
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Correo</p>
            <input
              type="email"
              id="email"
              name="email"
              className="card__form__input"
              placeholder="correo@..."
              onChange={handleChange}
              defaultValue=""
            />
          </div>

          <div className="card__form__group">
            <p className="card__form__titulo">Foto</p>
            <input
              type="file"
              onChange={onChangeFile}
              className="card__form__input"
            />
            <i>{image}</i>
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Antecedentes Penales</p>
            <input
              type="file"
              onChange={onChangeFile}
              className="card__form__input"
            />
            <i>{file}</i>
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Constancia de no adeudar</p>
            <input
              type="file"
              onChange={onChangeFile}
              className="card__form__input"
            />
            <i>{file}</i>
          </div>
          <button type="submit" className="card__form__btn">
            Enviar
          </button>
        </form>
        {loadingPayment ? (
          <ActionSuccess
            title="Enviando"
            message="Envio de datos en progreso..."
            visible
            handleClose={handleClose}
          />
        ) : null}
        {paymentMessage()}
      </div>
    </div>
  );
};

export default Postula;
