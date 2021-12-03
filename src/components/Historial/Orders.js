import DB from './data.json';

const getAllOrders = () => {
  return DB?.orders || [];
};

export default getAllOrders;
