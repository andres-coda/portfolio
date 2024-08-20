import Experiencias from "../experiencias/experiencias";
import Habilidades from "../habilidades/habilidades";
import Presentacion from "../presentacion/Presentacion";
import './home.css'
function Home(){
    return(
        <div className="home">
        <Presentacion/>
        <Experiencias />
        <Habilidades/>
        </div>
    )
}
export default Home;