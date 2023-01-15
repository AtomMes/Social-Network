import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    const onSub = onAuthStateChanged(auth, (user) => {
      //stuguma mejnenq te che
      setCurrentUser(user); //ete mejnenq exnum seta anum
      console.log(user);
    });
    return () => {
      onSub();
    };
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
