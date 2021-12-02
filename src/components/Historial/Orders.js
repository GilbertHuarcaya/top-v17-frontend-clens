import DB from './data.json';

export const getAllOrders = () => {
  return DB?.orders || [];
};

export const getDetailOrder = (id) => {
  const order = DB?.orders.find((item) => item.id === id);
  return order || {};
};
