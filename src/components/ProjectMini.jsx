import { Link as RouterLink } from 'react-router-dom';
import '../styles/ProjectMini.css';
import { useTranslation } from 'react-i18next';

function ProjectMini(props) {
    const { t } = useTranslation();

    return (
        <RouterLink className="projectLinkMini " to={props.link}>
            <div className="overlayMini">
                <h3>{t('overlayProjetTranslate')}</h3>
            </div>
            <img
                className="projectImgMini"
                src={props.cover}
                alt="project"
                loading="lazy"
            />
            <div className="overlayTitleMini">
                <p>{props.filtre}</p>
                <div className="projectTitleMini">{props.title} </div>
            </div>
        </RouterLink>
    );
}

export default ProjectMini;
