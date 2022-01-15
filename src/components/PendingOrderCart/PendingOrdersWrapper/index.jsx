import { useSelector, useDispatch } from 'react-redux';
import PendingOrderService from '../PendingOrderService';
import { patchUserOrder, getUserOrdersFromDB } from '../../../store/actions';

const PendingOrdersWrapper = () => {
  const userPendingOrders = useSelector((state) => state.userPendingOrders);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  /*   const pendingReview = useSelector((state) => state.pendingReview); */

  const proceedToCompleteOrder = async (order) => {
    // eslint-disable-next-line no-console
    await patchUserOrder(dispatch, { ...order, completed: true });
    await getUserOrdersFromDB(dispatch, user.id);
  };
  return (
    <div className="cart__shelf-container">
      {userPendingOrders.map((order) => {
        return (
          <div className="pending__order-review" key={order.cratedAt}>
            <div className="pending__order-review__details">
              <h3>{`Orden solicitada para el : ${new Date(
                order.fecha.date,
              ).toLocaleDateString()}`}</h3>
              {order.service.map((service) => {
                return (
                  <PendingOrderService service={service} key={service.name} />
                );
              })}{' '}
            </div>
            <div className="cart__footer">
              <div className="buy">
                <button
                  type="button"
                  onClick={() => proceedToCompleteOrder(order)}
                  className="btn btn-primary"
                >
                  Terminar la Orden
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PendingOrdersWrapper;
