import { Link } from 'react-router-dom';
import './heder.css';

function Heder(){
    return(
    <nav className='header'>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Habilidades</Link>
    </nav>
    )
}
export default Heder;