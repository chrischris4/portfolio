import '../styles/Services.css';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Services(props) {
    const { t } = useTranslation();

    const [CollapseOpen, setCollapseOpen] = useState(false);

    const toggleCollapse = () => {
        if (CollapseOpen) {
            setCollapseOpen(false);
        } else {
            setCollapseOpen(true);
        }
    };

    const linkMap = {
        '/TenCents': t('linkBackend'),
        '/EldenLore': t('linkFrontend'),
        '/NinaCarducci': t('linkSEO'),
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animate"
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
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
                            "animateUp"
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
            '.btnLi, .normalLi, .linkCollapse, .collapse'
        );

        elementsToAnimateUp.forEach((element) => {
            observerUp.observe(element);
        });
    },);

    return (
        <div className="services" onClick={toggleCollapse}>
            <div className="servicesContainer">
                <div className='servicesTitle'>
                <h3>{props.title}</h3>
                <span className="material-symbols-rounded">
                {props.span}
</span></div>
                <div className="servicesAbout">
                <p className='text-neutral-200'>{props.description}</p>
                <span
                    className={`material-symbols-rounded collapseIcon ${
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
                    <ul>
                        {props.list2 &&
                            props.list2.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                    </ul>
                    <h3>{props.p}</h3>
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
        </div>
    );
}
export default Services;
