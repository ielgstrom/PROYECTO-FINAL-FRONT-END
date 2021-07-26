import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import HistorialSidebar from "../HistorialSidebar/Historialsidebar";
import "./SidebarIzquierdo.css";

export const SidebarIzquierdo = () => {
  const ListaCancionesPrueba = [
    {
      url: "https://soundcloud.com/theavalanches/interstellar-love-feat-leon",
      artista: "The Avalanches",
      título: "Interstelar Love",
    },
    {
      url: "https://soundcloud.com/nationalxball2018/20-seconds",
      título: "Darkest Hour",
      artista: "Sevdaliza",
    },
    {
      url: "https://soundcloud.com/fiorinien/kate-bush-running-up-that-hill",
      artista: "Kate Bush",
      título: "Running Up That Hill",
    },
    {
      url: "https://soundcloud.com/quelle-chris/graphic-bleed-outs-feat",
      artista: "Quelle Chris",
      título: "Graphic Bleeds Outs",
    },
    {
      url: "https://soundcloud.com/kingprincessmusic/pain",
      artista: "King Princess",
      título: "Pain",
    },
  ];
  const ListaCancionesPrueba2 = [
    {
      url: "https://soundcloud.com/nationalxball2018/20-seconds",
      título: "Darkest Hour",
      artista: "Sevdaliza",
    },
  ];
  const [verFavoritas, setVerFavoritas] = useState(false);
  const viewCancionesFavoritas = () => {
    setVerFavoritas(!verFavoritas);
  };
  const [listaAReproducir, setListaAReproducir] =
    useState(ListaCancionesPrueba);
  const reproducirLista = (List) => {
    setListaAReproducir(List);
  };

  const [texto, setTexto] = useState("");

  const ponerTexto = (e) => {
    e.preventDefault();
    setTexto(e.target.value);
    // console.log(texto);
    return texto;
  };
  const preventdefaultear = (e) => {
    if (e.keyCode === 13 || e.code === "Enter") {
      e.preventDefault();
    }
  };
  const ponerEnter = (e) => {
    if (e.keyCode === 13 || e.code === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <>
      <aside className=" section listaCanciones">
        <Link
          to={{
            pathname: "/busquedaCanciones",
            state: { texto },
          }}
          onClick={preventdefaultear}
          onKeyPress={ponerEnter}
          onSubmit={preventdefaultear}
        >
          <form className=" d-flex flex-row">
            <input
              type="text"
              className="form-control form-control-md buscadorMusica"
              placeholder="Buscar Musica"
              value={texto}
              onChange={ponerTexto}
              onKeyPress={ponerEnter}
              onSubmit={preventdefaultear}
            ></input>
            <FaSearch className="iconobuscar" />
          </form>
        </Link>
        <Link
          to="/cancionesFavoritas"
          type="button"
          className="btnBuscar btn btn-primary"
          onClick={viewCancionesFavoritas}
        >
          Favoritas
        </Link>

        <h3 className="historialTitulo">Escuchadas</h3>
        <div className="lorem2">
          <HistorialSidebar />
        </div>
      </aside>
    </>
  );
};

export default SidebarIzquierdo;
