import '../styles/AllProject.css';
import { useEffect, useState} from 'react';
import Project from './Project';
import { useTranslation } from 'react-i18next';
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/star-background";

function AllProject() {
    const { t } = useTranslation();

    const [activeFilter, setActiveFilter] = useState('tout');
    const [showProjects, setShowProjects] = useState(true);

    useEffect(() => {
        const filterButtons = document.querySelectorAll('.buttonFilter');
        const imageItems = document.querySelectorAll('.projectContent');

        filterButtons.forEach((filterButton) => {
            filterButton.addEventListener('click', function () {
                const filterValue = this.getAttribute('data-filter');

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
                threshold: 0.2,
            }
        );

        const elementsToAnimate = document.querySelectorAll('.filter, .projectContent');

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    },);

    return (
        <div id="project">
            <div className="filter relative">
            <ShootingStars />
            <StarsBackground />
                <button
                    className={`buttonFilter ${
                        activeFilter === 'tout' ? 'filterActive' : ''
                    }`}
                    data-filter="tout"
                >
                    {t('filterTranslate')}
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'front' ? 'filterActive' : ''
                    }`}
                    data-filter="front"
                >
                    Frontend
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'back' ? 'filterActive' : ''
                    }`}
                    data-filter="back"
                >
                    Backend
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'seo' ? 'filterActive' : ''
                    }`}
                    data-filter="seo"
                >
                    SEO
                </button>
            </div>
            <div
                className={`allProject ${showProjects ? 'show-projects' : ''}`}
            >
                <div className="projectContent tout front">
                    <Project
                        title="Kasa"
                        about="Site d'agence immobillière"
                        cover="https://i.ibb.co/znVrBcm/kasa-min.webp"
                        link={`/Kasa`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout front">
                    <Project
                        title="Sophie Bluel"
                        about="Portfolio de designer"
                        cover="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                        link={`/SophieBluel`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout back">
                    <Project
                        title="Mon vieux grimoire"
                        about="Site de notation de livres"
                        cover="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                        link={`/MonVieuxGrimoire`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout seo">
                    <Project
                        title="Nina Carducci"
                        about="Portfolio de photographe"
                        cover="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                        link={`/NinaCarducci`}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

export default AllProject;
