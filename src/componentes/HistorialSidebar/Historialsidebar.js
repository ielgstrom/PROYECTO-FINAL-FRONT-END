import "./Historialsidebar.css";
export const HistorialSidebar = ({ historial }) => {
  return (
    <>
      {historial.map((elemento) => (
        <div className="listaHistorial">
          <div className="listaHistorialTitulo">{elemento.título}</div>
          <div>{elemento.artista}</div>
        </div>
      ))}
    </>
  );
};
