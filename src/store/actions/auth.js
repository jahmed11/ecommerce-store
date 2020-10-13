import fireBase from "../../firebase/firebase";
import * as actionType from "./actions";

export const authSuccess = (expTime) => {
  return {
    type: actionType.AUTH_LOGIN,
    expireTime: expTime,
  };
};

export const logIn = (email, password) => {
  return (dispatch) => {
    fireBase.auth().signInWithEmailAndPassword(email, password);
    const expire = 3600000;
    const expirationTime = new Date(new Date().getTime() + expire);
    fireBase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        localStorage.setItem("userId", user.uid);
        localStorage.setItem("expirationTime", expirationTime);
      }
    });
    dispatch(authSuccess(expirationTime));
  };
};
export const logOut = () => {
  return (dispatch) => {
    fireBase.auth().signOut();
    console.log("user logged out");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userId");
  };
};

export const signUp = (email, password) => {
  return (dispatch) => {
    fireBase.auth().createUserWithEmailAndPassword(email, password);
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const id = localStorage.getItem("userId");
    if (!id) {
      dispatch(logOut());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationTime"));
      if (expirationDate > new Date()) {
        dispatch(logIn(id));
      } else {
        dispatch(logOut());
      }
    }
  };
};

export const authenticated = () => {
  console.log("signin signout");
  return {
    type: actionType.AUTHENTICATED,
  };
};
export const loggedOut = () => {
  return {
    type: actionType.LOGGED_OUT,
  };
};
