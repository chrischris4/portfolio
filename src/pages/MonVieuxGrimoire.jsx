import { useEffect } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import Project from '../components/Project';
import Reseaux from '../components/Reseaux';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import { useTranslation } from 'react-i18next';
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/star-background";

function LeVieuxGrimoire() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        const observerRight = new IntersectionObserver(
            (entries, observerRight) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animateRight"
                        );
                        observerRight.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const elementsToAnimateRight = document.querySelectorAll(
            '.pageh1'
        );

        elementsToAnimateRight.forEach((element) => {
            observerRight.observe(element);
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

        const elementsToAnimateUp = document.querySelectorAll('.pageGithub');

        elementsToAnimateUp.forEach((element) => {
            observerUp.observe(element);
        });
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

        const elementsToAnimate = document.querySelectorAll(
            '.pageInfo, .projectContent'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    },);
    return (
        <div className="page-container">
            <MetaTagsComponent
                title="Mon Vieux Grimoire - Notation de Livre"
                description="Projet backend, app react, express, base de données MongoDB"
                keywords="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://www.christopher-jost.fr/JC.ico"
                og_url="https://www.christopher-jost.fr/"
                og_type="website"
            />
            <RichSnippetAuthor />
            <div id="topPageLink"></div>
            <div className="pageTitle relative">
                <ShootingStars />
                <StarsBackground />                <h1 className="pageh1">{t('MVGTitleTranslate')}</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Backend</h2>
                    <a
                        href="https://github.com/chrischris4/Mon_vieux_grimoire_site_notation_de_livre"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="imgGithub"
                            src="https://i.ibb.co/DVbScgL/icons8-github-128.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">{t('pageh2')}</h2>
                <ul>
                    <li>HTML/CSS</li>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>

                </ul>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                        alt="Mon-vieux-grimoire"
                        loading="lazy"
                    />
                    <p>{t('pageInfoMVG')}</p>
                </div>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/B3M0qkX/mvg3-min.webp"
                        alt="Mon-vieux-grimoire"
                        loading="lazy"
                    />
                    <p>{t('pageInfoMVG2')}</p>
                </div>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/FhGNntW/mvg2-min.webp"
                        alt="Mon-vieux-grimoire"
                        loading="lazy"
                    />
                    <p>{t('pageInfoMVG3')}</p>
                </div>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersTranslate')}</h2>
            </div>
            <div className="allProjectPage">
                <div className="projectContent">
                    <Project
                        title="Kasa"
                        about="Site d'agence immobillière"
                        cover="https://i.ibb.co/znVrBcm/kasa-min.webp"
                        link={`/Kasa`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="Sophie Bluel"
                        about="Portfolio de designer"
                        cover="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                        link={`/SophieBluel`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="Nina Carducci"
                        about="Portfolio de photographe"
                        cover="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                        link={`/NinaCarducci`}
                        loading="lazy"
                    />
                </div>
            </div>
            <div id="reseauxLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('reseauxTitleTranslate')}</h2>
            </div>
            <Reseaux />
            <div id="contactLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Contact</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default LeVieuxGrimoire;
