import { Link as RouterLink } from 'react-router-dom';
import '../styles/Project.css';

function Project(props) {
    return (
        <RouterLink className="projectLink " to={props.link}>
            <div className="overlay">
                <h3>Voir plus..</h3>
            </div>
            <img
                className="projectImg"
                src={props.cover}
                alt="project"
                loading="lazy"
            />
            <div className="overlayTitle">
                <div className="projectTitle">{props.title} </div>
            </div>
        </RouterLink>
    );
}

export default Project;
