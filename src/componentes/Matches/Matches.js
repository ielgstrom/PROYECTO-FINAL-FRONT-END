import { useState, useEffect } from "react";
import { FaComments, FaCog, FaTimes, FaHeart, FaSearch } from "react-icons/fa";
import jwt_decode from "jwt-decode";
import "./Matches.css";
import { useCallback } from "react";
export const Matches = () => {
  const [personaMatch, setPersonaMatch] = useState(false);
  const [listasMatch, setListasMatch] = useState(false);
  const [indiceLista, setIndiceLista] = useState(0);
  const [indicePersona, setIndicePersona] = useState(0);

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id_persona = decoded.usuario._id;

  const extraerMatchesUsuario = useCallback(async () => {
    const resp = await fetch(
      `https://myrythm.herokuapp.com/matches/${id_persona}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const listas = await resp.json();
    setListasMatch(listas);
  }, [id_persona, token]);

  const extraerListaMatch = useCallback(
    (indiceLista, listasMatch, indicePersona) => {
      debugger;
      if (typeof listasMatch !== "undefined") {
        if (
          indiceLista === 0 &&
          indicePersona < listasMatch.listaTresCoincidencias.length
        ) {
          return listasMatch.listaTresCoincidencias;
        } else if (
          indiceLista === 1 &&
          indicePersona < listasMatch.listaDosCoincidencias.length
        ) {
          return listasMatch.listaDosCoincidencias;
        } else if (
          indiceLista === 2 &&
          indicePersona < listasMatch.listaUnaCoincidencia.length
        ) {
          return listasMatch.listaUnaCoincidencia;
        } else if (indiceLista > 2) {
          return false;
        }
        return [];
      }
    },
    []
  );

  const getPersonaMatch = useCallback(
    (indiceLista, indicePersona, listasMatch) => {
      debugger;
      let listaAIterar = [];
      listaAIterar = extraerListaMatch(indiceLista, listasMatch, indicePersona);

      if (listaAIterar === false) {
        return false;
      }

      if (listaAIterar.length === 0) {
        setIndiceLista(indiceLista + 1);
        setIndicePersona(0);
      }

      setPersonaMatch(listaAIterar[indicePersona]);
    },
    [extraerListaMatch]
  );

  useEffect(extraerMatchesUsuario, [extraerMatchesUsuario]);
  useEffect(() => {
    setIndiceLista(0);
    setIndicePersona(0);
  }, []);

  useEffect(() => {
    if (listasMatch) {
      getPersonaMatch(indiceLista, indicePersona, listasMatch);
    }
  }, [getPersonaMatch, indiceLista, indicePersona, listasMatch]);

  const lanzarDatosMatch = async (idPersona, decision) => {
    const decisionString = decision ? "positivo" : "negativo";

    const resp = await fetch(
      `https://myrythm.herokuapp.com/matches/${decisionString}/${idPersona}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (resp.ok) {
      setIndicePersona(indicePersona + 1);
    }
  };
  return (
    <>
      <div className=" header Main scrollable">
        <div className="contenedorMatches">
          {typeof personaMatch !== "undefined" || (
            <div className="row mensajeMatches">
              <h1 className="mensajeMatches2 col-11">En busqueda de matches...</h1>
              <FaSearch className="busqueda"/>
            </div>
          )}

          {!personaMatch || (
            <>
              <ul className="myrythm list-unstyled row">
                <button className="botonImpostaciones">
                  <li className="col-4 ">
                    <FaCog className="icono" />
                  </li>
                </button>
                <li className="logo col-4">
                  <strong>MyR</strong>
                </li>
                <button className="botonChat">
                  <li className="col-4">
                    <FaComments className="icono" />
                  </li>
                </button>
              </ul>
              <div className="contenedorParejas row">
                <div className="futurasParejas col-10">
                  <img alt="imagenParejafutura" />
                </div>
                <ul className="contenedorIformaciones list-unstyled">
                  <li className="row">
                    <p className="col-12 nombre2">
                      <strong>{personaMatch.username}</strong>
                    </p>
                  </li>
                  <li className="row">
                    <p className="col-12 infoPareja">
                      {personaMatch.localizacion}
                    </p>
                  </li>
                </ul>
              </div>
              <ul className="row botones list-unstyled">
                <li className="col-6">
                  <button className="boton">
                    <FaTimes
                      className="rechazar"
                      onClick={() => lanzarDatosMatch(personaMatch._id, false)}
                    />
                  </button>
                </li>
                <li className="col-6">
                  <button className="boton">
                    <FaHeart
                      className="corazon"
                      onClick={() => lanzarDatosMatch(personaMatch._id, true)}
                    />
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Matches;

//se tiene que llamar en PagPrincipal
