import { Link } from 'react-router-dom';
import exempleImage from '../assets/exemple.jpg';
import '../styles/AllProject.css';
import { useEffect, useState } from 'react';

function AllProject() {
    const [activeFilter, setActiveFilter] = useState('tout');
    const [showProjects, setShowProjects] = useState(true);

    useEffect(() => {
        const filterButtons = document.querySelectorAll('.buttonFilter');
        const imageItems = document.querySelectorAll('.projectLink');

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
                <Link className="projectLink tout front" to={`/Kasa`}>
                    <div className="overlay"></div>
                    <img className="exempleImg" src={exempleImage} alt="" />
                    <div className="overlayTitle">
                        Kasa - Site d'Agence de Location
                    </div>
                </Link>
                <Link className="projectLink tout back" to={`/LeVieuxGrimoire`}>
                    <div className="overlay"></div>
                    <img className="exempleImg" src={exempleImage} alt="" />
                    <div className="overlayTitle">
                        Le Vieux Grimoire - Site de Notation de Livre
                    </div>
                </Link>
                <Link className="projectLink tout front" to={`/SophieBluel`}>
                    <div className="overlay"></div>
                    <img className="exempleImg" src={exempleImage} alt="" />
                    <div className="overlayTitle">
                        Sophie Bluel - Site de Présentation
                    </div>
                </Link>
                <Link className="projectLink tout seo" to={`/NinaCarducci`}>
                    <div className="overlay"></div>
                    <img className="exempleImg" src={exempleImage} alt="" />
                    <div className="overlayTitle">
                        Nina Carducci - Site de Photographie
                    </div>
                </Link>
            </div>
            <div id="contactLien"></div>
        </div>
    );
}

export default AllProject;
