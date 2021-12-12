import { useEffect, useState } from 'react';
import CartService from './CartService';
import getAllServices from './services';

import './styles.scss';

const FloatCart = () => {
  const [servicesAdded, setServicesAdded] = useState([]);
  const [subTotal, setSubTotal] = useState();

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

  useEffect(() => {
    const totalCount = () => {
      subTotalSum();
    };
    totalCount();
  });

  function proceedToCheckout() {
    // eslint-disable-next-line no-console
    console.log('ir a comprar!');
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

  const subTotalPlus = (service) => {
    const index = servicesAdded.findIndex(
      (p) => p.serviceid === service.serviceid,
    );
    if (index >= 0) {
      servicesAdded[index].quantity += 1;
      const total = subTotalSum();
      setSubTotal(total);
      setServicesAdded(servicesAdded);
    }
  };

  const subTotalMinus = (service) => {
    const index = servicesAdded.findIndex(
      (p) => p.serviceid === service.serviceid,
    );
    if (index >= 0) {
      servicesAdded[index].quantity -= 1;
      const total = subTotalSum();
      setSubTotal(total);
      setServicesAdded(servicesAdded);
    }
  };

  return (
    <div className="float-cart">
      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{servicesAdded.length}</span>
          </span>
          <span className="header-title">Carrito</span>
        </div>

        <div className="float-cart__shelf-container">
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

        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">{`$${subTotal}`}</p>
            <small className="sub-price__installment" />
          </div>
          <div className="buy">
            <button
              type="button"
              onClick={() => proceedToCheckout()}
              className="buy-btn"
            >
              A comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatCart;
