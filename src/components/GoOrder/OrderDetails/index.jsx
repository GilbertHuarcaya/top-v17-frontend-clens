import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrderFromDetalles } from '../../../context/actions';
import { useAppDispatch } from '../../../context/store';
import useForm from '../../../hooks/useForm';

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { form, handleChange } = useForm({});
  const [formOk, setFormOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* loginUser(dispatch, form); */
    getOrderFromDetalles(dispatch, form);
    navigate('/order/pago');
  };

  useEffect(() => {
    const validateForm = () => {
      try {
        if (Object.keys(form).length >= 5) {
          setFormOk(true);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    validateForm();
  }, [handleChange]);
  return (
    <div className="specifications">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label" htmlFor="email">
            ¿A qué email se enviaran los datos de esta orden?
            <div className="slot">
              <input
                className="input-text"
                name="email"
                onChange={handleChange}
                required
                type="email"
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="nombre">
            Nombre Completo
            <div className="slot">
              <input
                className="input-text"
                id="nombre"
                onChange={handleChange}
                name="nombre"
                required
                type="text"
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="telefono">
            Teléfono/Celular
            <div className="slot">
              <input
                className="input-text"
                id="telefono"
                onChange={handleChange}
                name="telefono"
                required
                type="number"
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="direccion">
            Dirección:
            <div className="slot">
              <input
                className="input-text"
                id="direccion"
                onChange={handleChange}
                name="direccion"
                required
                type="text"
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="comentarios-direccion">
            Comentarios de Dirección (opcional):
            <div className="slot">
              <input
                className="input-text"
                onChange={handleChange}
                id="comentariosDeDireccion"
                name="comentariosDeDireccion"
                type="text"
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="ciudad">
            Ciudad
            <div className="slot">
              <input
                className="input-text"
                onChange={handleChange}
                id="ciudad"
                name="ciudad"
                required
                type="text"
              />
            </div>
          </label>
        </div>

        <button
          className="btn btn-primary"
          id="btn-continue"
          type="submit"
          disabled={!formOk}
        >
          Continuar
        </button>
        <button className="btn btn-primary" id="btn-back" type="button">
          Volver
        </button>
      </form>
    </div>
  );
};

export default OrderDetails;
