import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartService from './CartService';
import getAllServices from './services';
import Review from '../Review';

import './styles.scss';

const FloatCart = () => {
  const navigate = useNavigate();
  const [servicesAdded, setServicesAdded] = useState([]);
  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await getAllServices();

        setTimeout(() => {
          setServicesAdded(data);
        }, 1000);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getServices();
  }, []);

  function proceedToCheckout() {
    // eslint-disable-next-line no-console
    console.log('ir a comprar!');
    navigate('/order/cotiza');
  }

  const removeProduct = (product) => {
    const index = servicesAdded.findIndex(
      (p) => p.serviceid === product.serviceid,
    );
    if (index >= 0) {
      const a = servicesAdded.filter((p) => p.serviceid !== product.serviceid);
      setServicesAdded(a);
    }
  };

  function subTotalSum() {
    const total = setSubTotal(
      servicesAdded.reduce(
        (sum, value) =>
          typeof value.quantity === 'number'
            ? sum + value.quantity * value.price
            : sum,
        0,
      ),
    );
    return total;
  }
  const subTotalPlus = (service) => {
    const index = servicesAdded.findIndex(
      (p) => p.serviceid === service.serviceid,
    );
    if (index >= 0) {
      servicesAdded[index].quantity += 1;
      subTotalSum();
      setServicesAdded(servicesAdded);
    }
  };

  const subTotalMinus = (service) => {
    const index = servicesAdded.findIndex(
      (p) => p.serviceid === service.serviceid,
    );
    if (index >= 0) {
      servicesAdded[index].quantity -= 1;
      subTotalSum();
      setServicesAdded(servicesAdded);
    }
  };

  useEffect(() => {
    const totalCount = () => {
      subTotalSum();
    };
    totalCount();
  }, [subTotalPlus, subTotalMinus]);

  return (
    <div className="cart">
      <div className="cart__header">
        <span className="bag">
          <span className="bag__quantity">{servicesAdded.length}</span>
        </span>
        <span className="header-title">Servicios de Limpieza en proceso</span>
      </div>
      <div className="cart__content">
        <div className="cart__shelf-container">
          {servicesAdded.length > 0 ? (
            servicesAdded.map((p) => {
              return (
                <CartService
                  service={p}
                  key={p.serviceid}
                  removeProduct={removeProduct}
                  subTotalPlus={subTotalPlus}
                  subTotalMinus={subTotalMinus}
                />
              );
            })
          ) : (
            <p className="shelf-empty">
              Add some services in the cart <br />
              :)
            </p>
          )}
        </div>

        <div className="cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">{`$${subTotal}`}</p>
          </div>
          <div className="buy">
            <button
              type="button"
              onClick={() => proceedToCheckout()}
              className="buy-btn"
            >
              Cotiza segun tu ubicación
            </button>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default FloatCart;
