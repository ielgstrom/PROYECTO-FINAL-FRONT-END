import "./PaginaMatches.css";
import Matches from "../../componentes/Matches/Matches";
import { Reproductor } from "../../componentes/Reproductor/Reproductor";


export const matches = () =>{
    return(
        <div>
            <Matches/>
            <Reproductor/>
        </div>
      
    )
}
export default Matches;