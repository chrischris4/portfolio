import '../styles/Reseaux.css';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function Reseaux(props) {
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
                threshold: 0.5,
            }
        );

        const elementsToAnimate = document.querySelectorAll(
            '.skypeLink, .linkedinLink, .githubLinkReseaux'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    }, [theme]);
    return (
        <div className={`reseaux ${theme === 'dark' ? 'night' : ''}`}>
            <h3 className="reseauxP">{t('reseauxPTranslate')}</h3>
            <div className="reseauxLinks">
                <a
                    className="linkedinLink"
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Linkedin</p>
                    <img
                        className="linkedinImg"
                        src="https://i.ibb.co/3fdtLFX/linkedin-3536505.png"
                        alt="logo linkedin"
                    />
                </a>
                <a
                    className="skypeLink"
                    href="https://join.skype.com/invite/Cec2SWhMcalN"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Skype</p>
                    <img
                        className="skypeImg"
                        src="https://i.ibb.co/XkqgcnJ/skype.webp"
                        alt="logo skype"
                    />
                </a>
                <a
                    className="githubLinkReseaux"
                    href="https://github.com/chrischris4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Github</p>
                    <img
                        className="githubImgReseaux"
                        src="https://i.ibb.co/6ZxjDxV/github.webp"
                        alt="logo github"
                    />
                </a>
            </div>
        </div>
    );
}

export default Reseaux;
