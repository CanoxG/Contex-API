import React from "react";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "./context/AuthContext";

const Header = () => {
  const { user, setUser } = useAuth();

  const login = () => {
    setUser({
      name: "Can",
      id: 1,
    });
  };

  const logout = () => {
    setUser(false);
  };

  return (
    <header>
      Header
      <br />
      {user && <button onClick={logout}>Log Out</button>}
      <button onClick={login}>Log In</button>
      <hr />
      <SwitchTheme />
    </header>
  );
};

export default Header;
