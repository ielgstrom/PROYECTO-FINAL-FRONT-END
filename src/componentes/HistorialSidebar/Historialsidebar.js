import "./Historialsidebar.css";
export const HistorialSidebar = ({ historial }) => {
  return (
    <>
      {historial.map((elemento) => (
        <div key={elemento.artista} className="listaHistorial">
          <div key={elemento.título} className="listaHistorialTitulo">
            {elemento.título}
          </div>
          <div className="artistaHisotrial">{elemento.artista}</div>
        </div>
      ))}
    </>
  );
};
export default HistorialSidebar;
