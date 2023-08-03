import { Link as RouterLink } from 'react-router-dom';
import '../styles/ProjectMini.css';

function ProjectMini(props) {
    return (
        <RouterLink className="projectLinkMini " to={props.link}>
            <div className="overlayMini">
                <h3>Voir plus..</h3>
            </div>
            <img
                className="projectImgMini"
                src={props.cover}
                alt="project"
                loading="lazy"
            />
            <div className="overlayTitleMini">
                <div className="projectTitleMini">{props.title} </div>
            </div>
        </RouterLink>
    );
}

export default ProjectMini;
