import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Project.css';

function Project(props) {
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.projectLink').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <RouterLink
            className="projectLink"
            to={props.link}
        >
            <div className="overlay">
                <h3>{t('overlayProjetTranslate')}</h3>
            </div>
            <img
                className="projectImg"
                src={props.cover}
                alt="project"
                loading="lazy"
            />
            <div className="overlayTitle">
                <div className="projectTitle">
                    <h2>{props.title}</h2>
                    <p>{props.about}</p>
                </div>
            </div>
        </RouterLink>
    );
}

export default Project;
