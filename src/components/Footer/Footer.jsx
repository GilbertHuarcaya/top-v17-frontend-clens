import './Footer.scss';
import logo from '../../img/logo-clens.jpg';
import facebook from '../../img/icons/facebook.png';
import instagram from '../../img/icons/instagram.png';

const Footer = () => (
  <footer>
    <section className="logo">
      <a href="./index.html">
        <img src={logo} alt="logo-clens" />
      </a>
    </section>
    <section className="services">
      <h2>Servicios</h2>
      <ul>
        <li><a href="#">Baño</a></li>
        <li><a href="#">Cocina</a></li>
        <li><a href="#">Sala</a></li>
        <li><a href="#">Cuarto</a></li>
        <li><a href="#">Otros</a></li>
      </ul>
    </section>
    <section className="company">
      <h2>Empresa</h2>

      <ul>
        <li><a href="#">Sobre nosotros</a></li>
        <li><a href="#">Cotiza</a></li>
        <li><a href="#">Postula</a></li>
        <li><a href="#">Personal</a></li>
      </ul>
    </section>
    <section className="Support">
      <h2>Soporte</h2>
      <ul>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Política de privacidad</a></li>
        <li><a href="#">Ayuda</a></li>
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

      <a href="#" target="_blank"><img src={facebook} alt="facebook" /></a>
      <a href="#" target="_blank"><img src={instagram} alt="instagram" /></a>
    </section>

  </footer>
);

export default Footer;
