/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderForm } from '../../../store/actions';
import useForm from '../../../hooks/useForm';
import './styles.scss';

const Cotiza = () => {
  const orderDetails = useSelector((state) => state.orderDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prefilledForm =
    Object.keys(orderDetails).length >= 4
      ? orderDetails
      : {
          horasPorServicio: '2',
          incluirProductos: 'si',
        };
  const { form, handleChange } = useForm(prefilledForm);
  const [selectedCocina, setSelectedCocina] = useState('0');
  const [selectedHabitacion, setSelectedHabitacion] = useState('0');
  const [selectedBaño, setSelectedBaño] = useState('0');
  const [selectedSala, setSelectedSala] = useState('0');
  const [formOk, setFormOk] = useState(false);

  const getServiceAmount = (e) => {
    switch (e.target.name) {
      case 'cocina':
        setSelectedCocina(e.target.value);
        handleChange(e);
        break;
      case 'habitacion':
        setSelectedHabitacion(e.target.value);
        handleChange(e);
        break;
      case 'baño':
        setSelectedBaño(e.target.value);
        handleChange(e);
        break;
      default:
        setSelectedSala(e.target.value);
        handleChange(e);
        break;
    }
  };
  const checkNext = (service) => {
    switch (service) {
      case 'cocina':
        getServiceAmount({
          target: {
            value:
              selectedCocina === '7' ? '0' : String(Number(selectedCocina) + 1),
            name: 'cocina',
          },
        });
        break;
      case 'habitacion':
        getServiceAmount({
          target: {
            value:
              selectedHabitacion === '7'
                ? '0'
                : String(Number(selectedHabitacion) + 1),
            name: 'habitacion',
          },
        });
        break;
      case 'baño':
        getServiceAmount({
          target: {
            value:
              selectedBaño === '7' ? '0' : String(Number(selectedBaño) + 1),
            name: 'baño',
          },
        });
        break;
      default:
        getServiceAmount({
          target: {
            value:
              selectedSala === '7' ? '0' : String(Number(selectedSala) + 1),
            name: 'sala',
          },
        });
        break;
    }
  };
  const checkBefore = (service) => {
    switch (service) {
      case 'cocina':
        getServiceAmount({
          target: {
            value:
              selectedCocina === '0' ? '7' : String(Number(selectedCocina) - 1),
            name: 'cocina',
          },
        });
        break;
      case 'habitacion':
        getServiceAmount({
          target: {
            value:
              selectedHabitacion === '0'
                ? '7'
                : String(Number(selectedHabitacion) - 1),
            name: 'habitacion',
          },
        });
        break;
      case 'baño':
        getServiceAmount({
          target: {
            value:
              selectedBaño === '0' ? '7' : String(Number(selectedBaño) - 1),
            name: 'baño',
          },
        });
        break;
      default:
        getServiceAmount({
          target: {
            value:
              selectedSala === '0' ? '7' : String(Number(selectedSala) - 1),
            name: 'sala',
          },
        });
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* loginUser(dispatch, form); */
    getOrderForm(dispatch, { ...orderDetails, ...form });
    navigate('/order/tiempo');
  };

  useEffect(() => {
    getOrderForm(dispatch, form);
  }, [form]);

  useEffect(() => {
    const validateForm = () => {
      try {
        if (Object.keys(form).length >= 4) {
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
    <div className="cotiza">
      <form onSubmit={handleSubmit}>
        <h2 className="headline">Personaliza tu limpieza</h2>
        <div className="form-group">
          <label className="control-label" htmlFor="distrito">
            <span>
              {' '}
              ¿En qué <strong>distrito</strong> vives?{' '}
            </span>
            <div className="slot">
              <input
                className="input-text"
                name="distrito"
                required
                type="text"
                id="distrito"
                onChange={handleChange}
                defaultValue={orderDetails.distrito || ''}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <div className="control-label">
            <p>
              ¿Cuántas <strong>cuartos por servicio</strong> necesitas limpiar?
            </p>
            <label htmlFor="cocinas">
              <span>Servicio de Limpieza de cocina</span>

              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('cocina')}
                >
                  –
                </button>
                <select
                  className={
                    form.cocina > 0
                      ? 'number-input-select number-input-selected'
                      : 'number-input-select'
                  }
                  name="cocina"
                  id="cocina"
                  onChange={(evt) => getServiceAmount(evt)}
                  value={orderDetails.cocina || selectedCocina}
                >
                  <option value={0}> 0 cocinas </option>
                  <option value={1}>1 cocina</option>
                  <option value={2}> 2 cocinas </option>
                  <option value={3}> 3 cocinas </option>
                  <option value={4}> 4 cocinas </option>
                  <option value={5}> 5 cocinas </option>
                  <option value={6}> 6 cocinas </option>
                  <option value={7}> 7 cocinas </option>
                </select>

                <button
                  className="number-input-button number-input-button-next"
                  type="button"
                  onClick={() => checkNext('cocina')}
                >
                  +
                </button>
              </div>
            </label>
            <label htmlFor="habitaciones">
              <span> Servicio de Limpieza de habitación </span>
              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('habitacion')}
                >
                  –
                </button>

                <select
                  className={
                    form.habitacion > 0
                      ? 'number-input-select number-input-selected'
                      : 'number-input-select'
                  }
                  name="habitacion"
                  id="habitacion"
                  onChange={(evt) => getServiceAmount(evt)}
                  value={orderDetails.habitacion || selectedHabitacion}
                >
                  <option value="0"> 0 habitaciones </option>
                  <option value="1"> 1 habitación </option>
                  <option value="2"> 2 habitaciones </option>
                  <option value="3"> 3 habitaciones </option>
                  <option value="4"> 4 habitaciones </option>
                  <option value="5"> 5 habitaciones </option>
                  <option value="6"> 6 habitaciones </option>
                  <option value="7"> 7 habitaciones </option>
                </select>
                <button
                  className="number-input-button number-input-button-next"
                  type="button"
                  onClick={() => checkNext('habitacion')}
                >
                  +
                </button>
              </div>
            </label>
            <label htmlFor="baños">
              <span> Servicio de Limpieza de baño </span>
              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('baño')}
                >
                  –
                </button>

                <select
                  className={
                    form.baño > 0
                      ? 'number-input-select number-input-selected'
                      : 'number-input-select'
                  }
                  name="baño"
                  id="baño"
                  onChange={(evt) => getServiceAmount(evt)}
                  value={orderDetails.baño || selectedBaño}
                >
                  <option value="0"> 0 baños </option>
                  <option value="1"> 1 baño </option>
                  <option value="2"> 2 baños </option>
                  <option value="3"> 3 baños </option>
                  <option value="4"> 4 baños </option>
                  <option value="5"> 5 baños </option>
                  <option value="6"> 6 baños </option>
                  <option value="7"> 7 baños </option>
                </select>

                <button
                  className="number-input-button number-input-button-next"
                  type="button"
                  onClick={() => checkNext('baño')}
                >
                  +
                </button>
              </div>
            </label>
            <label htmlFor="salas">
              <span> Servicio de Limpieza de sala </span>
              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('sala')}
                >
                  –
                </button>

                <select
                  className={
                    form.sala > 0
                      ? 'number-input-select number-input-selected'
                      : 'number-input-select'
                  }
                  name="sala"
                  id="sala"
                  onChange={(evt) => getServiceAmount(evt)}
                  value={orderDetails.sala || selectedSala}
                >
                  <option value="0"> 0 salas </option>
                  <option value="1"> 1 sala </option>
                  <option value="2"> 2 salas </option>
                  <option value="3"> 3 salas </option>
                  <option value="4"> 4 salas </option>
                  <option value="5"> 5 salas </option>
                  <option value="6"> 6 salas </option>
                  <option value="7"> 7 salas </option>
                </select>

                <button
                  className="number-input-button number-input-button-next"
                  type="button"
                  onClick={() => checkNext('sala')}
                >
                  +
                </button>
              </div>
            </label>
          </div>
        </div>
        <div className="form-group">
          <p>
            ¿Cuántas <strong>horas</strong> necesitas que el personal de
            limpieza se quede a limpiar?
          </p>
          <div className="control-hours">
            <label className="option-label" htmlFor="2hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="2hours"
                defaultValue="2"
                defaultChecked={
                  orderDetails.horasPorServicio
                    ? orderDetails.horasPorServicio === '2' || false
                    : true
                }
              />
              <div className="option-label__text">
                <p>2.0</p>
              </div>
            </label>
            <label className="option-label" htmlFor="2.5hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="2.5hours"
                defaultValue="2.5"
                defaultChecked={
                  orderDetails.horasPorServicio === '2.5' || false
                }
              />
              <div className="option-label__text">
                <p>2.5</p>
              </div>
            </label>
            <label className="option-label" htmlFor="3hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="3hours"
                defaultValue="3"
                defaultChecked={orderDetails.horasPorServicio === '3' || false}
              />
              <div className="option-label__text">
                <p>3.0</p>
              </div>
            </label>
            <label className="option-label" htmlFor="3.5hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="3.5hours"
                defaultValue="3.5"
                defaultChecked={
                  orderDetails.horasPorServicio === '3.5' || false
                }
              />
              <div className="option-label__text">
                <p>3.5</p>
              </div>
            </label>
            <label className="option-label" htmlFor="4hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="4hours"
                defaultValue="4"
                defaultChecked={orderDetails.horasPorServicio === '4' || false}
              />
              <div className="option-label__text">
                <p>4.0</p>
              </div>
            </label>
            <label className="option-label" htmlFor="4.5hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="4.5hours"
                defaultValue="4.5"
                defaultChecked={
                  orderDetails.horasPorServicio === '4.5' || false
                }
              />
              <div className="option-label__text">
                <p>4.5</p>
              </div>
            </label>
            <label className="option-label" htmlFor="5hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="5hours"
                defaultValue="5"
                defaultChecked={orderDetails.horasPorServicio === '5' || false}
              />
              <div className="option-label__text">
                <p>5.0</p>
              </div>
            </label>
            <label className="option-label" htmlFor="5.5hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="5.5hours"
                defaultValue="5.5"
                defaultChecked={
                  orderDetails.horasPorServicio === '5.5' || false
                }
              />
              <div className="option-label__text">
                <p>5.5</p>
              </div>
            </label>
            <label className="option-label" htmlFor="6hours">
              <input
                type="radio"
                name="horasPorServicio"
                onChange={handleChange}
                id="6hours"
                defaultValue="6"
                defaultChecked={orderDetails.horasPorServicio === '6' || false}
              />
              <div className="option-label__text">
                <p>6.0</p>
              </div>
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="control-label" htmlFor="cleaningMaterials">
            <p>Productos de Limpieza</p>
            <div className="slot-select">
              <label
                className="option-label option-label-select"
                htmlFor="select-1"
              >
                <input
                  type="radio"
                  name="incluirProductos"
                  onChange={handleChange}
                  id="select-1"
                  defaultValue="si"
                  defaultChecked={
                    orderDetails.incluirProductos
                      ? orderDetails.incluirProductos === 'si' || false
                      : true
                  }
                />

                <div className="option-label__text">
                  <p>Incluir productos de limpieza (+$10.00)</p>
                </div>
              </label>

              <label
                className="option-label option-label-select"
                htmlFor="select-2"
              >
                <input
                  type="radio"
                  name="incluirProductos"
                  onChange={handleChange}
                  defaultValue="no"
                  id="select-2"
                  defaultChecked={
                    orderDetails.incluirProductos === 'no' || false
                  }
                />
                <div className="option-label__text">
                  <p>Yo los prooveré</p>
                </div>
              </label>
            </div>
          </div>
          <p className="help-block">
            Incluye aerosoles, liquidos embotellados y paños. Tu personal de
            limpieza asignado no puede traer una aspiradora, trapeador, balde u
            otros productos pesados.
          </p>
        </div>
        <button
          className="btn btn-primary"
          id="btn-continue"
          type="submit"
          disabled={!formOk}
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default Cotiza;
