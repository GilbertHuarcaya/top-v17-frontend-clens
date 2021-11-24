import './InfoCuenta.scss';
import info from '../../img/info-cuenta.png';

const InfoCuenta = () => (
  <div className="card--desktop">
    <div className="card">
      <form className="card__form">
        <h2 className="card__form__h2">Información de Cuenta</h2>
        <h5 className="card__form__h5">Aqui puede actualizar su información:</h5>
        <div className="card__form__group">
          <p className="card__form__titulo">Dirección</p>
          <input
            type="text"
            id="input-direccion"
            className="card__form__input"
            defaultValue="Direccion Actual"
          />
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Nombre Completo</p>
          <input
            type="text"
            id="input-nombre"
            className="card__form__input"
            defaultValue="Nombre Actual"
          />
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Teléfono</p>
          <input
            type="tel"
            id="input-telefono"
            className="card__form__input"
            defaultValue="Telefono Actual"
          />
        </div>

        <h4 className="card__form__h4">Cambie su información de ingreso</h4>
        <div className="card__form__group">
          <p className="card__form__titulo">Correo</p>
          <input
            type="email"
            className="card__form__input"
            defaultValue="Correo_actual@gmail.com"
          />
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Contraseña antigua</p>
          <div className="pass-eye">
            <input
              type="password"
              className="card__form__input"
              id="old-password"
            />
            <span className="far fa-eye" id="toggleOldPassword" />
          </div>
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Nueva contraseña</p>
          <div className="pass-eye">
            <input
              type="password"
              className="card__form__input"
              id="new-password"
            />
            <span className="far fa-eye" id="toggleNewPassword" />
          </div>
        </div>
        <div className="card__form__group">
          <p className="card__form__titulo">Foto</p>
          <input type="text" className="card__form__input" />
        </div>
        <button type="submit" className="card__form__btn">Actualizar</button>
      </form>
      <img className="info__img" src={info} alt="" />
    </div>
  </div>
);

export default InfoCuenta;
