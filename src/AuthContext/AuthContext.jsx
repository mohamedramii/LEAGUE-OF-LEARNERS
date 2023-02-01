import { createContext, useContext } from "react";

import React from "react";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../firebase";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setloading] = useState(true);

  const signup = (email, password) => {
     createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const login = (email,password) => {
    signInWithEmailAndPassword (auth, email, password);
  };


const resetpass = (email) => {
   sendPasswordResetEmail(auth , email)
}







  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      setloading(false);
    });

    return () => {
      unsubcribe();
    };
    
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup, logout , login ,resetpass}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
