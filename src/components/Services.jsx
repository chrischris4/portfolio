import '../styles/Services.css';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';

function Services(props) {
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
        '/MonVieuxGrimoire': 'Projet Backend',
        '/Kasa': 'Projet Frontend',
        '/NinaCarducci': 'Projet SEO',
    };

    return (
        <div className="services">
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
                <p>Plus de détails</p>
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
