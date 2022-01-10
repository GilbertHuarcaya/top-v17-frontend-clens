const Pay = () => {
  return (
    <div className="specifications">
      <form action="">
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
                name="cardnumber"
                data-elements-stable-field-name="cardNumber"
                inputMode="numeric"
                aria-label="Número de la tarjeta de crédito o débito"
                placeholder="1234 1234 1234 1234"
                aria-invalid="false"
                value=""
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <div className="slot">
            <label className="control-label" htmlFor="distrito">
              <span> Fecha de expiración </span>
              <div className="slot">
                <input
                  className="InputElement is-empty Input Input--empty input-text"
                  autoComplete="cc-exp"
                  autoCorrect="off"
                  spellCheck="false"
                  type="text"
                  name="exp-date"
                  data-elements-stable-field-name="cardExpiry"
                  inputMode="numeric"
                  aria-label="Fecha de caducidad de la tarjeta de crédito o débito"
                  placeholder="MM / AA"
                  aria-invalid="false"
                  value=""
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
                  name="cvc"
                  data-elements-stable-field-name="cardCvc"
                  inputMode="numeric"
                  aria-label="CVC/CVV de la tarjeta de crédito o débito"
                  placeholder="123"
                  aria-invalid="false"
                  value=""
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
        <button className="btn btn-primary" id="btn-back" type="button">
          Volver
        </button>
      </form>
    </div>
  );
};

export default Pay;
