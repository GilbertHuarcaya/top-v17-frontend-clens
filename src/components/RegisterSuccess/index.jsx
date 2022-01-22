import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
  return (
    <section className="register-success">
      <h2 className="register-success--title">Registro Exitoso</h2>
      <article className="register-success__wrapper">
        <p className="register-success__wrapper--message">
          El registro ha sido exitoso, porfavor visita tu correo electronico
          para validar tu identidad
        </p>
        <Link className="register-success__wrapper--button" to="/">
          Regresar al inicio
        </Link>
      </article>
    </section>
  );
};

export default RegisterSuccess;
