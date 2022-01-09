import { useState, useEffect } from 'react';
import './styles.scss';

const OrderTime = () => {
  const [today, setToday] = useState(true);
  const [days, setDays] = useState([]);
  const [week, setWeek] = useState(0);
  const [month, setMonth] = useState();

  const getDays = (e = week) => {
    const sevenDays = [];
    for (let i = e; i < e + 7; i += 1) {
      const day = {
        day: new Intl.DateTimeFormat('es', {
          weekday: 'short',
          day: 'numeric',
        }).format(new Date(new Date().setDate(new Date().getDate() + i))),
        disabled: false,
        dayNumber: new Date(
          new Date().setDate(new Date().getDate() + i),
        ).getDate(),
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

  useEffect(() => {
    getDays();
  }, [week]);

  const createMorningToday = () => {
    const Array = [];
    for (let i = 7; i < 12; i += 1) {
      const hora = {
        hora: `${i}:00 - ${i}:30`,
        disabled: i < new Date().getHours(),
      };
      const nextHora = {
        hora: `${i}:30 - ${i + 1}:00`,
        disabled: i < new Date().getHours(),
      };
      Array.push(hora);
      Array.push(nextHora);
    }
    return Array;
  };
  const createAfternoonToday = () => {
    const Array = [];
    for (let i = 13; i < 18; i += 1) {
      const hora = {
        hora: `${i}:00 - ${i}:30`,
        disabled: i < new Date().getHours(),
      };
      const nextHora = {
        hora: `${i}:30 - ${i + 1}:00`,
        disabled: i < new Date().getHours(),
      };
      Array.push(hora);
      Array.push(nextHora);
    }
    return Array;
  };
  const createMorning = () => {
    const Array = [];
    for (let i = 7; i < 12; i += 1) {
      const hora = { hora: `${i}:00 - ${i}:30`, disabled: false };
      const nextHora = { hora: `${i}:30 - ${i + 1}:00`, disabled: false };
      Array.push(hora);
      Array.push(nextHora);
    }
    return Array;
  };

  const createAfternoon = () => {
    const Array = [];
    for (let i = 13; i < 18; i += 1) {
      const hora = { hora: `${i}:00 - ${i}:30`, disabled: false };
      const nextHora = { hora: `${i}:30 - ${i + 1}:00`, disabled: false };
      Array.push(hora);
      Array.push(nextHora);
    }
    return Array;
  };

  return (
    <div className="order-time">
      <form action="">
        <div className="form-group">
          <p>
            ¿Cómo <strong>ingresará</strong> el personal de limpieza al lugar?
          </p>
          <div className="control-place">
            <label className="option-label" htmlFor="home">
              <input
                type="radio"
                name="enter-place"
                id="home"
                defaultValue="Alguien estará en casa"
                defaultChecked
              />
              <span> Alguien estará en casa</span>
            </label>
            <label className="option-label" htmlFor="call">
              <input
                type="radio"
                name="enter-place"
                id="call"
                defaultValue="Llamar a mi número de celular antes"
              />
              <span>Llamar a mi número de celular antes</span>
            </label>
            <label className="option-label" htmlFor="keys">
              <input
                type="radio"
                name="enter-place"
                id="keys"
                defaultValue="Se le dejara la llave de acceso"
              />
              <span>Se le dejara la llave de acceso</span>
            </label>
          </div>
          <label className="control-label" htmlFor="postcode">
            Comentarios (opcional):
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
                <label className="option-label" htmlFor={e.dayNumber} key={e}>
                  <input
                    type="radio"
                    name="days"
                    id={e.dayNumber}
                    onChange={
                      e.dayNumber === new Date().getDate()
                        ? () => setToday(true)
                        : () => setToday(false)
                    }
                    defaultChecked={e === new Date().getDate()}
                  />
                  <span>{e.day}</span>
                </label>
              ))}
            </div>
            <div className="slot-select">
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
                          name="hours"
                          id={e.hora}
                          disabled={e.disabled}
                          checked={!e.disabled}
                        />
                        <span>{e.hora}</span>
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
                          name="hours"
                          id={e.hora}
                          disabled={e.disabled}
                          checked={!e.disabled}
                        />
                        <span>{e.hora}</span>
                      </label>
                    ))}
              </div>
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
                          name="hours"
                          id={e.hora}
                          disabled={e.disabled}
                          checked={!e.disabled}
                        />
                        <span>{e.hora}</span>
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
                          name="hours"
                          id={e.hora}
                          disabled={e.disabled}
                          checked={!e.disabled}
                        />
                        <span>{e.hora}</span>
                      </label>
                    ))}
              </div>
            </div>
          </div>
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

export default OrderTime;
