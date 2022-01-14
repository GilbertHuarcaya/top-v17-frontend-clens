import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrdersFromDB } from '../../store/actions';
import PendingOrderService from './PendingOrderService';
import Review from '../Review';

import './styles.scss';

const PendingOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userOrders = useSelector((state) => state.userOrders);
  const user = useSelector((state) => state.user);
  const [pendingOrders, setPendingOrders] = useState();

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        if (userOrders.length < 1) {
          getUserOrdersFromDB(dispatch, user.id);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getUserOrders();
  }, []);
  useEffect(() => {
    const setUserOders = async () => {
      try {
        setTimeout(() => {
          if (userOrders.length > 0) {
            setPendingOrders([userOrders.find((e) => e.completed === false)]);
          }
        }, 1000);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    setUserOders();
  }, [userOrders]);

  function proceedToCheckout() {
    // eslint-disable-next-line no-console
    console.log('ir a comprar!');
    navigate('/order/cotiza');
  }
  return (
    <div className="cart">
      <div className="cart__header">
        <span className="bag">
          <span className="bag__quantity">
            {pendingOrders ? pendingOrders.length : null}
          </span>
        </span>
        <span className="header-title">Servicios de Limpieza en proceso</span>
      </div>
      <div className="cart__content">
        {pendingOrders ? (
          <>
            <div className="cart__shelf-container">
              {pendingOrders.map((order) => {
                return order.service.map((service) => {
                  return (
                    <PendingOrderService service={service} key={service.id} />
                  );
                });
              })}
            </div>
            <div className="cart__footer">
              <div className="buy">
                <button
                  type="button"
                  onClick={() => proceedToCheckout()}
                  className="btn btn-primary"
                >
                  Terminar la Orden
                </button>
              </div>
            </div>
          </>
        ) : (
          <h2 className="shelf-empty">Aun no has empezado una orden!</h2>
        )}
      </div>
      <Review />
    </div>
  );
};

export default PendingOrder;
