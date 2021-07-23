import { useState } from "react";
import React from "react";
import { Principal } from "./componentes/Principal/Principal";
import { Login } from "./componentes/Login/Login";
import { Register } from "./componentes/Register/Register";
function App() {
  const [login, setLogin] = useState(true);
  const cambiarAPaginaPrincipal = () => {
    setLogin(!login);
  };
  const [register, setRegister] = useState(true);
  const cambiarARegister = () => {
    setRegister(!register);
  };

  return (
    <>
      {login && <Login />}
      {!login && <Principal />}
      {!register && <Register />}
    </>
  );
}
export default App;
