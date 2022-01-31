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
    console.log(order.clensId);
    if (order.clensId !== undefined) {
      await patchUserOrder(dispatch, { ...order, completed: true });
      await getUserOrdersFromDB(dispatch, user.id);
    }
  };
  return (
    <div className="cart__shelf-container">
      {userPendingOrders.map((order) => {
        return (
          <div className="pending__order-review" key={order.createdAt}>
            <div className="pending__order-review__details">
              <h3>{`Orden solicitada para el : ${order.fecha.date}`}</h3>
              {order.clensId ? (
                <h3>{`Personal Clens asignado : ${order.clensId}`}</h3>
              ) : null}
              <h3>{`Para empezar alrededor de ${order.horaLlegada}`}</h3>
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
                  disabled={order.clensId === undefined}
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
