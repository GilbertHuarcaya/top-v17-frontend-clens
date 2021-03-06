import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { postUploadFile, patchUserData } from '../../../store/actions';
import useForm from '../../../hooks/useForm';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;
const image = <FontAwesomeIcon icon={faImage} />;

const MiPerfil = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [toggleClassBtnUser, setToggleCLassBtnUser] = useState('false');
  const [file, setFile] = useState(null);
  const [blocked, setBlocked] = useState(true);
  const prefilledForm = {
    direccion: user.direccion,
    telefono: user.telefono,
  };
  const { form, handleChange } = useForm(prefilledForm);
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });

  const myImage = cld.image(user.photo.id || 'cld-sample');

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    // setFiles(e.target.files)
    // console.log(": ~ file: UploadImage.js ~ line 11~ onchangeFile ~ e.target.files", e.target.files)
    setBlocked(!true);
  };

  const handlerUserPhoto = () => {
    if (!toggleClassBtnUser) {
      return setToggleCLassBtnUser(true);
    }
    return setToggleCLassBtnUser(false);
  };
  const onSubmitFoto = async (e) => {
    e.preventDefault();
    await postUploadFile(dispatch, file, user);
    handlerUserPhoto();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await patchUserData(dispatch, {
      id: user.id,
      direccion: form.direccion,
      telefono: form.telefono,
    });
  };
  return (
    <>
      <form className="card__form">
        <h2 className="card__form__h2">Mi Perfil</h2>
        <h5 className="card__form__h5">
          Aqui puede actualizar su informaci??n:
        </h5>
        <button
          type="button"
          className="card__user-img"
          onClick={handlerUserPhoto}
        >
          <AdvancedImage cldImg={myImage} />
        </button>
        <div className="card__form__group">
          <p className="card__form__titulo">
            Nombre Completo <small> - No puede editar este campo</small>
          </p>
          <input
            type="text"
            id="nombre"
            name="fullname"
            className="card__form__input"
            defaultValue={user.fullname}
            disabled
          />
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Direcci??n</p>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className="card__form__input"
            onChange={handleChange}
            defaultValue={user.direccion}
          />
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Tel??fono</p>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="card__form__input"
            onChange={handleChange}
            defaultValue={user.telefono}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="card__form__btn"
        >
          Actualizar
        </button>
        <p className="card__form__link">
          <Link to="/mi-perfil/cambio-contrasena">
            Deseo cambiar mi contrase??a
          </Link>
        </p>
      </form>
      <div
        className={
          toggleClassBtnUser
            ? 'card__form__change-photo'
            : 'card__form__change-photo is-active-change-photo'
        }
        id="menu-perfil"
      >
        <form className="card__form">
          <h4 className="card__form__h4">Cambie su foto</h4>
          <button
            type="button"
            className="card__form__close"
            onClick={handlerUserPhoto}
          >
            &times;
          </button>
          <div className="card__form__group">
            <p className="card__form__titulo">Foto</p>
            <input
              type="file"
              name="file"
              id="file"
              onChange={onChangeFile}
              accept="image/*"
              className="card__form__input"
            />
            <button
              className="i-btn"
              type="submit"
              tabIndex="0"
              disabled={blocked}
            >
              {image}
              {blocked ? null : '???'}
            </button>
          </div>
          <button
            type="button"
            onClick={onSubmitFoto}
            className="card__form__btn"
          >
            Actualizar
          </button>
        </form>
      </div>
    </>
  );
};

export default MiPerfil;
