import '../styles/Services.css';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function Services(props) {
    const { t } = useTranslation();

    const [CollapseOpen, setCollapseOpen] = useState(false);

    const toggleCollapse = () => {
        if (CollapseOpen) {
            closeCollapse();
        } else {
            openCollapse();
        }
    };

    const openCollapse = () => {
        setCollapseOpen(true);
    };

    const closeCollapse = () => {
        setCollapseOpen(false);
    };

    const linkMap = {
        '/MonVieuxGrimoire': t('linkBackend'),
        '/Kasa': t('linkFrontend'),
        '/NinaCarducci': t('linkSEO'),
    };

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

        const elementsToAnimate = document.querySelectorAll('.services');

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
        const observerUp = new IntersectionObserver(
            (entries, observerUp) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            `animateUp${theme === 'dark' ? 'night' : ''}`
                        );
                        observerUp.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const elementsToAnimateUp = document.querySelectorAll(
            '.btnLi, .normalLi, .linkCollapse'
        );

        elementsToAnimateUp.forEach((element) => {
            observerUp.observe(element);
        });
    }, [theme]);

    return (
        <div className={`services ${theme === 'dark' ? 'night' : ''}`}>
            <div className="servicesContainer">
                <h3 className="servicesTitle">{props.title}</h3>
                <div className="servicesTop">
                    <img
                        className="servicesImg"
                        src={props.cover}
                        alt="services"
                        loading="lazy"
                    />
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="collapse" onClick={toggleCollapse}>
                <p>{t('collapseTranslate')}</p>
                <span
                    className={`material-symbols-rounded vectorDown ${
                        CollapseOpen ? 'rotate' : ''
                    }`}
                >
                    expand_more
                </span>
            </div>
            <div
                className={`collapseContainer ${
                    CollapseOpen ? 'open' : 'close'
                }`}
            >
                <div
                    className={`collapseContent ${
                        CollapseOpen ? 'open' : 'close'
                    }`}
                >
                    <h4>{props.listTitle}</h4>
                    <ul className="btnUl">
                        {props.list &&
                            props.list.map((item, index) => (
                                <li className="btnLi" key={index}>
                                    {item}
                                </li>
                            ))}
                    </ul>
                    <h4>{props.listTitle2}</h4>
                    <ul className="normalUl">
                        {props.list2 &&
                            props.list2.map((item, index) => (
                                <li className="normalLi" key={index}>
                                    {item}
                                </li>
                            ))}
                    </ul>
                    <div className="styleCollapseContent"></div>
                    <p>{props.p}</p>
                    <div className="linksCollapse">
                        {props.link &&
                            props.link.map((item, index) => (
                                <RouterLink
                                    className="linkCollapse"
                                    to={item}
                                    key={index}
                                >
                                    {linkMap[item]}
                                </RouterLink>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;
