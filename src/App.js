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
  const ListaCancionesPrueba = [
    {
      urlsong2:
        "https://soundcloud.com/theavalanches/interstellar-love-feat-leon",
      artista: "The Avalanches",
      título: "Interstelar Love",
    },
    {
      urlsong2: "https://soundcloud.com/nationalxball2018/20-seconds",
      título: "Darkest Hour",
      artista: "Sevdaliza",
    },
    {
      urlsong2:
        "https://soundcloud.com/fiorinien/kate-bush-running-up-that-hill",
      artista: "Kate Bush",
      título: "Running Up That Hill",
    },
    {
      urlsong2: "https://soundcloud.com/quelle-chris/graphic-bleed-outs-feat",
      artista: "Quelle Chris",
      título: "Graphic Bleeds Outs",
    },
    {
      urlsong2: "https://soundcloud.com/kingprincessmusic/pain",
      artista: "King Princess",
      título: "Pain",
    },
    {
      urlsong2:
        "https://soundcloud.com/mariaarnalimarcelbages-music/el-gran-silencio",
      artista: "Maria Arnal i Marcel Bagés",
      título: "El gran silencio",
    },
    {
      urlsong2:
        "https://soundcloud.com/bovalonmusic/sets/yelle-je-taime-encore-rawd",
      artista: "Yelle",
      título: "Je t'aime encore",
    },
    {
      urlsong2: "https://soundcloud.com/nathy-peluso/delito",
      artista: "Nathy Peluso",
      título: "DELITO",
    },
  ];

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
                  />
                </Route>
                <Route exact path="/chat">
                  <Chat />
                </Route>
                <Route exact path="/busquedaCanciones">
                  <BusquedaCanciones />
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
            ListaCancionesPrueba={ListaCancionesPrueba}
            className="barraReproduccion barraDeReproduccion"
          />
        )}
      </div>
    </>
  );
}
export default App;
