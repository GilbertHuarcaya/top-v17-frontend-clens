const OrderDetails = () => {
  return (
    <div className="specifications">
      <form action="">
        <div className="form-group">
          <label className="control-label" htmlFor="postcode">
            ¿A qué email se enviaran los datos de esta orden?
            <div className="slot">
              <input
                className="input-text"
                name="postal-code"
                required
                type="text"
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
                id="comentarios-direccion"
                name="comentarios-direccion"
                required
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
                id="ciudad"
                name="ciudad"
                required
                type="text"
              />
            </div>
          </label>
        </div>

        <button className="btn btn-primary" id="btn-continue" type="submit">
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
