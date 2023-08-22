import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';
import '../styles/Project.css';

function Project(props) {
    const { t } = useTranslation();

    const { isDarkTheme } = useContext(ThemeContext);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme(isDarkTheme ? 'dark' : '');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            `animate${theme === 'dark' ? 'night' : ''}`
                        );
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
    }, [theme]);

    return (
        <RouterLink
            className={`projectLink${theme === ' dark' ? ' night' : ''}`}
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
                <div className="projectTitle">{props.title} </div>
            </div>
        </RouterLink>
    );
}

export default Project;
