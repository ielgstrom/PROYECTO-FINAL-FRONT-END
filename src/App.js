import { useState } from "react";
import React from "react";

import { PagPrincipal } from "./componentes/PagPrincipal";
import { Login } from "./componentes/Login";

function App() {
  /*const [login, setLogin] = useState(true);
    const cambiar = () => {
    setLogin(!login);*/

    const [datosAcceso, setDatosAcceso] = useState({
    username: "",
    password: "",
    recordarPassword: true,
  });

  return (
    <>
    {/*   {login && <h1 className="login">Esta es la pagina para entrar</h1>}
      {!login && <PagPrincipal />}
      {login && <button onClick={cambiar}>clica aqui</button>} */}

      <div className="contenedor row center dark">

        <Login
          datosAcceso={datosAcceso}
          setDatosAcceso={setDatosAcceso}
        />
      </div>
    </>
  );
}
export default App;
