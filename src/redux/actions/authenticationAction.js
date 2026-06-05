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
} from "../constants/authenticationConstants";

import { sendPasswordResetEmail } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { set, ref, update } from "firebase/database";
import { db } from "../../firebase/firebase";
import { get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AUTH_LOGIN_PENDING,
      });

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCredential);
      const user = userCredential.user;

      const snapshot = await get(ref(db, `users/${user.uid}`));

      const userData = snapshot.val();

      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          user: {
            uid: user.uid,
            email: user.email,
            username: userData.username,
          },

          preferences: userData.preferences,
        },
      });

      console.log(userData);
    } catch (error) {
      dispatch({
        type: AUTH_LOGIN_ERROR,
        payload: error.code,
      });
    }
  };
};

export const signupUser = (username, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AUTH_SIGNUP_PENDING,
      });

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;
      const uid = user.uid;

      await set(ref(db, `users/${uid}`), {
        username,
        email,

        preferences: {
          theme: "light",
          language: "en",
        },
      });

      dispatch({
        type: AUTH_SIGNUP_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      console.log(error.code);
      console.log(error.message);
      dispatch({
        type: AUTH_SIGNUP_ERROR,
        payload: error.code,
      });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await signOut(auth);

    dispatch({
      type: AUTH_LOGOUT,
    });
  };
};

export const restoreSession = () => {
  return async (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch({
          type: AUTH_CHECK_COMPLETE,
        });

        return;
      }

      const snapshot = await get(ref(db, `users/${user.uid}`));

      const userData = snapshot.val();

      dispatch({
        type: AUTH_RESTORE_SESSION,
        payload: {
          user: {
            uid: user.uid,
            email: user.email,
            username: userData.username,
          },
          preferences: userData.preferences,
        },
      });
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
      dispatch({
        type: AUTH_RESET_PASSWORD_PENDING,
      });

      await sendPasswordResetEmail(auth, email);

      dispatch({
        type: AUTH_RESET_PASSWORD_SUCCESS,
      });

      return true;
    } catch (error) {
      console.log("RESET ERROR:", error.code);
      console.log("RESET MESSAGE:", error.message);

      dispatch({
        type: AUTH_RESET_PASSWORD_ERROR,
        payload: error.code,
      });

      return false;
    }
  };
};
