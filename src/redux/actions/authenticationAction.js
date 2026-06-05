import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_PENDING,
  AUTH_SIGNUP_PENDING,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
  AUTH_LOGOUT,
  AUTH_RESTORE_SESSION,
  AUTH_CHECK_COMPLETE,
  AUTH_UPDATE_PREFERENCES,
  AUTH_RESET_PASSWORD_PENDING,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_ERROR,
} from "../types/authenticationConstants";

import { auth, db } from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { set, ref, update, get } from "firebase/database";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_LOGIN_PENDING });

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const snapshot = await get(ref(db, `users/${user.uid}`));
      const userData = snapshot.val();

      if (!userData) {
        throw new Error("User profile not found");
      }

      const preferences = userData.preferences || { theme: "light", language: "en" };

      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          user: {
            uid: user.uid,
            email: user.email,
            username: userData.username,
          },
          preferences: preferences,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: AUTH_LOGIN_ERROR, payload: error.code || error.message });
    }
  };
};

export const signupUser = (username, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_SIGNUP_PENDING });

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const defaultLanguage = navigator.language.startsWith("mr") ? "mr" : "en";

      await set(ref(db, `users/${user.uid}`), {
        username,
        email,
        preferences: {
          theme: "light",
          language: defaultLanguage,
        },
      });

      dispatch({
        type: AUTH_RESTORE_SESSION,
        payload: {
          user: {
            uid: user.uid,
            email: user.email,
            username: username,
          },
          preferences: {
            theme: "light",
            language: defaultLanguage,
          },
        },
      });

      dispatch({ type: AUTH_SIGNUP_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: AUTH_SIGNUP_ERROR, payload: error.code });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch({ type: AUTH_LOGOUT });
  };
};

export const restoreSession = () => {
  return async (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) {
          dispatch({ type: AUTH_CHECK_COMPLETE });
          return;
        }

        const snapshot = await get(ref(db, `users/${user.uid}`));
        const userData = snapshot.val();

        if (!userData) {
          dispatch({ type: AUTH_CHECK_COMPLETE });
          return;
        }

        const preferences = userData.preferences || { theme: "light", language: "en" };

        dispatch({
          type: AUTH_RESTORE_SESSION,
          payload: {
            user: {
              uid: user.uid,
              email: user.email,
              username: userData.username,
            },
            preferences: preferences,
          },
        });
      } catch (error) {
        console.log("RESTORE SESSION ERROR:", error);
        dispatch({ type: AUTH_CHECK_COMPLETE });
      }
    });
  };
};

export const updatePreferences = (uid, theme, language) => {
  return async (dispatch) => {
    try {
      await update(ref(db, `users/${uid}`), {
        preferences: {
          theme,
          language,
        },
      });

      localStorage.setItem("theme", theme);
      localStorage.setItem("language", language);

      dispatch({
        type: AUTH_UPDATE_PREFERENCES,
        payload: {
          theme,
          language,
        },
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_RESET_PASSWORD_PENDING });
      await sendPasswordResetEmail(auth, email);
      dispatch({ type: AUTH_RESET_PASSWORD_SUCCESS });
      return true;
    } catch (error) {
      console.log(error);
      dispatch({ type: AUTH_RESET_PASSWORD_ERROR, payload: error.code });
      return false;
    }
  };
};