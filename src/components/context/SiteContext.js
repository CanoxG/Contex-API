import React from "react";
import {createContext, useState} from "react";

export const Context = createContext(undefined, undefined);

const Theme = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  const data = {
    number,
    theme,
    setNumber,
    setTheme
  }

  return (
    <Context.Provider value={data}>{children}</Context.Provider>
  )
}

export default Theme