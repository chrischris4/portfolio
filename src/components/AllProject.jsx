import { Link } from 'react-router-dom';
import exempleImage from '../assets/exemple.jpg';
import '../styles/AllProject.css';
import { useState } from 'react';

function AllProject() {
    const [currentFilter, setCurrentFilter] = useState('tout');

    const handleFilterClick = (filter) => {
        setCurrentFilter(filter);
    };

    return (
        <div id="project">
            <div className="filter">
                <button
                    className={currentFilter === 'tout' ? 'active' : ''}
                    onClick={() => handleFilterClick('tout')}
                >
                    Tout
                </button>
                <button
                    className={currentFilter === 'front' ? 'active' : ''}
                    onClick={() => handleFilterClick('front')}
                >
                    Frontend
                </button>
                <button
                    className={currentFilter === 'back' ? 'active' : ''}
                    onClick={() => handleFilterClick('back')}
                >
                    Backend
                </button>
                <button
                    className={currentFilter === 'seo' ? 'active' : ''}
                    onClick={() => handleFilterClick('seo')}
                >
                    SEO
                </button>
            </div>
            <div className="allProject">
                <Link
                    className={`projectLink ${
                        currentFilter === 'tout' || currentFilter === 'back'
                            ? 'show'
                            : 'none'
                    }`}
                    to={`/Kasa`}
                >
                    <div className="overlay"></div>
                    <img
                        className="exempleImg tout back"
                        src={exempleImage}
                        alt=""
                    />
                    <div className="overlayTitle">
                        Kasa - Site d'Agence de Location
                    </div>
                </Link>
                <Link
                    className={`projectLink ${
                        currentFilter === 'tout' || currentFilter === 'seo'
                            ? 'show'
                            : 'none'
                    }`}
                    to={`/LeVieuxGrimoire`}
                >
                    <div className="overlay"></div>
                    <img
                        className="exempleImg tout seo"
                        src={exempleImage}
                        alt=""
                    />
                    <div className="overlayTitle">
                        Le Vieux Grimoire - Site de Notation de Livre
                    </div>
                </Link>

                <Link
                    className={`projectLink ${
                        currentFilter === 'tout' || currentFilter === 'front'
                            ? 'show'
                            : 'none'
                    }`}
                    to={`/SophieBluel`}
                >
                    <div className="overlay"></div>
                    <img
                        className="exempleImg tout front"
                        src={exempleImage}
                        alt=""
                    />
                    <div className="overlayTitle">
                        Sophie Bluel - Site de Présentation
                    </div>
                </Link>

                <Link
                    className={`projectLink ${
                        currentFilter === 'tout' || currentFilter === 'front'
                            ? 'show'
                            : 'none'
                    }`}
                    to={`/NinaCarducci`}
                >
                    <div className="overlay"></div>
                    <img
                        className="exempleImg tout front"
                        src={exempleImage}
                        alt=""
                    />
                    <div className="overlayTitle">
                        Nina Carducci - Site de Présentaion Photographe
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AllProject;
