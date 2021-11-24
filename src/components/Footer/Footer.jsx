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
        <li><a href="https://alonsogaray.github.io/">Baño</a></li>
        <li><a href="https://alonsogaray.github.io/">Cocina</a></li>
        <li><a href="https://alonsogaray.github.io/">Sala</a></li>
        <li><a href="https://alonsogaray.github.io/">Cuarto</a></li>
        <li><a href="https://alonsogaray.github.io/">Otros</a></li>
      </ul>
    </section>
    <section className="company">
      <h2>Empresa</h2>

      <ul>
        <li><a href="https://alonsogaray.github.io/">Sobre nosotros</a></li>
        <li><a href="https://alonsogaray.github.io/">Cotiza</a></li>
        <li><a href="https://alonsogaray.github.io/">Postula</a></li>
        <li><a href="https://alonsogaray.github.io/">Personal</a></li>
      </ul>
    </section>
    <section className="Support">
      <h2>Soporte</h2>
      <ul>
        <li><a href="https://alonsogaray.github.io/">FAQs</a></li>
        <li><a href="https://alonsogaray.github.io/">Política de privacidad</a></li>
        <li><a href="https://alonsogaray.github.io/">Ayuda</a></li>
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

      <a href="https://alonsogaray.github.io/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
      <a href="https://alonsogaray.github.io/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
    </section>

  </footer>
);

export default Footer;
