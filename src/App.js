import { useState } from "react";
import React from "react";

import { PagPrincipal } from "./componentes/PagPrincipal";
function App() {
  const [login, setLogin] = useState(true);
  const cambiar = () => {
    setLogin(!login);
  };

  return (
    <>
      {login && <h1 className="login">Esta es la pagina para entrar</h1>}
      {!login && <PagPrincipal />}
      {login && <button onClick={cambiar}>clica aqui</button>}
    </>
  );
}
export default App;
