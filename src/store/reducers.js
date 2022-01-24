import {
  LOGIN_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  LOGOUT_USER,
  REGISTER_USER,
  GET_ALL_REVIEWS,
  GET_ORDER_FORM,
  GET_ORDERS_FROM_USER,
  POST_USER_REVIEW,
  POST_USER_ORDER,
  GET_ORDER_BY_ID,
  GET_PENDING_ORDER,
  PATCH_USER_ORDER,
  GET_PENDING_REVIEW,
  UPLOAD_FILE,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  RESPONSE,
  POST_CARD_TOKEN,
  POST_CUSTOMER_TOKEN,
  POST_PAYMENT,
} from './constants';

const initialState = {
  isLoading: false,
  services: [],
  reviews: null,
  orderDetails: {},
  orders: [],
  userOrders: [],
  orderById: [],
  user: null,
  postReviewState: null,
  userPendingOrders: [],
  pendingReview: [],
  response: null,
  cardToken: [],
  customerToken: '',
  payment: [],
};

function reducer(state = initialState, action = '') {
  const newValue = action.payload;
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: newValue,
      };
    case LOGOUT_USER: {
      return {
        ...state,
        user: newValue,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        user: newValue,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: newValue,
      };
    }
    case GET_USER_FROM_LOCALSTORAGE: {
      return {
        ...state,
        user: newValue,
      };
    }
    case GET_ORDER_FORM: {
      return {
        ...state,
        orderDetails: newValue,
      };
    }
    case GET_ALL_REVIEWS: {
      return {
        ...state,
        reviews: newValue,
      };
    }
    case GET_ORDERS_FROM_USER: {
      return {
        ...state,
        userOrders: newValue,
      };
    }
    case POST_USER_REVIEW: {
      return {
        ...state,
        postReviewState: newValue,
      };
    }
    case POST_USER_ORDER: {
      return {
        ...state,
        orderDetails: newValue,
      };
    }
    case GET_PENDING_ORDER: {
      return {
        ...state,
        userPendingOrders: newValue,
      };
    }
    case PATCH_USER_ORDER: {
      return {
        ...state,
        userPendingOrders: newValue,
        userOrders: newValue,
        pendingReview: newValue,
      };
    }
    case GET_PENDING_REVIEW: {
      return {
        ...state,
        pendingReview: newValue,
      };
    }
    case GET_ORDER_BY_ID: {
      return {
        ...state,
        orderById: newValue,
      };
    }
    case UPLOAD_FILE: {
      return {
        ...state,
        user: newValue,
      };
    }
    case FORGOT_PASSWORD: {
      return {
        ...state,
        user: newValue,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        response: newValue,
      };
    }
    case 'reset-response': {
      return {
        ...state,
        response: newValue,
      };
    }
    case RESPONSE: {
      return {
        ...state,
        response: newValue,
      };
    }
    case POST_CARD_TOKEN:
      return {
        ...state,
        cardToken: newValue,
      };
    case POST_CUSTOMER_TOKEN:
      return {
        ...state,
        customerToken: newValue,
      };
    case POST_PAYMENT:
      return {
        ...state,
        payment: newValue,
      };
    default:
      return state;
  }
}

export default reducer;
