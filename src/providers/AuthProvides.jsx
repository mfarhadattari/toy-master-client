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

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvides = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ----------------- create user --------------------- */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* ------------------ login user ------------------ */
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* ---------------  google login --------------------- */
  const loginUserWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  /* ------------------- logout user---------- */
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* --------------- setUserAvatar ------------- */
  const setUserAvatar = (avatarURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { photoURL: avatarURL });
  };

  /* -------------- setUserName ----------------- */
  const setUserName = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };

  /* --------------------------------------------------------------
  ------------------------ @ |get logged user| ---------------------- 
  ---------------------------------------------------------------- */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(createUser);
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
