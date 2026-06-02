import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_PENDING,
  AUTH_SIGNUP_PENDING,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
  AUTH_LOGOUT,
  AUTH_RESTORE_SESSION,
} from "../constants/authenticationConstants";

const initialState = {
  usersData: null,
  preferences: {
    theme: "light",
    language: "en",
  },

  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        usersData: action.payload.user,
        preferences: action.payload.preferences,
      };

    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AUTH_SIGNUP_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case AUTH_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...initialState,
      };

    case AUTH_RESTORE_SESSION:
      return {
        ...state,
        isAuthenticated: true,
        usersData: action.payload.user,
        preferences: action.payload.preferences,
      };

    default:
      return state;
  }
};
