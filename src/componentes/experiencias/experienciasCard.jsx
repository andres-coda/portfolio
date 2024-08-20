import './experiencias.css'
import { useState } from 'react';
import Arrowleft from '../../assets/arrowLeft.svg'
import ArrowRight from '../../assets/arrowRight.svg'
function ExperienciasCard({exp}) {
    const [actual, setActual] = useState(0);
    const anterior = actual>0 ? actual-1 : exp.img.length-1;
    const siguiente = actual<exp.img.length-1? actual+1: 0;
	const handleFlechaAnt = () => {
        setActual(anterior);
    };

    const handleFlechaSig = () => {
        setActual(siguiente);
    };
    return(
        
            <div className='exp-interno'>
                <div className='exp-img'>
                    <img src={Arrowleft} alt='Anterior' title='Anterior' className='flechaAnt' onClick={handleFlechaAnt} />
                    <img 
                        src={exp.img[actual].img} 
                        alt={exp.img[actual].titulo} 
                        key={exp.img[actual].img} // Esto ayuda a que React detecte el cambio
                        className="img-transition-enter-active"                    
                    />
                    <img src={ArrowRight} alt='Siguiente' title='Siguiente' className='flechaSig' onClick={handleFlechaSig} />
                    <div className='miniImg'>
                        <img 
                        src={exp.img[anterior].img} 
                        alt={exp.img[anterior].titulo} 
                        onClick={handleFlechaAnt} 
                        className={actual === anterior ? "selected" : ""}
                        />
                        <img 
                        src={exp.img[siguiente].img}
                         alt={exp.img[siguiente].titulo} 
                         onClick={handleFlechaSig} 
                         className={actual === anterior ? "selected" : ""}
                         />
                    </div>
                </div>
                <div className='exp-texto'>
                    <h3>{exp.nombre}</h3>
                    {exp.descripcion?.map((e,index)=>(
                        <p key={`exp-text-${index}`}>{e}</p>
                    ))}
                    <div className='exp-enlaces'>

                    <h6><a href={exp.enlace} target="_blank" rel="noopener noreferrer">Enlace de la página</a></h6>
                    <h6><a href={exp.enlaceGitFront} target="_blank" rel="noopener noreferrer">Enlace gitHub del Frontend</a></h6>
                    <h6><a href={exp.enlaceGitBack} target="_blank" rel="noopener noreferrer">Enlace git del Backend</a></h6>
                    </div>
                </div>
            </div>
    )

}

export default ExperienciasCard;