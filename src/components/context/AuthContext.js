import React from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined, undefined);

const Auth  = ({ children }) => {
  const [user, setUser] = useState(false);

  const data = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

// Another Way to Use UseContext....
export default Auth
export const useAuth = () => useContext(AuthContext)
