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
        '/Reptimorph': t('linkReptimorph'),
        '/Flun': t('linkFlun'),
        '/TenCents': t('linkBackend'),
        '/EldenLore': t('linkFrontend'),
        '/MyAgenda': t('linkSEO'),
    };


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
            { threshold: 0.1 }
        );

        const observerUp = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animateUp");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.services').forEach((el) => observer.observe(el));
        document.querySelectorAll('.btnLi, .normalLi, .linkCollapse, .collapse').forEach((el) => observerUp.observe(el));

        return () => {
            observer.disconnect();
            observerUp.disconnect();
        };
    }, []);

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
