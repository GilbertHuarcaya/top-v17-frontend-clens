const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getOrders = () => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
  };

  return fetch(`${URL_BASE}/api/orders`, payload);
};

const review = {
  getOrders,
};

export default review;
