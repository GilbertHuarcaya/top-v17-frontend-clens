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
const sendUserEmail = (form) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  };
  return fetch(`${URL_BASE}/api/users/email`, payload);
};

// obtener usuarios con role PERSONAL
const getAllRolePersonalService = () => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
  };

  return fetch(`${URL_BASE}/api/users/personalclens`, payload);
};

const user = {
  patchUser,
  sendUserEmail,
  getAllRolePersonalService,
  // forgotPassword,
};

export default user;
