import './experiencias.css'
import contenido from '../../contenido/experiencias.json'
import ExperienciasCard from './experienciasCard';
function Experiencias() {
	
	return (
		<div className='experiencias'>
			<h1>Experiencias</h1>
			{contenido.eperiencias?.map((exp, index) => (
				<ExperienciasCard exp={exp} key={`exp-${index}`} />
			))}
		</div>
	)
}
export default Experiencias;