import '../styles/Page.css';
import { useEffect, useContext, useState } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function Booki() {
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
                title="10 Cents - Application de tirage aux sort en ligne"
                description="Projet frontend et backend, React.js, Node.js, MongoDB, NoSQL, express"
                keywords="Jost Christopher, développeur, FullStack, application, React.js, Node.js, MongoDB, NoSQL, express, frontend, backend"
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
                <h1 className="pageh1">{t('TenCentsTitleTranslate')}</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Frontend / Backend</h2>
                    <a
                        href="https://github.com/chrischris4/Booki_agence_de_location"
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
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                </ul>
                <h2 className="projetTitleAbout">{t('pageh22')}</h2>
                <p className="pProjetAbout">{t('pageDiffTenCents')}</p>
                <h2 className="projetTitleAbout">Solutions</h2>
                <p className="pProjetAbout">{t('pageSolTenCents')}</p>
                <h2 className="projetTitleAbout">{t('pageh23')}</h2>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="tenCents"
                    loading="lazy"
                />
                <p>{t('pageInfoTenCents')}</p>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersPersoTranslate')}</h2>
            </div>
            <div className="others">
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

export default Booki;