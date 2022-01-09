/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles.scss';

const Cotiza = () => {
  const [selectedCocina, setSelectedCocina] = useState(1);
  const [selectedHabitacion, setSelectedHabitacion] = useState(1);
  const [selectedBaño, setSelectedBaño] = useState(1);
  const [selectedSala, setSelectedSala] = useState(1);

  const checkNext = (service) => {
    switch (service) {
      case 'cocina':
        setSelectedCocina(selectedCocina === 7 ? 1 : selectedCocina + 1);
        break;
      case 'habitacion':
        setSelectedHabitacion(
          selectedHabitacion === 7 ? 1 : selectedHabitacion + 1,
        );
        break;
      case 'baño':
        setSelectedBaño(selectedBaño === 7 ? 1 : selectedBaño + 1);
        break;
      default:
        setSelectedSala(selectedSala === 7 ? 1 : selectedSala + 1);
        break;
    }
  };
  const checkBefore = (service) => {
    switch (service) {
      case 'cocina':
        setSelectedCocina(selectedCocina === 1 ? 7 : selectedCocina - 1);
        break;
      case 'habitacion':
        setSelectedHabitacion(
          selectedHabitacion === 1 ? 7 : selectedHabitacion - 1,
        );
        break;
      case 'baño':
        setSelectedBaño(selectedBaño === 1 ? 7 : selectedBaño - 1);
        break;
      default:
        setSelectedSala(selectedSala === 1 ? 7 : selectedSala - 1);
        break;
    }
  };

  return (
    <div className="cotiza">
      <form action="">
        <h2 className="headline">Personaliza tu limpieza</h2>
        <div className="form-group">
          <label className="control-label" htmlFor="distrito">
            <span> ¿En qué distrito vives? </span>
            <div className="slot">
              <input
                className="input-text"
                name="distrito"
                required
                type="text"
                id="distrito"
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <div className="control-label">
            <p>
              ¿Cuántas <strong>habitaciones por servicio</strong> necesitas
              limpiar?
            </p>
            <label htmlFor="cocinas">
              <span>cocina</span>

              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('cocina')}
                >
                  –
                </button>
                {/* <span className="number-input-select">{`${selectedCocina} ${
                  selectedCocina > 1 ? 'cocinas' : 'cocina'
                }`}</span> */}
                <select
                  className="number-input-select"
                  id="cocinas"
                  onChange={(e) => setSelectedCocina(Number(e.target.value))}
                  value={selectedCocina}
                >
                  <option value="1"> 1 cocina </option>
                  <option value="2"> 2 cocinas </option>
                  <option value="3"> 3 cocinas </option>
                  <option value="4"> 4 cocinas </option>
                  <option value="5"> 5 cocinas </option>
                  <option value="6"> 6 cocinas </option>
                  <option value="7"> 7 cocinas </option>
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
              <span> habitación </span>
              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('habitacion')}
                >
                  –
                </button>

                <select
                  className="number-input-select"
                  onChange={(e) =>
                    setSelectedHabitacion(Number(e.target.value))
                  }
                  value={selectedHabitacion}
                >
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
              <span> baño </span>
              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('baño')}
                >
                  –
                </button>

                <select
                  className="number-input-select"
                  onChange={(e) => setSelectedBaño(Number(e.target.value))}
                  value={selectedBaño}
                >
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
              <span> sala </span>
              <div className="slot">
                <button
                  className="number-input-button number-input-button-previous"
                  type="button"
                  onClick={() => checkBefore('sala')}
                >
                  –
                </button>

                <select
                  className="number-input-select"
                  onChange={(e) => setSelectedSala(Number(e.target.value))}
                  value={selectedSala}
                >
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
                name="hours"
                id="2hours"
                defaultValue={2}
                defaultChecked
              />
              <span>2.0</span>
            </label>
            <label className="option-label" htmlFor="2.5hours">
              <input
                type="radio"
                name="hours"
                id="2.5hours"
                defaultValue={2.5}
              />
              <span>2.5</span>
            </label>
            <label className="option-label" htmlFor="3hours">
              <input type="radio" name="hours" id="3hours" defaultValue={3} />
              <span>3.0</span>
            </label>
            <label className="option-label" htmlFor="3.5hours">
              <input
                type="radio"
                name="hours"
                id="3.5hours"
                defaultValue={3.5}
              />
              <span>3.5</span>
            </label>
            <label className="option-label" htmlFor="4hours">
              <input type="radio" name="hours" id="4hours" defaultValue={4} />
              <span>4.0</span>
            </label>
            <label className="option-label" htmlFor="4.5hours">
              <input
                type="radio"
                name="hours"
                id="4.5hours"
                defaultValue={4.5}
              />
              <span>4.5</span>
            </label>
            <label className="option-label" htmlFor="5hours">
              <input type="radio" name="hours" id="5hours" defaultValue={5} />
              <span>5.0</span>
            </label>
            <label className="option-label" htmlFor="5.5hours">
              <input
                type="radio"
                name="hours"
                id="5.5hours"
                defaultValue={5.5}
              />
              <span>5.5</span>
            </label>
            <label className="option-label" htmlFor="6hours">
              <input type="radio" name="hours" id="6hours" defaultValue={6} />
              <span>6.0</span>
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
                  name="select-2"
                  id="select-1"
                  defaultChecked
                />

                <span>Incluir productos de limpieza (+$10.00)</span>
              </label>

              <label
                className="option-label option-label-select"
                htmlFor="select-2"
              >
                <input type="radio" name="select-2" id="select-2" />

                <span>Yo los prooveré</span>
              </label>
            </div>
          </div>
          <p className="help-block">
            Incluye aerosoles, liquidos embotellados y paños. Tu personal de
            limpieza asignado no puede traer una aspiradora, trapeador, balde u
            otros productos pesados.
          </p>
        </div>
        <button className="btn btn-primary" id="btn-continue" type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default Cotiza;
