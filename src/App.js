import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./componentes/Login/Login";
import Logout from "./componentes/Logout/Logout";
import Register from "./componentes/Register/Register";
import { AuthContextProvider } from "./contextos/AuthContextProvider";
import { NotFoundPagina } from "./paginas/NotFoundPagina";
import RutaProtegida from "./componentes/RutaProtegida/RutaProtegida";
import Reproductor from "./componentes/Reproductor/Reproductor";
import SidebarIzquierdo from "./componentes/Siderbarizquierdo/SidebarIzquierdo";
import SidebarDerecho from "./componentes/SidebarDerecho/SidebarDerecho";
import CancionesFavoritas from "./componentes/CancionesFavoritas/CancionesFavoritas";
import Perfil from "./componentes/Perfil/Perfil";
import Matches from "./componentes/Matches/Matches";
import Principal from "./componentes/Principal/Principal";
import Chat from "./componentes/Chat/Chat";
import BusquedaCanciones from "./componentes/BusquedaCanciones/BusquedaCanciones";
function App() {
  const [ListaCancionesPrueba, setListaCancionesPrueba] = useState([
    {
      _id: "60f1401c752b265a55524a99",
      url: "https://soundcloud.com/parkway-drive/carrion",
      nombre: "Carrion",
      artista: {
        integrantes: [
          "Winston McCall",
          "Jeff Ling",
          "Luke Kilpatrick",
          "Jia O'Connor",
          "Ben Gordon",
        ],
        _id: "60f13e91752b265a55524a93",
        nombre: "Parkway Drive",
        tipo: "Grupo",
        urlImagen: "toBeSetted",
      },
      genero: {
        _id: "60f13e3d752b265a55524a8c",
        nombre: "Metalcore",
      },
    },
  ]);
  const [cancionPuesta, setCancionPuesta] = useState({
    cancion: ListaCancionesPrueba[0],
    indice: 0,
  });
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex  align-items-stretch paginaPrincipal">
          <Router className="c">
            <AuthContextProvider>
              {!login || <SidebarIzquierdo className="listaCanciones" />}
              <Switch className="header Main">
                <Route exact path="/">
                  <RutaProtegida login={login}>
                    <Principal />
                  </RutaProtegida>
                </Route>

                <Route path="/login" exact>
                  <Login login={login} setLogin={setLogin} />
                </Route>

                <Route exact path="/perfil">
                  <RutaProtegida login={login} >
                    <Perfil login={login} setLogin={setLogin}/>
                  </RutaProtegida>
                </Route>

                <Route path="/logout" exact>
                  <RutaProtegida>
                    <Logout />
                  </RutaProtegida>
                </Route>

                <Route exact path="/matches">
                  <Matches />
                </Route>
                <Route exact path="/cancionesFavoritas">
                  <CancionesFavoritas
                    ListaCancionesPrueba={ListaCancionesPrueba}
                    setCancionPuesta={setCancionPuesta}
                    setListaCancionesPrueba={setListaCancionesPrueba}
                    cancionPuesta={cancionPuesta}
                  />
                </Route>
                <Route exact path="/chat">
                  <Chat />
                </Route>
                <Route exact path="/busquedaCanciones">
                  <BusquedaCanciones
                    ListaCancionesPrueba={ListaCancionesPrueba}
                    setCancionPuesta={setCancionPuesta}
                    setListaCancionesPrueba={setListaCancionesPrueba}
                    cancionPuesta={cancionPuesta}
                  />
                </Route>
                <Route exact path="/">
                  <Principal />
                </Route>
                <Route path="**">
                  <NotFoundPagina />
                </Route>
              </Switch>
              {!login || <SidebarDerecho className="ListaAmigos" />}
            </AuthContextProvider>
          </Router>
        </div>
        {!login || (
          <Reproductor
            cancionPuesta={cancionPuesta}
            setCancionPuesta={setCancionPuesta}
            ListaCancionesPrueba={ListaCancionesPrueba}
            className="barraReproduccion barraDeReproduccion"
          />
        )}
      </div>
    </>
  );
}
export default App;
