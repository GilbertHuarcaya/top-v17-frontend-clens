import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import {
  LOGIN_USER,
  SET_LOADING,
  GET_USER_FROM_LOCALSTORAGE,
  LOGOUT_USER,
} from './constants';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
  isLoading: false,
  jobs: [],
  jobDetail: {},
  companies: [],
  user: null,
};

function AppReducer(state, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case GET_USER_FROM_LOCALSTORAGE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};