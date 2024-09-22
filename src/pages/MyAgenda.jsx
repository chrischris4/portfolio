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
                <h2 className="projetTitleAbout">{t('pageh22')}</h2>
                <p className="pProjetAbout">
                    Générer les années / mois / jours, et la création des
                    évenements.
                </p>
                <h2 className="projetTitleAbout">Solutions</h2>
                <p className="pProjetAbout">
                    Je me suis document sur l'utilisation de Date en javascript,
                    puis j'ai utiliser DatePicker pour la création et
                    modification des évenements.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/WytrSc0/myAgenda.png"
                    alt="booki"
                    loading="lazy"
                />
                <p>
                    Ce site permet aux utilisateurs de gérer son quotidien et
                    organiser ses évenements facilement. Depuis la page
                    d'accueil, il peux se connecter ou crée un compte.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/xhzzbK6/my-Agenda2.png"
                    alt="booki"
                    loading="lazy"
                />
                <p>
                    Après s'être connecté, l'utilisateur est redirigé vers son
                    Dashboard, oû il trouvera le mois actuel, ses évenements
                    d'aujourd'hui et ses prochains évenements, il peux aussi
                    naviguer vers les sections calendriers, évenements et
                    paramêtre depuis la nav.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/5rpvLvD/my-Agenda3.png"
                    alt="booki"
                    loading="lazy"
                />
                <p>
                    L'utilisateur peux crée un évenements depuis plusieurs
                    sections, celle ci contient un champs pour la date, l'heure
                    de début et de fin, le titre et la description de
                    l'évenement.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/58xrrjh/my-Agenda4.png"
                    alt="booki"
                    loading="lazy"
                />
                <p>
                    Une fois crée, les évenements sont disponibles dans la
                    section du même nom, et suivant la date de celui-ci, il sera
                    visible sur le Dashboard et une pastille sera présente sur
                    le jour correspondant dans le mois actuel.{' '}
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/RztTfxk/my-Agenda6.png"
                    alt="booki"
                    loading="lazy"
                />
                <p>
                    Les jours du mois actuel son cliquable et redirige vers une
                    section correspondant au jour cliqué, dans cette section
                    l'utilisateur peux voir tout les évenements correspondant à
                    ce jour, et naviguer vers le jour suivant ou précedent.
                    Cette section est également accessible depuis la section
                    calendriers qui contient tout les mois de l'années actuelle
                    et les jours y sont également cliquable.{' '}
                </p>{' '}
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
                        cover="https://i.ibb.co/27wv3t1/ten-Cents-Mini.png"
                        link={`/TenCents`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title={t('EldenLoreTitleTranslate')}
                        cover="https://i.ibb.co/qCtMQ1M/elden-Lore.png"
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
