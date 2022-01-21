import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const ConfirmEmail = () => {
  useEffect(() => {
    //
  }, []);
  return (
    <section className="register-success">
      <h2 className="register-success--title">Confirmar Tu Correo</h2>
      <article className="register-success__wrapper">
        <p className="register-success__wrapper--message">
          Tu correo ha sido confirmado
        </p>
        <Link className="register-success__wrapper--button" to="/login">
          Iniciar Sesion
        </Link>
      </article>
    </section>
  );
};

export default ConfirmEmail;
