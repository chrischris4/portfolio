import Banner from '../components/Banner';
import '../styles/Home.css';
import { useEffect, useState, useContext } from 'react';
import AllProject from '../components/AllProject';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import Reseaux from '../components/Reseaux';
import Services from '../components/Services';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function Home() {
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
        const observerLeft = new IntersectionObserver(
            (entries, observerLeft) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            `animateLeft${theme === 'dark' ? 'night' : ''}`
                        );
                        observerLeft.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const elementsToAnimateLeft = document.querySelectorAll('.about h3');

        elementsToAnimateLeft.forEach((element) => {
            observerLeft.observe(element);
        });

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

        const elementsToAnimateRight = document.querySelectorAll('.pAbout');

        elementsToAnimateRight.forEach((element) => {
            observerRight.observe(element);
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
                threshold: 0.1,
            }
        );

        const elementsToAnimate = document.querySelectorAll(
            '.competence, .parcours'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    }, [theme]);

    return (
        <div className={`page-container ${theme === 'dark' ? 'night' : ''}`}>
            <MetaTagsComponent
                title="Portfolio - JOST Christopher"
                description="Je suis Christopher JOST, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                keywords="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://chrischris4.github.io/p8/JC.ico"
                og_url="https://chrischris4.github.io/p8/"
                og_type="website"
            />
            <RichSnippetAuthor />
            <div id="topPageLink"></div>
            <div id="backHome"></div>
            <Banner />
            <div id="aboutLien"></div>
            <div className="aboutAll">
                <div className="about">
                    <h2 className="titleAbout"> {t('titleAboutTranslate')}</h2>
                    <p className="pAbout">{t('texteAbout')}</p>
                    <h3>{t('h3AboutTranslate')}</h3>
                </div>
            </div>
            <div id="parcoursLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>

                <h2>{t('parcoursTitleTranslate')}</h2>
            </div>
            <div className="parcours">
                <div className="parcoursContent">
                    <div className="parcoursP">
                        <h3>{t('adrarTitleTranslate')}</h3>
                        <h4>10/2021 - 06/2022</h4>
                        <p> {t('adrarPTranslate')}</p>
                    </div>
                    <a
                        className="parcoursLink"
                        href="https://www.adrar-formation.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="overlayParcours">
                            <h4>{t('overlayParcoursTranslate')}</h4>
                            <p> adrar-formation.com</p>
                        </div>
                        <img
                            className="parcoursImg"
                            src="https://i.ibb.co/Q6PbSS4/adrar-min.webp"
                            alt="adrarhomepage"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="parcoursContent">
                    <div className="parcoursP">
                        <h3>{t('openTitleTranslate')}</h3>
                        <h4>12/2022 - 08/2023</h4>
                        <p>{t('openPTranslate')}</p>
                        <p>{t('openP2Translate')}</p>
                    </div>
                    <a
                        className="parcoursLink"
                        href="https://openclassrooms.com/fr/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="overlayParcours">
                            <h4>{t('overlayParcoursTranslate')}</h4>
                            <p> openclassrooms.com</p>
                        </div>

                        <img
                            className="parcoursImg"
                            src="https://i.ibb.co/ZzwdcZF/open-min.webp"
                            alt="openclassroomshomepage"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="cv">
                    <a
                        className="buttonCv"
                        href="https://drive.google.com/uc?export=download&id=1BpIdVawO7mGZ9Se-SI3CienXT6EoHjeU
                        "
                        download
                    >
                        {t('buttonCvTranslate')}
                    </a>
                </div>
            </div>
            <div id="competenceLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>

                <h2>{t('competenceTitleTranslate')}</h2>
            </div>
            <div id="competences">
                <div className="competence">
                    <h3>Frontend</h3>
                    <div className="competenceContent">
                        <img
                            className="competenceImg"
                            src="https://i.ibb.co/WcqnJhx/social-media-5299596.png"
                            alt="illustration frontend"
                            loading="lazy"
                        />
                        <div className="vectorContainer">
                            <div className="competenceVector"></div>
                        </div>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
                <div className="competence">
                    <h3>Backend</h3>
                    <div className="competenceContent">
                        <img
                            className="competenceImg"
                            src="https://i.ibb.co/427cG02/server-5993206.png"
                            alt="illustration backend"
                            loading="lazy"
                        />
                        <div className="vectorContainer">
                            <div className="competenceVector"></div>
                        </div>
                        <ul>
                            <li>MongoDB</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
                <div className="competence">
                    <h3>Outils</h3>
                    <div className="competenceContent">
                        <img
                            className="competenceImg"
                            src="https://i.ibb.co/RgvQkzz/wrench-9846327.png"
                            alt="illustration outil"
                            loading="lazy"
                        />
                        <div className="vectorContainer">
                            <div className="competenceVector"></div>
                        </div>
                        <ul>
                            <li>VsCode</li>
                            <li>Postman</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projectLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('projetTitleTranslate')}</h2>
            </div>
            <AllProject />
            <div id="servicesLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Services</h2>
            </div>
            <div className="servicesContent">
                <Services
                    title={t('webDevTitleTranslate')}
                    description={t('webDevDescriptionTranslate')}
                    cover="https://i.ibb.co/0Kz4zHD/responsive-1055687.png"
                    listTitle={t('webDevListTitleTranslate')}
                    list={['HTML/CSS', 'React', 'JavaScript', 'MongoDB']}
                    listTitle2={t('webDevListTitle2Translate')}
                    list2={[
                        t('listWebTranslate'),
                        t('listWebTranslate1'),
                        t('listWebTranslate2'),
                        t('listWebTranslate3'),
                    ]}
                    p={t('servicesPTranslate')}
                    link={['/MonVieuxGrimoire', '/Kasa']}
                />
                <Services
                    title="SEO"
                    description={t('seoDescriptionTranslate')}
                    cover="https://i.ibb.co/h9j9H7t/ux.png"
                    listTitle={t('seoListTitleTranslate')}
                    list={['Pagespeed', 'Wave']}
                    listTitle2={t('seoListTitle2Translate')}
                    list2={[
                        t('listSeoTranslate'),
                        t('listSeoTranslate1'),
                        t('listSeoTranslate2'),
                        t('listSeoTranslate3'),
                    ]}
                    p={t('servicesPTranslate')}
                    link={['/NinaCarducci']}
                />
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
                <h2>{t('contactTitleTranslate')}</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default Home;
