import '../styles/Page.css';
import { useEffect, useContext, useState } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function MyAgenda() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { isDarkTheme } = useContext(ThemeContext);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    useEffect(() => {
        if (isDarkTheme) {
            setTheme('dark');
        } else {
            setTheme('');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const observerRight = new IntersectionObserver(
            (entries, observerRight) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            `animateRight${theme === 'dark' ? 'night' : ''}`
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
            '.pageh1, .overlayTitleMini p, .projectTitleMini'
        );

        elementsToAnimateRight.forEach((element) => {
            observerRight.observe(element);
        });

        const observerUp = new IntersectionObserver(
            (entries, observerUp) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            `animateUp${theme === 'dark' ? 'night' : ''}`
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
                            `animate${theme === 'dark' ? 'night' : ''}`
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
            '.pageInfo, .othersMini'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    }, [theme]);

    return (
        <div className={`page-container ${theme === 'dark' ? 'night' : ''}`}>
            <MetaTagsComponent
                title="MyAgenda - Votre agenda en ligne "
                description="Projet fullstack, react node.js express"
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
            <div className="pageTitle">
                <h1 className="pageh1">MyAgenda - Votre agenda en ligne</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Frontend / Backend</h2>
                    <a
                        href="https://github.com/chrischris4/myAgenda"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="imgGithub"
                            src="https://i.ibb.co/dD4Q3xW/git.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">{t('pageh2')}</h2>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                </ul>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/Pg9WvgH/myAgenda.webp"
                        alt="myAgenda"
                        loading="lazy"
                    />
                    <div className="pageInfoDesc">
                        <p>
                            Ce site permet aux utilisateurs de gérer leur
                            quotidien et organiser leur évenements facilement.
                        </p>
                        <ul>
                            <li>
                                Enregistrement d'un 'user' dans la base de
                                données
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/30fFvpZ/my-Agenda2.webp"
                        alt="myAgenda"
                        loading="lazy"
                    />
                    <div className="pageInfoDesc">
                        <p>
                            Après s'être connecté, l'utilisateur est redirigé
                            vers son Dashboard.
                        </p>
                        <ul>
                            <li>On genère le moi actuel</li>
                            <li>
                                On récupère tout les "event" crée par
                                l'utilisateur dans la base de données grâce à
                                leur id
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/mFzRQtV/my-Agenda3.webp"
                        alt="myAgenda"
                        loading="lazy"
                    />

                    <div className="pageInfoDesc">
                        <p>
                            L'utilisateur peux créer, modifier ou supprimer un
                            évenement depuis plusieurs onglets.
                        </p>
                        <ul>
                            <li>
                                Création, suppression ou modification d'un
                                'event' dans la base de données
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/VT7hxdk/my-Agenda4.webp"
                        alt="myAgenda"
                        loading="lazy"
                    />
                    <div className="pageInfoDesc">
                        <p>
                            Une fois crée, les évenements sont disponibles dans
                            plusieurs onglets.
                        </p>
                        <ul>
                            <li>Calendrier</li>
                            <li>Evenements</li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/d49PMF8/my-Agenda6.webp"
                        alt="myAgenda"
                        loading="lazy"
                    />
                    <div className="pageInfoDesc">
                        <p>
                            Les jours du mois actuel son cliquable et redirige
                            vers une section correspondant au jour cliqué, on
                            compare la date contenue dans les 'event' pour
                            choisir de les afficher ou non.
                        </p>
                    </div>
                </div>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersTranslate')}</h2>
            </div>
            <div className="othersPerso">
                <div className="othersMini persoMargin">
                    <ProjectMini
                        title={t('TenCentsTitleTranslate')}
                        cover="https://i.ibb.co/BtNkKrp/ten-Cents-Mini.webp"
                        link={`/TenCents`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title={t('EldenLoreTitleTranslate')}
                        cover="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                        link={`/EldenLore`}
                        loading="lazy"
                        filtre="PHP"
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

export default MyAgenda;
