import './styles.scss';
import MinititleTitle from '../MinititleTitle';
import CardsReviews from '../CardsReviews';

const ReviewsHome = () => {
  const reseñas = [
    {
      title: 'Muy cordiales',
      info: 'El servicio fue muy puntual y coordial, el personal se identifico adecuadamente y terminaron a la hora pactada, próximamente volveré a contactarlos',
      client: 'Pedro Becerra',
      img: 'https://randomuser.me/api/portraits/men/56.jpg',
      reviewid: 1,
      rate: '⭐⭐⭐⭐⭐',
    },
    {
      title: '¡Son muy puntuales!',
      info: 'Llevo 2 meses contratando el servicio mensual de Clens y estoy encantado, agendo los días con anticipación el primer día del mes y siempre llegan puntuales',
      client: 'María Manuela',
      img: 'https://randomuser.me/api/portraits/women/54.jpg',
      reviewid: 2,
      rate: '⭐⭐⭐⭐⭐',
    },
    {
      title: 'Muy cordiales',
      info: 'Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado',
      client: 'Manuel Maldonado',
      img: 'https://randomuser.me/api/portraits/men/34.jpg',
      reviewid: 3,
      rate: '⭐⭐⭐⭐',
    },
    {
      title: 'Muy cordiales',
      info: 'Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado',
      client: 'Juan Ferrer',
      img: 'https://randomuser.me/api/portraits/men/37.jpg',
      reviewid: 4,
      rate: '⭐⭐',
    },
    {
      title: 'Muy cordiales',
      info: 'Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado',
      client: 'Jorge Mamani',
      img: 'https://randomuser.me/api/portraits/men/39.jpg',
      reviewid: 5,
      rate: '⭐⭐⭐',
    },
  ];
  return (
    <section className="reviews">
      <MinititleTitle
        title="Reseñas de nuestros clientes"
        minititle="Reseñas"
      />
      <CardsReviews reseñas={reseñas} />
    </section>
  );
};

export default ReviewsHome;
