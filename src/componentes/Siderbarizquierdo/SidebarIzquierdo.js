import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import HistorialSidebar from "../HistorialSidebar/Historialsidebar";
import "./SidebarIzquierdo.css";

export const SidebarIzquierdo = () => {
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
  const ListaCancionesPrueba2 = [
    {
      urlsong2: "https://soundcloud.com/nationalxball2018/20-seconds",
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
  return (
    <>
      <aside className=" section listaCanciones">
        <form className=" d-flex flex-row">
          <input
            type="text"
            className="form-control form-control-md buscadorMusica"
            placeholder="Buscar Musica"
          ></input>
        </form>
        <Link
          to="/cancionesFavoritas"
          type="button"
          className="btnBuscar btn btn-primary"
          onClick={viewCancionesFavoritas}
        >
          Canciones favoritas
        </Link>

        <h3 className="historialTitulo">Historial</h3>
        <div className="lorem2">
          <HistorialSidebar historial={ListaCancionesPrueba} />
        </div>
      </aside>
    </>
  );
};

export default SidebarIzquierdo;
