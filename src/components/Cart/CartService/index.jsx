import { useState } from 'react';
import PropTypes from 'prop-types';

const CartService = (props) => {
  const { service, value, removeProduct, subTotalPlus, subTotalMinus } = props;
  const [ownquantity, setOwnQuantity] = useState(1);

  function handleOnDecrease() {
    subTotalMinus(service);

    setOwnQuantity(ownquantity + 1);
  }
  function handleOnIncrease() {
    subTotalPlus(service);
    setOwnQuantity(ownquantity + 1);
  }

  return (
    <div className="shelf-item" key={value}>
      <button
        className="shelf-item__del"
        onClick={() => removeProduct(service)}
        type="button"
      >
        .
      </button>
      <div className="shelf-item__thumb">
        <img src={service.img} alt={service.title} />
      </div>
      <div className="shelf-item__details">
        <p className="title">{service.title}</p>
        <p className="desc">Cantidad: {service.quantity}</p>
      </div>
      <div className="shelf-item__price">
        <p>{`$${service.price * service.quantity}`}</p>
        <div>
          <button
            type="button"
            onClick={handleOnDecrease}
            disabled={service.quantity === 1}
            className="change-product-button"
          >
            -
          </button>
          <button
            type="button"
            onClick={handleOnIncrease}
            className="change-product-button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

CartService.propTypes = {
  service: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.objectOf(PropTypes.string),
  removeProduct: PropTypes.func,
  subTotalPlus: PropTypes.func,
  subTotalMinus: PropTypes.func,
};

CartService.defaultProps = {
  service: {},
  value: {},
  removeProduct: () => {},
  subTotalPlus: () => {},
  subTotalMinus: () => {},
};
export default CartService;