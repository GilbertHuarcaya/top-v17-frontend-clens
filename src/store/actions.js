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
  GET_ORDERS,
  GET_ORDER_FORM,
} from './constants';

import authService from '../services/auth';
import reviewService from '../services/review';
import orderService from '../services/order';

export const getUserFromLocalStorage = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwt_decode(token);
    dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
  }
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

export const getOrdersFromDB = async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await orderService.getOrders();

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ORDERS, payload: data });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
