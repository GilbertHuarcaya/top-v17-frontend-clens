const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getUserOrders = () => {
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

// const registerAccount = (user) => {};

// const forgotPassword = (email) => {};

const review = {
  getUserOrders,
  // forgotPassword,
};

export default review;
