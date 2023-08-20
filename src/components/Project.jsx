import { Link as RouterLink } from 'react-router-dom';
import '../styles/Project.css';

function Project(props) {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    const elementsToAnimate = document.querySelectorAll('.projectLink');

    elementsToAnimate.forEach((element) => {
        observer.observe(element);
    });

    return (
        <RouterLink className="projectLink " to={props.link}>
            <div className="overlay">
                <h3>Voir plus...</h3>
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
