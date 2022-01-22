import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { postUploadFile } from '../../../store/actions';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;
const image = <FontAwesomeIcon icon={faImage} />;

const MiPerfil = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [toggleClassBtnUser, setToggleCLassBtnUser] = useState('false');
  const [file, setFile] = useState(null);
  const [blocked, setBlocked] = useState(true);
  // const [files, setFiles] = useState(null);
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
  const onSubmit = async (e) => {
    e.preventDefault();
    await postUploadFile(dispatch, file, user);
    handlerUserPhoto();
  };

  return (
    <>
      <form className="card__form">
        <h2 className="card__form__h2">Mi Perfil</h2>
        <h5 className="card__form__h5">
          Aqui puede actualizar su información:
        </h5>
        <button
          type="button"
          className="card__user-img"
          onClick={handlerUserPhoto}
        >
          <AdvancedImage cldImg={myImage} />
        </button>
        <div className="card__form__group">
          <p className="card__form__titulo">Dirección</p>
          <input
            type="text"
            id="input-direccion"
            className="card__form__input"
            defaultValue={user.direccion}
          />
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Nombre Completo</p>
          <input
            type="text"
            id="input-nombre"
            className="card__form__input"
            defaultValue={user.fullname}
          />
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Teléfono</p>
          <input
            type="tel"
            id="input-telefono"
            className="card__form__input"
            defaultValue={user.telefono}
          />
        </div>
        <button type="submit" className="card__form__btn">
          Actualizar
        </button>
        <p className="card__form__link">
          <Link to="/mi-perfil/cambio-contrasena">
            Deseo cambiar mi contraseña
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
              onClick={onSubmit}
            >
              {image}
              {blocked ? null : '✔'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MiPerfil;
