import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { validateUser } from '../../store/actions';
import './styles.scss';

const ValidationEmail = () => {
  const { userToken } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    validateUser(dispatch, userToken);
  }, []);

  return (
    <section className="validation-success">
      <h2 className="validation-success--title">Confirmar Tu Correo</h2>
      <article className="validation-success__wrapper">
        <p className="validation-success__wrapper--message">
          Tu correo ha sido confirmado
        </p>
        <Link className="validation-success__wrapper--button" to="/login">
          Iniciar Sesion
        </Link>
      </article>
    </section>
  );
};

export default ValidationEmail;
