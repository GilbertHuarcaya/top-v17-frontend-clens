const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const loginAccount = ({ email, password }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${URL_BASE}/auth/local/login`, payload);
};

// const registerAccount = (user) => {};
const registerAccount = ({
  firstName,
  lastName,
  direccion,
  identificacion,
  telefono,
  email,
  password,
}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      direccion,
      identificacion,
      telefono,
      email,
      password,
    }),
  };
  return fetch(`${URL_BASE}/api/users`, payload);
};

// const forgotPassword = (email) => {};
const forgotPassword = ({ email, password, newPassword }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, newPassword }),
  };
  return fetch(`${URL_BASE}/auth/local/change-password`, payload);
};

const revalidateToken = (email) => {
  const accessTokenObj = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
  };
  return fetch(`${URL_BASE}/api/users/email/${email}`, payload);
};

const auth = {
  loginAccount,
  registerAccount,
  revalidateToken,
  forgotPassword,
};

export default auth;
