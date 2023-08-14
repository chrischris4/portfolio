import '../styles/Services.css';
import React, { useState } from 'react';

function Services() {
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
                    <h3>Site vitrine</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Officiis ex praesentium pariatur minima incidunt
                        ab dolores similique?
                    </p>
                </div>
                <img
                    className="servicesImg"
                    src="https://i.ibb.co/ctdk50Z/Web-Development-Singgle-06-generated.jpg"
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
                    <h4>description</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Similique accusantium, sit eos atque excepturi
                        numquam, esse eligendi impedit magni consequuntur a ad
                        quo eius dignissimos officiis tempora. Sit, eos aperiam!
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Services;
