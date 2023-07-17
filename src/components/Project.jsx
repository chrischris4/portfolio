import { Link } from 'react-router-dom';
import '../styles/Project.css';

function Project(props) {
    return (
        <Link className="projectLink " to={props.link}>
            <div className="overlay"></div>
            <img className="exempleImg" src={props.cover} alt="" />
            <div className="overlayTitle">{props.title}</div>
        </Link>
    );
}

export default Project;
