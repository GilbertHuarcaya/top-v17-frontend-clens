import { useSelector } from 'react-redux';
import PendingOrdersWrapper from './PendingOrdersWrapper';
import Loader from '../Loader';
import PendingReview from './PendingReview';

import './styles.scss';

const PendingOrder = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const userPendingOrders = useSelector((state) => state.userPendingOrders);
  const pendingReview = useSelector((state) => state.pendingReview);

  let CartScreen = (
    <h2 className="shelf-empty">Aun no has empezado una orden!</h2>
  );
  if (userPendingOrders.length > 0 && pendingReview.length === 0) {
    CartScreen = <PendingOrdersWrapper />;
  } else if (pendingReview.length > 0 && userPendingOrders.length === 0) {
    CartScreen = (
      <>
        <h2 className="shelf-empty">Aun no has empezado una orden!</h2>
        <div className="cart__header">
          <span className="bag">
            <span className="bag__quantity">
              {pendingReview ? pendingReview.length : null}
            </span>
          </span>
          <span className="header-title">
            Reseñas pendientes de ordenes completadas
          </span>
        </div>
        <PendingReview />
      </>
    );
  } else if (pendingReview.length > 0 && userPendingOrders.length > 0) {
    CartScreen = (
      <>
        <PendingOrdersWrapper />
        <div className="cart__header">
          <span className="bag">
            <span className="bag__quantity">
              {pendingReview ? pendingReview.length : null}
            </span>
          </span>
          <span className="header-title">
            Reseñas pendientes de ordenes completadas
          </span>
        </div>
        <PendingReview />
      </>
    );
  }

  return (
    <div className="cart">
      <div className="cart__header">
        <span className="bag">
          <span className="bag__quantity">
            {userPendingOrders ? userPendingOrders.length : null}
          </span>
        </span>
        <span className="header-title">Servicios de Limpieza en proceso</span>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="cart__content">{CartScreen}</div>
      )}
    </div>
  );
};

export default PendingOrder;
