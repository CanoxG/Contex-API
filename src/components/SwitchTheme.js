import React from 'react';
import {useContext} from "react";
import {Context} from "./context/SiteContext";

const SwitchTheme = () => {
  const {theme, setTheme} = useContext(Context)
  return (
    <>
      Change the Theme {theme} <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change
      </button>
    </>
  );
};

export default SwitchTheme;