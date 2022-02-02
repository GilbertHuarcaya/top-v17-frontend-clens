import { Link } from 'react-router-dom';
import './styles.scss';

const BtnSolicita = () => (
  <section className="btn-solicita">
    <h2 className="btn-solicita__title">
      ¿Listo para contactar a un personal Clens?
    </h2>
    <Link to="/order/cotiza" className="btn-solicita__button">
      Vamos
    </Link>
  </section>
);

export default BtnSolicita;
