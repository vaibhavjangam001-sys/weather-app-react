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
} from "../constants/authenticationConstants";

import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { set, ref } from "firebase/database";
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
