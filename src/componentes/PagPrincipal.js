import React, { useState } from "react";
import { Perfil } from "./Perfil";
import { CancionesFavoritas } from "./CancionesFavoritas";
import { Reproductor } from "./Reproductor/Reproductor";
import { HistorialSidebar } from "./HistorialSidebar";
export const PagPrincipal = () => {
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
      <div className="d-flex flex-column ">
        <div className="d-flex  align-items-stretch paginaPrincipal">
          <aside className=" section listaCanciones">
            <form className=" d-flex flex-row">
              <input
                type="text"
                className="form-control form-control-md buscadorMusica"
                placeholder="Buscar Musica"
              ></input>
              <i className="buscadorMusica">B</i>
            </form>
            <button
              type="button"
              className="btnBuscar btn btn-primary"
              onClick={viewCancionesFavoritas}
            >
              Canciones favoritas
            </button>

            <h3 className="historialTiulo">Historial</h3>
            <div className="lorem">
              <HistorialSidebar historial={ListaCancionesPrueba} />
            </div>
          </aside>

          <p className="header Main">
            {false && <Perfil />}
            {verFavoritas && (
              <CancionesFavoritas ListaCancionesPrueba={ListaCancionesPrueba} />
            )}
          </p>

          <aside className="section ListaAmigos">
            <button type="button" className="btn btn-primary">
              Ver perfil
            </button>
          </aside>
        </div>

        <Reproductor ListaCancionesPrueba={listaAReproducir} />
      </div>
    </>
  );
};
