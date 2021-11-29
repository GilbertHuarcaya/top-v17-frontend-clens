import './styles.scss';
import MinititleTitle from '../MinititleTitle';
import CardsReseñas from '../CardsReseñas';

const ReviewsHome = () => {
  const reseñas = [
    {
      title: 'Muy cordiales',
      info: 'El servicio fue muy puntual y coordial, el personal se identifico adecuadamente y terminaron a la hora pactada, próximamente volveré a contactarlos',
      client: 'Pedro Becerra',
      img: 'https://randomuser.me/api/portraits/men/56.jpg',
      id: 'review1',
    },
    {
      title: '¡Son muy puntuales!',
      info: 'Llevo 2 meses contratando el servicio mensual de Clens y estoy encantado, agendo los días con anticipación el primer día del mes y siempre llegan puntuales',
      client: 'María Manuela',
      img: 'https://randomuser.me/api/portraits/women/54.jpg',
      id: 'review2',
    },
    {
      title: 'Muy cordiales',
      info: 'Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado',
      client: 'Manuel Maldonado',
      img: 'https://randomuser.me/api/portraits/men/34.jpg',
      id: 'review2',
    },
  ];
  return (
    <section className="reviews">
      <MinititleTitle
        title="Reseñas de nuestros clientes"
        minititle="Reseñas"
      />
      <CardsReseñas reseñas={reseñas} />
    </section>
  );
};

export default ReviewsHome;
