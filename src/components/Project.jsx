import exempleImage from '../assets/exemple.jpg';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

function Projet() {
    return (
        <Link className="projectLink" to={`/Kasa`}>
            <div className="overlay"></div>
            <img className="exempleImg tout back" src={exempleImage} alt="" />
            <div className="overlayTitle">Kasa - Site Agence de Location</div>
        </Link>
    );
}

export default Projet;
