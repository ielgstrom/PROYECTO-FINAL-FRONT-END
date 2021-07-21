import "./PagCancionesFavoritas.css";
import { CancionesFavoritas } from "../../componentes/CancionesFavoritas/CancionesFavoritas";
import { Reproductor } from "../../componentes/Reproductor/Reproductor";

export const PagCancionesFavoritas =()=> {
    return(
        <div>
            <CancionesFavoritas/>
            <Reproductor/>
        </div>
    )
}
export default PagCancionesFavoritas;