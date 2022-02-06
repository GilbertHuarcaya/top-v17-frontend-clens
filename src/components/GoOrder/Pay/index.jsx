import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  postUserCardToken,
  postUserOrder,
  getUserOrdersFromDB,
  postUserCustomerToken,
  postUserPayment,
  getUserFromLocalStorage,
} from '../../../store/actions';
import ActionSuccess from '../../ActionSuccess';
import PaymentSuccess from '../../PaymentSuccess';
import useForm from '../../../hooks/useFormCotizar';

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
  const [formOk, setFormOk] = useState(false);
  const [formData, setFormData] = useState();
  const [loadingPayment, setLoadingPayment] = useState(false);

  const [showStoredCC, setShowStoredCC] = useState(false);
  const [showNewCCForm, setShowNewCCForm] = useState(false);
  const [CCSelected, setCCSelected] = useState(false);
  const [tokenId, setTokenId] = useState('');

  const paymentForm = {
    city: orderDetails.ciudad,
    address: orderDetails.direccion,
    phone: `${orderDetails.telefono}`,
    cellPhone: `${orderDetails.telefono}`,
    value: `${orderDetails.precio}000`,
    tokenId: `${tokenId}`,
  };

  const handleNewSubmit = async (e) => {
    e.preventDefault();

    setLoadingPayment(true);

    await postUserCardToken(dispatch, form);

    await postUserCustomerToken(dispatch);

    const response = await postUserPayment(dispatch, paymentForm);

    setFormData(response);
    if (response.success === true) {
      setLoadingPayment(false);
      setSuccess(true);
      const orderResponse = await postUserOrder(dispatch, orderDetails);
      if (orderResponse.ok) {
        setTimeout(() => {
          navigate('/mi-carrito');
        }, 6000);
      }
      await getUserOrdersFromDB(dispatch, user.id);
    } else {
      setLoadingPayment(false);
    }

    getUserFromLocalStorage(dispatch);
  };

  const handleUsedSubmit = async (e) => {
    e.preventDefault();
    setLoadingPayment(true);

    const response = await postUserPayment(dispatch, paymentForm);

    setFormData(response);
    if (response.success === true) {
      setLoadingPayment(false);
      setSuccess(true);
      const orderResponse = await postUserOrder(dispatch, orderDetails);
      if (orderResponse.ok) {
        setTimeout(() => {
          navigate('/mi-carrito');
        }, 6000);
      }
      await getUserOrdersFromDB(dispatch, user.id);
    } else {
      setLoadingPayment(false);
    }
    getUserFromLocalStorage(dispatch);
  };

  useEffect(() => {
    const validateForm = () => {
      const accept = document.getElementsByName('accept');
      if (
        Object.keys(form).length >= 5 &&
        accept[0].checked === true &&
        form.cardExpMonth.length === 2 &&
        form.cardExpYear.length === 4 &&
        form.cardCVC.length >= 3 &&
        orderDetails.precio > 10
      ) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  useEffect(() => {
    getUserFromLocalStorage(dispatch);
  }, []);

  const handleClose = () => {
    setSuccess(false);
    setFormData(null);
  };

  const paymentMessage = () => {
    if (formData?.success === true) {
      return (
        <PaymentSuccess
          title="Pago realizado"
          message="Ha completado satisfactoriamente su orden, un correo será enviado a su email con los detalles."
          visible={success}
        />
      );
    }
    if (formData !== null && formData !== undefined) {
      return (
        <ActionSuccess
          title="Error"
          message={formData.message}
          redirect="/"
          button="Volver a Home"
          visible
          handleClose={handleClose}
        />
      );
    }
    return null;
  };

  const validateStoredCC = () => {
    const radios = document.getElementsByName('creditCards-Input');
    const radiosArray = Array.from(radios);
    const accept = document.getElementsByName('accept');

    radiosArray.map((r) => {
      if (r.checked === true && accept[0].checked === true) {
        return setCCSelected(true);
      }
      return setCCSelected(false);
    });
  };

  function trueStoredCC() {
    setShowStoredCC(true);
    setShowNewCCForm(false);
  }

  function trueNewCCForm() {
    setCCSelected(false);
    setShowNewCCForm(true);
    setShowStoredCC(false);
  }

  return (
    <div className="pay">
      {user ? (
        <>
          <div className="seleccion">
            <button
              type="button"
              className="seleccion-Button"
              onClick={() => trueStoredCC()}
              style={{
                backgroundColor: showStoredCC ? '#77c6ca' : 'transparent',
              }}
            >
              Guardadas
            </button>
            <button
              type="button"
              className="seleccion-Button"
              data-cy="order-btn-nueva-tarjeta"
              onClick={() => trueNewCCForm()}
              style={{
                backgroundColor: showNewCCForm ? '#77c6ca' : 'transparent',
              }}
            >
              Nueva
            </button>
          </div>

          {showStoredCC ? (
            <form onSubmit={handleUsedSubmit}>
              <div className="creditCards">
                {user?.billing?.creditCards.map((c) => (
                  <div key={c.tokenId} className="creditCards-Single">
                    <input
                      id={c.tokenId}
                      value={c.tokenId}
                      type="radio"
                      name="creditCards-Input"
                      className="creditCards-Input"
                      onChange={validateStoredCC}
                      onClick={() => setTokenId(c.tokenId)}
                    />
                    <span>{c.mask}</span>
                  </div>
                ))}
              </div>
              <div className="checkbox">
                <label htmlFor="terms-consent">
                  <input
                    formcontrolname="termsAndConditionsConsent"
                    hktrackfield="termsAndConditionsConsent"
                    id="terms-consent"
                    data-cy="order-input-accept"
                    name="accept"
                    required
                    onChange={validateStoredCC}
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
                    y autorizo a Clens a cargar mi tarjeta de pago de acuerdo
                    con estos términos.
                  </span>
                </label>
              </div>
              <button
                className="btn btn-primary"
                id="btn-continue"
                type="submit"
                disabled={!CCSelected}
              >
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
          ) : null}

          {showNewCCForm ? (
            <form onSubmit={handleNewSubmit}>
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
                      data-cy="order-input-tarjeta"
                      id="cardNumber"
                      onChange={handleChange}
                      maxLength={16}
                      data-elements-stable-field-name="cardNumber"
                      inputMode="numeric"
                      aria-label="Número de la tarjeta de crédito o débito"
                      placeholder="1234 1234 1234 1234"
                      aria-invalid="false"
                      defaultValue={form.cardNumber}
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
                        data-cy="order-input-month"
                        maxLength={2}
                        onChange={handleChange}
                        data-elements-stable-field-name="cardExpMonth"
                        inputMode="numeric"
                        aria-label="Fecha de caducidad de la tarjeta de crédito o débito"
                        placeholder="MM"
                        aria-invalid="false"
                        defaultValue={form.cardExpMonth}
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
                        data-cy="order-input-year"
                        maxLength={4}
                        onChange={handleChange}
                        data-elements-stable-field-name="cardExpYear"
                        inputMode="numeric"
                        aria-label="Fecha de caducidad de la tarjeta de crédito o débito"
                        placeholder="AAAA"
                        aria-invalid="false"
                        defaultValue={form.cardExpYear}
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
                        data-cy="order-input-cvc"
                        id="cardCVC"
                        maxLength={4}
                        onChange={handleChange}
                        data-elements-stable-field-name="cardCVC"
                        inputMode="numeric"
                        aria-label="CVC/CVV de la tarjeta de crédito o débito"
                        placeholder="123"
                        aria-invalid="false"
                        defaultValue={form.cardCVC}
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
                    data-cy="order-check-accept"
                    name="accept"
                    required
                    onChange={handleChange}
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
                    y autorizo a Clens a cargar mi tarjeta de pago de acuerdo
                    con estos términos.
                  </span>
                </label>
              </div>
              <button
                className="btn btn-primary"
                id="btn-continue"
                data-cy="order-btn-submit"
                type="submit"
                disabled={!formOk}
              >
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
          ) : null}
          {loadingPayment ? (
            <ActionSuccess
              title="Pagando"
              message="Pago en proceso..."
              visible
              handleClose={handleClose}
            />
          ) : null}
          {paymentMessage()}
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
