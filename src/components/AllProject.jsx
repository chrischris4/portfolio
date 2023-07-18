import kasa from '../assets/kasa.png';
import MVG from '../assets/MVG.png';
import SophieBluel from '../assets/SophieBluel.png';
import nina from '../assets/nina.png';
import booki from '../assets/Booki.png';
import '../styles/AllProject.css';
import '../styles/Project.css';
import { useEffect, useState } from 'react';
import Project from './Project';

function AllProject() {
    const [activeFilter, setActiveFilter] = useState('tout');
    const [showProjects, setShowProjects] = useState(true);

    useEffect(() => {
        const filterButtons = document.querySelectorAll('.buttonFilter');
        const imageItems = document.querySelectorAll('.projectContent');

        filterButtons.forEach((filterButton) => {
            filterButton.addEventListener('click', function () {
                const filterValue = this.getAttribute('dataFilter');

                setShowProjects(false);

                setTimeout(() => {
                    setActiveFilter(filterValue);

                    imageItems.forEach((item) => {
                        if (
                            filterValue === 'tout' ||
                            item.classList.contains(filterValue)
                        ) {
                            item.style.display = '';
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    setShowProjects(true);
                }, 500);
            });
        });
    }, []);

    return (
        <div id="project">
            <div className="filter">
                <button
                    className={`buttonFilter ${
                        activeFilter === 'tout' ? 'filterActive' : ''
                    }`}
                    dataFilter="tout"
                >
                    Tout
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'front' ? 'filterActive' : ''
                    }`}
                    dataFilter="front"
                >
                    Frontend
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'back' ? 'filterActive' : ''
                    }`}
                    dataFilter="back"
                >
                    Backend
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'seo' ? 'filterActive' : ''
                    }`}
                    dataFilter="seo"
                >
                    SEO
                </button>
            </div>
            <div
                className={`allProject ${showProjects ? 'show-projects' : ''}`}
            >
                <div className="projectContent tout front">
                    <Project
                        title="Kasa - Agence Immobilier"
                        cover={kasa}
                        link={`/Kasa`}
                    />
                </div>
                <div className="projectContent tout front">
                    <Project
                        title="Sophie Bluel - Designer"
                        cover={SophieBluel}
                        link={`/SophieBluel`}
                    />
                </div>
                <div className="projectContent tout back">
                    <Project
                        title="Mon Vieux Grimoire - Notation de Livres"
                        cover={MVG}
                        link={`/MonVieuxGrimoire`}
                    />
                </div>
                <div className="projectContent tout seo">
                    <Project
                        title="Nina Carducci - Portfolio d'Une Photographe"
                        cover={nina}
                        link={`/NinaCarducci`}
                    />
                </div>
                <div className="projectContent tout front">
                    <Project
                        title="Booki - Agence de Location"
                        cover={booki}
                        link={`/Booki`}
                    />
                </div>
            </div>
            <div id="contactLien"></div>
        </div>
    );
}

export default AllProject;
