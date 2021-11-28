import './Postula.scss';
import { faImage, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const image = <FontAwesomeIcon icon={faImage} />;
const file = <FontAwesomeIcon icon={faFileUpload} />;

const Postula = () => {
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

  return (
    <div className="card--desktop">
      <div className="card">
        <form className="card__form">
          <h2 className="card__form__h2">Postula</h2>
          <p className="card__form__p">
            Si estas interesado en formar parte del equipo Clens envia tus
            datos:
          </p>
          <div className="card__form__group">
            <p className="card__form__titulo">Dirección</p>
            <input
              type="text"
              id="input-direccion"
              className="card__form__input"
              placeholder="Calle ..."
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Nombre Completo</p>
            <input
              type="text"
              id="input-nombre"
              className="card__form__input"
              placeholder="Pedro Perez"
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Celular</p>
            <input
              type="tel"
              id="input-telefono"
              className="card__form__input"
              placeholder="+51 987-654-321"
              maxLength="15"
              onKeyPress={celular}
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">DNI</p>
            <input
              type="tel"
              className="card__form__input"
              placeholder="12345678"
              maxLength="8"
              onKeyPress={dni}
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Correo</p>
            <input
              type="email"
              className="card__form__input"
              placeholder="correo@..."
            />
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Foto</p>
            <input type="text" className="card__form__input" />
            <i>{image}</i>
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Antecedentes Penales</p>
            <input type="text" className="card__form__input" />
            <i>{file}</i>
          </div>
          <div className="card__form__group">
            <p className="card__form__titulo">Constancia de no adeudar</p>
            <input type="text" className="card__form__input" />
            <i>{file}</i>
          </div>
          <button type="submit" className="card__form__btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postula;
