const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const patchUser = (user) => {
  const accessTokenObj = localStorage.getItem('token');

  const userId = user.id;
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
    body: JSON.stringify(user),
  };

  return fetch(`${URL_BASE}/api/users/${userId}`, payload);
};
// const forgotPassword = (email) => {};

const user = {
  patchUser,
  // forgotPassword,
};

export default user;
