import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderForm } from '../../../store/actions';
import {
  createMorningToday,
  createMorning,
  createAfternoonToday,
  createAfternoon,
} from './service';
import useForm from '../../../hooks/useForm';
import './styles.scss';

const OrderTime = () => {
  const orderDetails = useSelector((state) => state.orderDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prefilledForm = orderDetails
    ? {
        comentarioIngresoAlLugar: orderDetails.comentarioIngresoAlLugar,
        ingresoAlLugar: orderDetails.ingresoAlLugar || 'Alguien estará en casa',
      }
    : {
        ingresoAlLugar: 'Alguien estará en casa',
      };
  const { form, handleChange } = useForm(prefilledForm);
  const [today, setToday] = useState(true);
  const [days, setDays] = useState([]);
  const [week, setWeek] = useState(0);
  const [month, setMonth] = useState();
  const [formOk, setFormOk] = useState(false);

  const getDays = (e = week) => {
    const sevenDays = [];
    for (let i = e; i < e + 7; i += 1) {
      const day = {
        day: new Intl.DateTimeFormat('es', {
          weekday: 'short',
          day: 'numeric',
        }).format(new Date(new Date().setDate(new Date().getDate() + i))),
        disabled: false,
        date: new Date(
          new Date().setDate(new Date().getDate() + i),
        ).toLocaleDateString(),
        dayNumber: new Date(
          new Date().setDate(new Date().getDate() + i),
        ).getDate(),
        month: new Intl.DateTimeFormat('es', {
          month: 'long',
          year: 'numeric',
        }).format(new Date(new Date().setDate(new Date().getDate() + i))),
      };
      sevenDays.push(day);
    }
    const monthYear = new Intl.DateTimeFormat('es', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(new Date().setDate(new Date().getDate() + e)));
    setMonth(monthYear);
    setDays(sevenDays);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    getOrderForm(dispatch, { ...orderDetails, ...form });
    navigate('/order/tu-info');
  };
  const handleSelect = (ev, data) => {
    handleChange({ target: { value: data, name: 'fecha' } });
    if (Number(ev.target.value) === new Date().getDate()) {
      setToday(true);
    }
    if (Number(ev.target.value) !== new Date().getDate()) {
      setToday(false);
      setMonth(data.month);
    }
  };

  useEffect(() => {
    getDays();
  }, [week]);

  const horaDisponible = () => {
    if (form.fecha.date === new Date().toLocaleDateString()) {
      return new Date().getHours() < Number(form.horaLlegada.split(':')[0]);
    }
    return true;
  };

  useEffect(() => {
    const validateForm = () => {
      if (
        Object.keys(form).length >= 3 &&
        Object.values(form).length >= 2 &&
        form.horaLlegada &&
        horaDisponible()
      ) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  return (
    <div className="order-tiempo">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>
            ¿Cómo <strong>ingresará</strong> el personal de limpieza al lugar?
          </p>
          <div className="control-place">
            <label className="option-label" htmlFor="home">
              <input
                type="radio"
                name="ingresoAlLugar"
                onChange={handleChange}
                id="home"
                defaultValue="Alguien estará en casa"
                defaultChecked={
                  orderDetails.ingresoAlLugar
                    ? orderDetails.ingresoAlLugar ===
                        'Alguien estará en casa' || false
                    : true
                }
              />
              <div className="option-label__text">
                <p>Alguien estará en casa</p>
              </div>
            </label>
            <label className="option-label" htmlFor="call">
              <input
                type="radio"
                name="ingresoAlLugar"
                onChange={handleChange}
                id="call"
                defaultValue="Llamar a mi número de celular antes"
                defaultChecked={
                  orderDetails
                    ? orderDetails.ingresoAlLugar ===
                        'Llamar a mi número de celular antes' || false
                    : false
                }
              />
              <div className="option-label__text">
                <p>Llamar a mi número de celular antes</p>
              </div>
            </label>
            <label className="option-label" htmlFor="keys">
              <input
                type="radio"
                name="ingresoAlLugar"
                onChange={handleChange}
                id="keys"
                defaultValue="Se le dejara la llave de acceso"
                defaultChecked={
                  orderDetails
                    ? orderDetails.ingresoAlLugar ===
                        'Se le dejara la llave de acceso' || false
                    : false
                }
              />
              <div className="option-label__text">
                <p>Se le dejara la llave de acceso</p>
              </div>
            </label>
          </div>
          <label className="control-label" htmlFor="infoHome">
            Comentarios (opcional):
            <div className="slot">
              <input
                className="input-text"
                name="comentarioIngresoAlLugar"
                onChange={handleChange}
                type="text"
                defaultValue={
                  orderDetails
                    ? orderDetails.comentarioIngresoAlLugar || ''
                    : ''
                }
              />
            </div>
          </label>
        </div>

        <div className="form-group">
          <div className="control-label" htmlFor="cleaningMaterials">
            <p>
              ¿Cuándo te gustaria que el personal de limpieza llegue al lugar?
            </p>
            <p className="help-block">
              Trabajamos de lunes a domingo desde las 7:00 a.m. hasta las 8:00
              p.m.
            </p>
            <div className="slot">
              <button
                className="number-input-button number-input-button-previous"
                type="button"
                onClick={() => setWeek(week - 7)}
                disabled={week === 0}
              >
                –
              </button>
              <div className="number-input-select">{month}</div>
              {/*
              Aqui se puede modificar la canfidad de dias máximos que se quiere ver en total en la aplicacion
              */}
              <button
                className="number-input-button number-input-button-next"
                type="button"
                onClick={() => setWeek(week + 7)}
                disabled={week > 40}
              >
                +
              </button>
            </div>
            <div className="slot slot-days">
              {days.map((e) => (
                <label
                  className="option-label"
                  htmlFor={e.dayNumber}
                  key={e.dayNumber}
                >
                  <input
                    type="radio"
                    name="day"
                    id={e.dayNumber}
                    onChange={(ev) => handleSelect(ev, e)}
                    defaultChecked={e === new Date().getDate()}
                    defaultValue={e.dayNumber}
                  />
                  <div className="option-label__text">
                    <p>{e.day}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="slot-select">
              {form.fecha ? (
                <div className="option-label option-label-select-hour">
                  <p>Mañana</p>
                  {today
                    ? createMorningToday().map((e) => (
                        <label
                          className="option-label btn-time-slot"
                          htmlFor={e.hora}
                          key={e.hora}
                        >
                          <input
                            type="radio"
                            name="horaLlegada"
                            id={e.hora}
                            onChange={handleChange}
                            disabled={e.disabled}
                            defaultValue={e.disabled ? '' : e.hora}
                          />
                          <div className="option-label__text">
                            <p>{e.horaLlegada}</p>
                          </div>
                        </label>
                      ))
                    : createMorning().map((e) => (
                        <label
                          className="option-label btn-time-slot"
                          htmlFor={e.hora}
                          key={e.hora}
                        >
                          <input
                            type="radio"
                            name="horaLlegada"
                            id={e.hora}
                            onChange={handleChange}
                            disabled={e.disabled}
                            defaultValue={e.hora}
                          />
                          <div className="option-label__text">
                            <p>{e.horaLlegada}</p>
                          </div>
                        </label>
                      ))}
                </div>
              ) : null}
              {form.fecha ? (
                <div className="option-label option-label-select-hour">
                  <p className="mb-5 text-center strong">Tarde</p>
                  {today
                    ? createAfternoonToday().map((e) => (
                        <label
                          className="option-label btn-time-slot"
                          htmlFor={e.hora}
                          key={e.hora}
                          disabled={e.disabled}
                        >
                          <input
                            type="radio"
                            name="horaLlegada"
                            id={e.hora}
                            disabled={e.disabled}
                            onChange={handleChange}
                            defaultValue={e.disabled ? '' : e.hora}
                          />
                          <div className="option-label__text">
                            <p>{e.horaLlegada}</p>
                          </div>
                        </label>
                      ))
                    : createAfternoon().map((e) => (
                        <label
                          className="option-label btn-time-slot"
                          htmlFor={e.hora}
                          key={e.hora}
                          disabled={e.disabled}
                        >
                          <input
                            type="radio"
                            name="horaLlegada"
                            id={e.hora}
                            onChange={handleChange}
                            disabled={e.disabled}
                            defaultValue={e.hora}
                          />
                          <div className="option-label__text">
                            <p>{e.horaLlegada}</p>
                          </div>
                        </label>
                      ))}
                </div>
              ) : null}
            </div>
          </div>
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
          onClick={() => navigate('/order/cotiza')}
        >
          Volver
        </button>
      </form>
    </div>
  );
};

export default OrderTime;
