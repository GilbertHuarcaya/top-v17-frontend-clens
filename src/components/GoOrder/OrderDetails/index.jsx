import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderForm } from '../../../store/actions';
import useForm from '../../../hooks/useForm';

const OrderDetails = () => {
  const orderDetails = useSelector((state) => state.orderDetails);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let prefilledForm = {};
  if (orderDetails && user) {
    prefilledForm = {
      userId: user.id,
      userName: user.userName,
      email: orderDetails.email || user.email,
      nombre: orderDetails.fullname || user.fullname,
      telefono: orderDetails.telefono || user.telefono,
      direccion: orderDetails.direccion || user.direccion,
      comentariosDeDireccion: orderDetails.comentariosDeDireccion,
      ciudad: orderDetails.ciudad || 'Lima',
    };
  } else if (user) {
    prefilledForm = {
      userId: user.id,
      userName: user.userName,
      email: user.email,
      nombre: user.fullname,
      telefono: user.telefono,
      direccion: user.direccion,
      ciudad: 'Lima',
    };
  }
  const { form, handleChange } = useForm(prefilledForm);
  const [formOk, setFormOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* loginUser(dispatch, form); */
    getOrderForm(dispatch, { ...orderDetails, ...form });
    navigate('/order/pago');
  };

  useEffect(() => {
    const validateForm = () => {
      if (Object.keys(form)?.length >= 7 && form?.ciudad?.length > 2) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  return (
    <div className="order-details">
      {user ? (
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
                  defaultValue={orderDetails.email || user.email}
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
                  name="fullname"
                  required
                  type="text"
                  defaultValue={orderDetails.fullname || user.fullname}
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
                  defaultValue={orderDetails.telefono || user.telefono}
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
                  defaultValue={orderDetails.direccion || user.direccion}
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
                  defaultValue={
                    orderDetails
                      ? orderDetails.comentariosDeDireccion || ''
                      : ''
                  }
                />
              </div>
            </label>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="ciudad">
              Ciudad
              <span className="help-block">
                / Por el momento solo estamos trabajando el Lima, pronto habrán
                mas ciudades disponibles.
              </span>
              <div className="slot">
                <input
                  className="input-text"
                  onChange={handleChange}
                  id="ciudad"
                  name="ciudad"
                  required
                  type="text"
                  defaultValue="Lima"
                  disabled
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
          <button
            className="btn btn-primary"
            id="btn-back"
            type="button"
            onClick={() => navigate('/order/tiempo')}
          >
            Volver
          </button>
        </form>
      ) : (
        <button
          className="btn btn-primary"
          id="btn-back"
          type="button"
          onClick={() => navigate('/login')}
        >
          Primero inicie sesión
        </button>
      )}
    </div>
  );
};

export default OrderDetails;
