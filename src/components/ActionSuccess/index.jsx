/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const ActionSuccess = ({
  title = '',
  message = '',
  redirect = '/',
  button = '',
  visible = false,
  handleClose,
}) => {
  return (
    <div className={`action-success ${visible ? 'modal' : 'modal-hidden'}`}>
      <div className="modal-content">
        <button type="button" className="close" onClick={handleClose}>
          &times;
        </button>
        <h2 className="action-success--title">{title}</h2>
        <article className="action-success__wrapper">
          <p className="action-success__wrapper--message">{message}</p>
          <Link
            className="action-success__wrapper--button"
            onClick={handleClose}
            to={redirect}
          >
            {button}
          </Link>
        </article>
      </div>
    </div>
  );
};

export default ActionSuccess;
