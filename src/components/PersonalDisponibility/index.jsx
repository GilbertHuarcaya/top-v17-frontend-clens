import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { patchPersonalDisponibility } from '../../store/actions';
import useForm from '../../hooks/useForm';
import './styles.scss';

const PersonalDisponibility = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prefilledForm = user?.disponibility
    ? {
        workDays: user?.disponibility?.workDays,
        startHour: user?.disponibility?.startHour,
        finishHour: user?.disponibility?.startHour,
      }
    : {
        startHour: '07:00',
        finishHour: '20:00',
      };
  const { form, handleChange } = useForm(prefilledForm);
  const [formOk, setFormOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* loginUser(dispatch, form); */

    patchPersonalDisponibility(dispatch, { ...form, userId: user.id });
    navigate('/order/pago');
  };

  useEffect(() => {
    const validateForm = () => {
      if (Object.keys(form)?.length >= 3) {
        return setFormOk(true);
      }
      return setFormOk(false);
    };
    validateForm();
  }, [handleChange]);

  return (
    <div className="disponibility">
      {user ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p>
              Durante este mes ¿<strong>qué dias</strong> trabajarás?
            </p>
            <div className="control-place">
              <label className="option-label" htmlFor="everyday">
                <input
                  type="radio"
                  name="workDays"
                  onChange={handleChange}
                  id="everyday"
                  defaultValue="Todos los dias"
                  defaultChecked={
                    user?.disponibility?.workDays === 'Todos los dias' || false
                  }
                />
                <div className="option-label__text">
                  <p>Todos los dias</p>
                </div>
              </label>
              <label className="option-label" htmlFor="weekday">
                <input
                  type="radio"
                  name="workDays"
                  onChange={handleChange}
                  id="weekday"
                  defaultValue="Dias de semana"
                  defaultChecked={
                    user?.disponibility?.workDays === 'Dias de semana' || false
                  }
                />
                <div className="option-label__text">
                  <p>Dias de semana</p>
                </div>
              </label>
              <label className="option-label" htmlFor="weekends">
                <input
                  type="radio"
                  name="workDays"
                  onChange={handleChange}
                  id="weekends"
                  defaultValue="Fines de semana solamente"
                  defaultChecked={
                    user?.disponibility?.workDays ===
                      'Fines de semana solamente' || false
                  }
                />
                <div className="option-label__text">
                  <p>Fines de semana solamente</p>
                </div>
              </label>
              <label className="option-label" htmlFor="LMV">
                <input
                  type="radio"
                  name="workDays"
                  onChange={handleChange}
                  id="LMV"
                  defaultValue="Lunes Miercoles Viernes"
                  defaultChecked={
                    user?.disponibility?.workDays ===
                      'Lunes Miercoles Viernes' || false
                  }
                />
                <div className="option-label__text">
                  <p>Lunes Miercoles Viernes</p>
                </div>
              </label>
              <label className="option-label" htmlFor="MJS">
                <input
                  type="radio"
                  name="workDays"
                  onChange={handleChange}
                  id="MJS"
                  defaultValue="Martes Jueves y Sábado"
                  defaultChecked={
                    user?.disponibility?.workDays ===
                      'Martes Jueves y Sábado' || false
                  }
                />
                <div className="option-label__text">
                  <p>Martes Jueves y Sábado</p>
                </div>
              </label>
            </div>
          </div>
          {/* <div className="form-group">
            <label className="control-label" htmlFor="email">
              ¿A qué email se enviaran los datos de esta orden?
              <div className="slot">
                <input
                  className="input-text"
                  name="startDay"
                  onChange={handleChange}
                  required
                  type="date"
                  defaultValue={user.email}
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
                  name="finishDay"
                  onChange={handleChange}
                  required
                  type="date"
                  defaultValue={PersonalDisponibility.fullname || user.fullname}
                />
              </div>
            </label>
          </div> */}
          <div className="form-group">
            <label className="control-label" htmlFor="telefono">
              Hora de inicio laboral
              <div className="slot">
                <input
                  className="input-text"
                  onChange={handleChange}
                  name="startHour"
                  required
                  type="time"
                  defaultValue={user?.disponibility?.startHour || '07:00'}
                />
              </div>
            </label>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="direccion">
              Hora de cierre laboral
              <div className="slot">
                <input
                  className="input-text"
                  onChange={handleChange}
                  name="finishHour"
                  required
                  type="time"
                  defaultValue={user?.disponibility?.finishHour || '20:00'}
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
            Actualizar
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

export default PersonalDisponibility;
