import heroImage from '../../img/hero-image.jpg';
import './styles.scss';

const HeroSection = () => (
  <section className="hero-section">
    <img className="hero-section__image" src={heroImage} alt="imagen-hero" />
    <h2 className="hero-section__title">El mejor servicio, al mejor precio</h2>
    <p className="hero-section__information">Personal experimentado. Todo gestionado online. Un servicio de limpieza que sí funciona.</p>
    <button className="hero-section--button" type="button">Mira los planes</button>
  </section>
);

export default HeroSection;
