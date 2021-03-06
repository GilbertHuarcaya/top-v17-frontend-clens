/* eslint-disable no-debugger */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  GET_ALL_REVIEWS,
  GET_ALL_ORDERS,
  GET_ORDERS_FROM_USER,
  GET_ORDER_FORM,
  POST_USER_REVIEW,
  POST_USER_ORDER,
  GET_ORDER_BY_ID,
  GET_PENDING_ORDER,
  PATCH_USER_ORDER,
  GET_PENDING_REVIEW,
  UPLOAD_FILE,
  FORGOT_PASSWORD,
  USER_CREATE_VALIDATION,
  POST_CARD_TOKEN,
  POST_CUSTOMER_TOKEN,
  POST_PAYMENT,
  GET_ROLE_PERSONAL,
  ASIGN_PERSONAL_TO_ORDER,
  POST_POSTULA_PERSONAL,
} from './constants';

import authService from '../services/auth';
import reviewService from '../services/review';
import orderService from '../services/order';
import uploadService from '../services/upload';
import userService from '../services/user';
import orderPayment from '../services/payment';

export const postUserCardToken = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderPayment.postCardToken(form);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: POST_CARD_TOKEN, payload: {} });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return error;
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postUserCustomerToken = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderPayment.postCustomerToken();
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: POST_CUSTOMER_TOKEN, payload: {} });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return error;
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postUserPayment = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderPayment.postPayment(form);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: POST_PAYMENT, payload: {} });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return error;
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getUserFromLocalStorage = async (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    const decoded = jwt_decode(token);
    const response = await authService.revalidateToken(decoded.email);
    const data = await response.json();

    if (response.status === 401) {
      localStorage.removeItem('token');
      dispatch({ type: LOGOUT_USER, payload: null });
      return 'Your sesion expired, please sign in again';
    }

    if (response.status === 200) {
      localStorage.setItem('token', data);
      const decoded2 = jwt_decode(data);
      dispatch({ type: LOGIN_USER, payload: decoded2 });
    }

    return dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
  }
  return dispatch({ type: LOGOUT_USER, payload: null });
};

export const loginUser = async (dispatch, user) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.loginAccount(user);

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      dispatch({ type: LOGIN_USER, payload: decoded });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const registerUser = async (dispatch, newUser) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.registerAccount(newUser);
    const data = await response.json();
    if (!response.ok) {
      return data;
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem('token');

  dispatch({ type: LOGOUT_USER, payload: null });
};

export const getReviewsFromDB = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await reviewService.getReviews();

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ALL_REVIEWS, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getOrderForm = (dispatch, form) => {
  dispatch({ type: GET_ORDER_FORM, payload: form });
};

export const getUserOrdersFromDB = async (dispatch, userid) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderService.getUserOrdersByUserId(userid);

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ORDERS_FROM_USER, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postUserReview = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await reviewService.postReview(form);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: POST_USER_REVIEW, payload: null });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postUserOrder = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderService.postOrder(form);

    if (response.ok) {
      dispatch({ type: POST_USER_ORDER, payload: {} });
      return response;
    }
    return 'Orden no enviada, porfavor contacte al administrador';
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getPendingOrderFromOrders = async (dispatch, orders) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    if (orders.length > 0) {
      const pendingOrder = await orders.filter((e) => {
        return e.completed === false;
      });
      if (pendingOrder.length > 0) {
        dispatch({ type: GET_PENDING_ORDER, payload: pendingOrder });
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const patchUserOrder = async (dispatch, order) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderService.patchUserOrder(order);

    if (response.ok) {
      dispatch({ type: PATCH_USER_ORDER, payload: [] });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getPendingReviewFromOrders = async (dispatch, orders) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    if (orders.length > 0) {
      const pendingReview = await orders.filter((e) => {
        return e.completed === true && e.reviewed === false;
      });
      if (pendingReview.length > 0) {
        dispatch({ type: GET_PENDING_REVIEW, payload: pendingReview });
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getOrderById = async (dispatch, orderid) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderService.getOrderById(orderid);

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ORDER_BY_ID, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postUploadFile = async (dispatch, file, user) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await uploadService.postFile(file);

    if (response.status === 200) {
      const userResponse = await userService.patchUser({
        ...user,
        photo: response.data,
      });
      const userData = await userResponse.json();

      if (userResponse.ok) {
        localStorage.setItem('token', userData.token);
        const decoded = jwt_decode(userData.token);
        dispatch({ type: UPLOAD_FILE, payload: decoded });
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const postUploadFiles = async (dispatch, files) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await uploadService.postFiles(files);
    if (response.status === 200) {
      dispatch({ type: POST_POSTULA_PERSONAL, payload: response });
    }
  } catch (error) {
    throw new Error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const changePassword = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.forgotPassword(form);

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      dispatch({ type: FORGOT_PASSWORD, payload: decoded });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const validateUser = async (dispatch, userToken) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const decoded = jwt_decode(userToken);

    const response = await authService.userCreateValidation(
      userToken,
      decoded.id,
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: USER_CREATE_VALIDATION });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const sendUserEmailResetPassword = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.sendUserEmail(form);
    const data = await response.json();
    if (!response.ok) {
      return data;
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.log(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const sendPostulaEmail = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.postulaPersonal(form);
    return response;
  } catch (error) {
    throw new Error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const resetPassword = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.resetPassword(form);
    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getAllOrders = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderService.getAllOrders();
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ALL_ORDERS, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const patchPersonalDisponibility = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.patchUser({
      id: form.userId,
      disponibility: form,
    });
    const data = await response.json();

    if (response.ok) {
      return response;
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getAllRolePersonal = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.getAllRolePersonalService();
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: GET_ROLE_PERSONAL, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const patchUserData = async (dispatch, form) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await userService.patchUser(form);
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      dispatch({ type: LOGIN_USER, payload: decoded });
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const asignPersonalToOrder = async (dispatch, order) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderService.patchUserOrder(order);

    if (response.ok) {
      dispatch({ type: ASIGN_PERSONAL_TO_ORDER, payload: null });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
