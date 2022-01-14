import PropTypes from 'prop-types';
import bathroom from '../../../img/services/bathroom.jpg';
import kitchen from '../../../img/services/cocinas.jpg';
import bedroom from '../../../img/services/habitaciones.jpg';
import livingroom from '../../../img/services/salas.jpg';

const CartService = (props) => {
  const { service } = props;
  const imgs = {
    Baño: bathroom,
    Cocina: kitchen,
    Sala: livingroom,
    Habitacion: bedroom,
  };
  return (
    <div className="shelf-item" id={service.name}>
      <div className="shelf-item__thumb">
        <img src={imgs[service.name]} alt={service.name} />
      </div>
      <div className="shelf-item__details">
        <p className="title">{service.title}</p>
        <p className="desc">Cantidad: {service.cantidad}</p>
      </div>
      <div className="shelf-item__price">
        <p>{`$${service.precio * service.cantidad}`}</p>
      </div>
    </div>
  );
};

CartService.propTypes = {
  service: PropTypes.objectOf(PropTypes.any),
};

CartService.defaultProps = {
  service: {},
};
export default CartService;
