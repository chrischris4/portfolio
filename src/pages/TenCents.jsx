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
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">{t('pageh2')}</h2>
                <ul>
                    <li>React.js</li>
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
            <div className="pageInfo column">
                <h3>Vidéo de présentation :</h3>
                <div className="allExplainations">
                    <video width="300" controls preload="auto">
                        <source
                            src="/videos/TenCentsVideo.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <h4>
                        Cette vidéo contient une éxperience utilisateur des plus
                        classique, afin de vous donner une idée des
                        fonctionnalités de l'application, vous retrouverez plus
                        de détails sur celles-ci plus bas sur cette page.
                    </h4>
                </div>
            </div>
            {/* /////////////////////////////CREATION DU COMPTE////////////////////////// */}
            <div className="pageInfo column">
                <h3>Création d'un compte</h3>
                <div className="allExplainations">
                    <div className="explainationSlider">
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/Dt3Cn52/tencentsstart.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/XjLWvG7/tencentsstart2.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/C73hGyJ/tencentsstart6.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub3')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/stry8bP/tencentsstart7.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub4')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/YcCGXjH/tencentsstart8.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub5')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/LzGWkRD/tencentsstart9.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub6')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/FzZ1LTc/tencentsstart10.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub7')}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////CONNEXION////////////////////////// */}
            <div className="pageInfo column">
                <h3>Connexion</h3>
                <div className="allExplainations">
                    <div className="explainationSlider">
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/y69bwnT/tencentsstart3.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsLog')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/68tvNpQ/tencentsstart4.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsLog2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/xYkpThR/tencentsstart5.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsLog3')}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////LES PAGES////////////////////////// */}
            <div className="pageInfo column">
                <h3>Les différentes pages</h3>
                <div className="allExplainations">
                    <div className="explainationSlider">
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/DWvC5LQ/tencents-On.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/VWQGhjL/tencents-On2.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/XFKsLMM/tencents-On3.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages3')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/kSFfgtR/tencents-On4.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages4')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/x5zy4R6/tencents-On5.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages5')}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////USER EXPERIENCE////////////////////////// */}
            <div className="pageInfo column">
                <h3>Experience utilisateur / jeux</h3>
                <div className="allExplainations">
                    <div className="explainationSlider">
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/XFKsLMM/tencents-On3.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsgame')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/vsP5vn9/tencentsgame.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsgame2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/gvqCYHm/tencentsgame2.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsgame3')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/JsC7G3r/tencentsgame3.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsgame4')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/Pz7MxtT/tencentsgame4.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsgame5')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/wL94HVL/tencentsgame5.png"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsgame6')}</p>
                        </div>
                    </div>
                </div>
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
