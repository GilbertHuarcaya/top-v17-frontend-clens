import MinititleTitle from '../MinititleTitle';
import CardsServices from '../CardsServices';
import './styles.scss';

const ServicesHome = () => {
  const services = [
    {
      title: 'Cocinas',
      info: 'Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección.',
      img: 'https://images.unsplash.com/photo-1567767326925-e2047bf469d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      serviceid: 1,
      items: [
        'Pisos',
        'Brillado en cromos',
        'Lunas',
        'Campana',
        'Desempolvar superficies',
        'Hornillas y lavaderos',
      ],
    },
    {
      title: 'Baños',
      info: 'Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y  productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de Baños.',
      img: 'https://images.unsplash.com/flagged/photo-1556438758-84625859c6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3274&q=80',
      serviceid: 2,
      items: [
        'Pisos',
        'Brillado en cromos',
        'Espejos',
        'Lunas de duchas',
        'Mayolicas',
        'Desempolvar gabinetes',
      ],
    },
    {
      title: 'Salas',
      info: 'Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de zonas amplias como salas y salones.',
      img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      serviceid: 3,
      items: [
        'Pisos',
        'Brillado en cromos',
        'Lunas',
        'Limpieza muebles y tapiz',
        'Desempolvar superficies',
        'Desempolvar cortinas',
      ],
    },
    {
      title: 'Habitaciones',
      info: 'Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de habitaciones y muebles.',
      img: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      serviceid: 4,
      items: [
        'Pisos',
        'Cama',
        'Alfombras',
        'Cajones',
        'Limpieza muebles y tapiz',
        'Desempolvar cortinas',
      ],
    },
  ];
  return (
    <section className="home-services">
      <MinititleTitle
        minititle="Qué obtienes con los servicios Clens"
        title="Vamos más allá que solo limpieza"
        info="Tenemos altos estandares para un servicio de limpieza minucioso y atento. Al recibir un servicio de limpieza de Clens puedes estar seguro que es calidad. Esto está incluido en cada servicio:"
      />
      <CardsServices services={services} />
    </section>
  );
};
export default ServicesHome;
