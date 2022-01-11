import { useEffect, useState } from 'react';
import MinititleTitle from '../MinititleTitle';
import CardsServices from './CardsServices';
import './styles.scss';
import getAllServices from './services';

const ServicesHome = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await getAllServices();
        setTimeout(() => {
          setServices(data);
        }, 1000);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getServices();
  }, []);

  return (
    <section className="home-services">
      <MinititleTitle
        minititle="Qué obtienes con los servicios Clens"
        title="Vamos más allá que solo limpieza"
        info="Tenemos altos estandares para un servicio de limpieza minucioso y atento. Al recibir un servicio de limpieza de Clens puedes estar seguro que es calidad. Esto está incluido en cada servicio:"
      />
      {services.length > 0 ? (
        <CardsServices services={services} />
      ) : (
        <h1>Loading ...</h1>
      )}
    </section>
  );
};
export default ServicesHome;
