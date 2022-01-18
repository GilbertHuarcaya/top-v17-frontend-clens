/* eslint-disable no-debugger */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  REGISTER_USER,
  GET_ALL_REVIEWS,
  GET_ORDERS_FROM_USER,
  GET_ORDER_FORM,
  POST_USER_REVIEW,
  POST_USER_ORDER,
  GET_ORDER_BY_ID,
  GET_PENDING_ORDER,
  PATCH_USER_ORDER,
  GET_PENDING_REVIEW,
  UPLOAD_FILE,
} from './constants';

import authService from '../services/auth';
import reviewService from '../services/review';
import orderService from '../services/order';
import uploadService from '../services/upload';
import userService from '../services/user';

export const getUserFromLocalStorage = async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwt_decode(token);
    const response = await authService.revalidateToken(decoded.email);
    if (response.status === 401) {
      localStorage.removeItem('token');
      return dispatch({ type: LOGOUT_USER, payload: null });
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
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const registerUser = async (dispatch, newUser) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await authService.registerAccount(newUser);

    if (response.ok) {
      dispatch({ type: REGISTER_USER, payload: null });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
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

    if (response.ok) {
      dispatch({ type: POST_USER_REVIEW, payload: null });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
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
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
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
    const response = await orderService.patchUserOrderToCompleted(order);

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
        dispatch({ type: UPLOAD_FILE, payload: userData });
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
