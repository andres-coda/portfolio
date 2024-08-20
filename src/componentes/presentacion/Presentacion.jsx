import './presentacion.css'
import contenido from '../../contenido/experiencias.json'
function Presentacion(){
    return(
        <div className='presentacion'>
            <img src={contenido.sobreMi.img} alt='Andrés Coda' />
            <div>
                <h2>Andrés Coda</h2>
                <h3>{contenido.sobreMi.titulo}</h3>
                {contenido.sobreMi.descripcion?.map((desp,index)=>(
                    <p key={`desp-mi${index}`}>{desp.desp}</p>
                ))}
            </div>
        </div>
    )
}
export default Presentacion;