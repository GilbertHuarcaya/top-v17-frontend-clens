import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  postUserCardToken,
  postUserOrder,
  getUserOrdersFromDB,
  postUserCustomerToken,
  postUserPayment,
} from '../../../store/actions';
import PaymentSuccess from '../../PaymentSuccess';
import useForm from '../../../hooks/useFormCotizar';

// eslint-disable-next-line react/prop-types
const Pay = () => {
  const user = useSelector((state) => state.user);
  const orderDetails = useSelector((state) => state.orderDetails);
  const cardToken = useSelector((state) => state.cardToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const prefilledForm = Object.keys(cardToken)
    ? cardToken
    : {
        cardNumber: '',
        cardExpYear: '',
        cardExpMonth: '',
        cardCVC: '',
      };
  const { form, handleChange } = useForm(prefilledForm);
  const [success, setSuccess] = useState(false);

  const paymentForm = {
    city: orderDetails.ciudad,
    address: orderDetails.direccion,
    phone: `${orderDetails.telefono}`,
    cellPhone: `${orderDetails.telefono}`,
    value: `${orderDetails.precio}000`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postUserCardToken(dispatch, form);

    await postUserCustomerToken(dispatch);

    await postUserPayment(dispatch, paymentForm);
    setSuccess(true);
    await postUserOrder(dispatch, orderDetails);
    setTimeout(() => {
      navigate('/mi-carrito');
      setSuccess(false);
    }, 6000);

    await getUserOrdersFromDB(dispatch, user.id);
  };

  return (
    <div className="pay">
      {user ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="help-block">
                Solo se le cobrará después de que se complete la limpieza. Puede
                cambiar o cancelar este horario en cualquier momento.
              </p>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="distrito">
                <span> Número de tarjeta </span>
                <div className="slot">
                  <input
                    className="InputElement is-empty Input Input--empty input-text"
                    autoComplete="cc-number"
                    autoCorrect="off"
                    spellCheck="false"
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    onChange={handleChange}
                    data-elements-stable-field-name="cardNumber"
                    inputMode="numeric"
                    aria-label="Número de la tarjeta de crédito o débito"
                    placeholder="1234 1234 1234 1234"
                    aria-invalid="false"
                    defaultValue=""
                  />
                </div>
              </label>
            </div>
            <div className="form-group">
              <div className="slot">
                <label className="control-label" htmlFor="distrito">
                  <span> Mes de expiración </span>
                  <div className="slot">
                    <input
                      className="InputElement is-empty Input Input--empty input-text"
                      autoComplete="cc-exp"
                      autoCorrect="off"
                      spellCheck="false"
                      type="text"
                      name="cardExpMonth"
                      id="cardExpMonth"
                      onChange={handleChange}
                      data-elements-stable-field-name="cardExpMonth"
                      inputMode="numeric"
                      aria-label="Fecha de caducidad de la tarjeta de crédito o débito"
                      placeholder="MM"
                      aria-invalid="false"
                      defaultValue=""
                    />
                  </div>
                </label>
                <label className="control-label" htmlFor="distrito">
                  <span> Año de expiración </span>
                  <div className="slot">
                    <input
                      className="InputElement is-empty Input Input--empty input-text"
                      autoComplete="cc-exp"
                      autoCorrect="off"
                      spellCheck="false"
                      type="text"
                      name="cardExpYear"
                      id="cardExpYear"
                      onChange={handleChange}
                      data-elements-stable-field-name="cardExpYear"
                      inputMode="numeric"
                      aria-label="Fecha de caducidad de la tarjeta de crédito o débito"
                      placeholder="AAAA"
                      aria-invalid="false"
                      defaultValue=""
                    />
                  </div>
                </label>
                <label className="control-label" htmlFor="distrito">
                  <span> CVC </span>
                  <div className="slot">
                    <input
                      className="InputElement is-empty Input Input--empty input-text"
                      autoComplete="cc-csc"
                      autoCorrect="off"
                      spellCheck="false"
                      type="text"
                      name="cardCVC"
                      id="cardCVC"
                      onChange={handleChange}
                      data-elements-stable-field-name="cardCVC"
                      inputMode="numeric"
                      aria-label="CVC/CVV de la tarjeta de crédito o débito"
                      placeholder="123"
                      aria-invalid="false"
                      defaultValue=""
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="checkbox">
              <label htmlFor="terms-consent">
                <input
                  formcontrolname="termsAndConditionsConsent"
                  hktrackfield="termsAndConditionsConsent"
                  id="terms-consent"
                  required
                  type="checkbox"
                  className="ng-dirty ng-touched ng-valid"
                />
                <span>
                  Acepto los{' '}
                  <a
                    href="https://housekeep.com/footer/terms-conditions/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    términos y condiciones
                  </a>
                  , he leído la{' '}
                  <a
                    href="https://housekeep.com/footer/privacy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    política de privacidad
                  </a>{' '}
                  y autorizo a Clens a cargar mi tarjeta de pago de acuerdo con
                  estos términos.
                </span>
              </label>
            </div>
            <button className="btn btn-primary" id="btn-continue" type="submit">
              Completar
            </button>
            <button
              className="btn btn-primary"
              id="btn-back"
              type="button"
              onClick={() => navigate('/order/tu-info')}
            >
              Volver
            </button>
          </form>
          <PaymentSuccess
            title="Pago realizado"
            message="Ha completado satisfactoriamente su orden, un correo será enviado a su email con los detalles."
            visible={success}
          />
        </>
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

export default Pay;
