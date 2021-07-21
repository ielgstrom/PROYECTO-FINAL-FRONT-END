import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaPrincipal from "./paginas/PagPricnipal/PaginaPrincipal";
import PaginaPerfil from "./paginas/PagPerfil/PaginaPerfil";
import PaginaMatches from "./paginas/PagMatches/PaginaMatches";
import PagCancionesFavoritas from "./paginas/PagCancionesFavoritas/PagCancionesFavoritas";
import Reproductor from "./componentes/Reproductor/Reproductor";
import SidebarIzquierdo from "./componentes/Siderbarizquierdo/SidebarIzquierdo";
import SidebarDerecho from "./componentes/SidebarDerecho/SidebarDerecho";
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
  ];
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex  align-items-stretch paginaPrincipal">
          <Router>
            <SidebarIzquierdo className="listaCanciones" />
            <Switch className=".Main">
              <Route exact path="/">
                <PaginaPrincipal />
              </Route>
              <Route exact path="/perfil">
                <PaginaPerfil />
              </Route>
              <Route exact path="/matches">
                <PaginaMatches />
              </Route>
              <Route exact path="/cancionesFavoritas">
                <PagCancionesFavoritas />
              </Route>
            </Switch>
            <SidebarDerecho className="ListaAmigos" />
            <Reproductor
              ListaCancionesPrueba={ListaCancionesPrueba}
              className="barraReproduccion barraDeReproduccion"
            />
          </Router>
        </div>
      </div>
    </>
  );
}
export default App;
