import { Link } from 'react-router-dom';
import exempleImage from '../assets/exemple.jpg';
import '../styles/AllProject.css';
import { useEffect } from 'react';

function AllProject() {
    useEffect(() => {
        const filterButtons = document.querySelectorAll('.buttonFilter');
        const imageItems = document.querySelectorAll('.projectLink');

        filterButtons.forEach((filterButton) => {
            filterButton.addEventListener('click', function (event) {
                let filterValue = this.getAttribute('dataFilter');

                imageItems.forEach((item) => {
                    if (!item.classList.contains(filterValue)) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = '';
                    }
                });
            });
        });

        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                button.classList.add('filterActive');

                filterButtons.forEach((otherButton) => {
                    if (otherButton !== button) {
                        otherButton.classList.remove('filterActive');
                    }
                });
            });
        });
    }, []);

    return (
        <div id="project">
            <div className="filter">
                <button className="buttonFilter tout" dataFilter="tout">
                    Tout
                </button>
                <button className="buttonFilter front" dataFilter="front">
                    Frontend
                </button>
                <button className="buttonFilter back" dataFilter="back">
                    Backend
                </button>
                <button className="buttonFilter seo" dataFilter="seo">
                    SEO
                </button>
            </div>
            <div className="allProject">
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
                        Nina Carducci - Site de Présentation Photographe
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AllProject;
