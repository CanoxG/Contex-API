import React from "react";
import SiteProvider from "./context/SiteContext";
import AuthProvider from "./context/AuthContext";
import Home from "./Home";

const App = () => {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
};

export default App;
