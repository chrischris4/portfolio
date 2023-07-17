import { Link } from 'react-router-dom';
import '../styles/Project.css';

function Project(props) {
    return (
        <Link className="projectLink " to={props.link}>
            <div className="overlay">Voir plus..</div>
            <img className="exempleImg" src={props.cover} alt="" />
            <div className="overlayTitle">
                <div className="projectTitle">{props.title} </div>
            </div>
        </Link>
    );
}

export default Project;
