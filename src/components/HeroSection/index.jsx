import './styles.scss';

const HeroSection = () => (
  <section className="hero-section">
    <h2 className="hero-section__title">
      El mejor servicio de limpieza del hogar, al mejor precio
    </h2>
    <p className="hero-section__information">
      Personal experimentado. Todo gestionado online. Un servicio de limpieza
      que sí funciona.
    </p>
    <button className="hero-section--button" type="button">
      Mira los planes
    </button>
  </section>
);

export default HeroSection;
