import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../img/logo-clens.jpg';
import facebook from '../../img/icons/facebook.png';
import instagram from '../../img/icons/instagram.png';

const Footer = () => (
  <footer>
    <section className="logo">
      <Link to="/">
        <img src={logo} alt="logo-clens" />
      </Link>
    </section>
    <section className="services">
      <h2>Servicios</h2>
      <ul>
        <li>
          <Link to="/baño">Baño</Link>
        </li>
        <li>
          <Link to="/cocina">Cocina</Link>
        </li>
        <li>
          <Link to="/sala">Sala</Link>
        </li>
        <li>
          <Link to="/cuarto">Cuarto</Link>
        </li>
        <li>
          <Link to="/otros">Otros</Link>
        </li>
      </ul>
    </section>
    <section className="company">
      <h2>Empresa</h2>

      <ul>
        <li>
          <Link to="/about-us">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/cotiza">Cotiza</Link>
        </li>
        <li>
          <Link to="/postula">Postula</Link>
        </li>
        <li>
          <Link to="/personal">Personal</Link>
        </li>
      </ul>
    </section>
    <section className="Support">
      <h2>Soporte</h2>
      <ul>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/policy">Política de privacidad</Link>
        </li>
        <li>
          <Link to="/help">Ayuda</Link>
        </li>
      </ul>
    </section>
    <section className="contact">
      <h2>Contáctenos</h2>
      <ul>
        <li>contacto@clens.com</li>
        <li>Lima / Perú</li>
        <li>+51 123456789</li>
      </ul>
    </section>
    <section className="social-networks">
      <h2>Nuestras redes</h2>

      <Link to="facebook.com" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook" />
      </Link>
      <Link to="instagram.com" target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram" />
      </Link>
    </section>
  </footer>
);

export default Footer;
