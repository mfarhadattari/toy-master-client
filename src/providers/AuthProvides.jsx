import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../../firebase.config";

/* -----------------------------------------------------
! ----------------| AUTH CONTEXT | ------------------
---------------------------------------------------- */
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvides = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* -------------------------------------------
  !------------- | CREATE USER |-----------
  ---------------------------------------------- */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* ------------------------------------------------
  ! -------------------| LOGIN USER | -------------
  ----------------------------------------------------- */
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* --------------------------------------
  ! -----------  | GOOGLE LOGIN | ----------
  ------------------------------------------ */
  const loginUserWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  /* -------------------------------
  !------------ | LOGOUT USER |---------- 
  ------------------------------------*/
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* ---------------------------------------------
  ! ------------- | SET USER AVATAR | -------------
  ------------------------------------------- */
  const setUserAvatar = (avatarURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { photoURL: avatarURL });
  };

  /* -------------- ---------------------------------
  ! ------------| SET USER NAME |--------------------- 
  -------------------------------------------------- */
  const setUserName = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };

  /* --------------------------------------------------------------
  ! ------------------| GET LOGGED USER | ---------------------- 
  ---------------------------------------------------------------- */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /* --------------------------------------------
  ! -----------------| AUTH INFO | ---------------
  ----------------------------------------------*/
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    loginUserWithGoogle,
    logoutUser,
    setUserAvatar,
    setUserName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvides;
