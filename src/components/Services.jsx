import '../styles/Services.css';
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

    return (
        <div className="services">
            <div className="servicesTop">
                <div className="servicesTitle">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <img
                    className="servicesImg"
                    src={props.cover}
                    alt="services"
                    loading="lazy"
                />
            </div>
            <div className="collapse" onClick={toggleCollapse}>
                <p>Plus de détail</p>
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
                    <h4>{props.title}</h4>
                    <p>{props.details}</p>
                </div>
            </div>
        </div>
    );
}
export default Services;
