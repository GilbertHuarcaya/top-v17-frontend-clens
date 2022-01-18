import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

// const registerAccount = (user) => {};
const postFile = (file) => {
  const formData = new FormData();
  // for (const myFile of files)
  // formData.append('file', myFile);
  //
  formData.append('file', file);
  return axios.post(`${URL_BASE}/api/uploads/file`, formData);
};
// const forgotPassword = (email) => {};

const file = {
  postFile,
  // forgotPassword,
};

export default file;
