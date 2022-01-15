import { useSelector } from 'react-redux';
import PendingOrderService from '../PendingOrderService';
import Review from '../../Review';

const PendingReview = () => {
  const pendingReview = useSelector((state) => state.pendingReview);

  return (
    <div className="cart__shelf-container">
      {pendingReview.map((order) => {
        return (
          <div className="pending__order-review" key={order.updatedAt}>
            <div className="pending__order-review__details">
              <h3>{`Orden Completada el : ${new Date(
                order.updatedAt,
              ).toLocaleDateString()}`}</h3>
              {order.service.map((service) => {
                return (
                  <PendingOrderService service={service} key={service.name} />
                );
              })}{' '}
            </div>

            <Review reviewOrder={order} />
          </div>
        );
      })}
    </div>
  );
};

export default PendingReview;
