import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaPrincipal from "./paginas/PagPricnipal/PaginaPrincipal";
import PaginaPerfil from "./paginas/PagPricnipal/PaginaPrincipal";
import PaginaMatches from "./paginas/PagMatches/PaginaMatches";
import PagCancionesFavoritas from "./paginas/PagCancionesFavoritas/PagCancionesFavoritas";


function App() {
  return (
    <div>
      
      <Router>
        <Switch>
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
      </Router>
    </div>
  );
}
export default App;
