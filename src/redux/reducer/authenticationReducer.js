import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_PENDING,
  AUTH_SIGNUP_PENDING,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_LOGOUT,
  AUTH_RESTORE_SESSION,
  AUTH_CHECK_COMPLETE,
  AUTH_UPDATE_PREFERENCES,
  AUTH_RESET_PASSWORD_PENDING,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_ERROR,
} from "../constants/authenticationConstants";

const initialState = {
  usersData: null,
  preferences: {
    theme: "light",
    language: "en",
  },

  isAuthChecked: false,
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
        isAuthChecked: true,
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
        isAuthChecked: true,
        usersData: action.payload.user,
        preferences: action.payload.preferences,
      };

    case AUTH_CHECK_COMPLETE:
      return {
        ...state,
        isAuthChecked: true,
      };

    case AUTH_UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: action.payload,
      };
    case AUTH_RESET_PASSWORD_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AUTH_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case AUTH_RESET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
