import TitleMinititle from '../TitleMinititleInfo';
import Cards from '../Cards/Index';
import './styles.scss';

const ServicesHome = () => (
  <section className="home-services">
    <TitleMinititle
      minititle="Qué obtienes con los servicios Clens"
      title="Vamos más allá que solo limpieza"
      info="Tenemos altos estandares para un servicio de limpieza minucioso y atento. Al recibir un servicio de limpieza de Clens puedes estar seguro que es calidad. Esto está incluido en cada servicio:"
    />
    <Cards />
  </section>
);

export default ServicesHome;
