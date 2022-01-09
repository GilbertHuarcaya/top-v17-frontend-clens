const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getReviews = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/reviews`, payload);
};

// const registerAccount = (user) => {};

// const forgotPassword = (email) => {};

const review = {
  getReviews,
  // forgotPassword,
};

export default review;
