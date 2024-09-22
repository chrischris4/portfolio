import '../styles/Page.css';
import { useEffect, useContext, useState } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function TenCents() {
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

    document.addEventListener('DOMContentLoaded', () => {
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const carousel = document.querySelector('.carousel');
        const explainations = document.querySelectorAll('.explaination');
        const totalExplainations = explainations.length;
        let currentIndex = 0;

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < totalExplainations - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        function updateCarousel() {
            const translateX = -currentIndex * 100;
            carousel.style.transform = `translateX(${translateX}%)`;
        }
    });

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
                <h3>{t('tenCentsSectionTitle')}</h3>
                <div className="allExplainations">
                    <video controls preload="auto">
                        <source
                            src="/videos/TenCentsVideo.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="tenCentsPresentation">
                        <h4>{t('pageInfoTenCents')}</h4>
                        <h4>{t('pageInfoTenCents2')}</h4>
                        <h4>{t('pageInfoTenCents3')}</h4>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////CREATION DU COMPTE////////////////////////// */}
            <div className="pageInfo column">
                <h3>{t('tenCentsSectionTitle2')}</h3>
                <div className="allExplainations">
                    <div className="explainationSlider">
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/8Kz4yvY/tencentsstart.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/KhtndfK/tencentsstart2.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/r3y7WP0/tencentsstart6.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub3')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/6rdqRY4/tencentsstart7.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub4')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/B22bCC8/tencentsstart8.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub5')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/WKjMTD0/tencentsstart9.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsSub6')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/bWw3G2C/tencentsstart10.webp"
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
                                src="https://i.ibb.co/GPz5n9c/tencentsstart3.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsLog')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/1mPr5S8/tencentsstart4.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsLog2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/TqcdQWb/tencentsstart5.webp"
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
                <h3>{t('tenCentsSectionTitle3')}</h3>
                <div className="allExplainations">
                    <div className="explainationSlider">
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/mD80WRD/tencents-On.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/d64kmqb/tencents-On2.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/0mQ5Rwq/tencents-On3.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages3')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/Bn2sY7f/tencentsgame4.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsPages4')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/4tZX15y/tencents-On5.webp"
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
                <h3>{t('tenCentsSectionTitle4')}</h3>
                <div className="allExplainations">
                    <div className="explainationSlider">
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/0mQ5Rwq/tencents-On3.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsGame')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/xCn0xMB/tencentsgame.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsGame2')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/y6H6r0h/tencentsgame2.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsGame3')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/zh7bgZV/tencentsgame3.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsGame4')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/Bn2sY7f/tencentsgame4.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsGame5')}</p>
                        </div>
                        <div className="explaination">
                            <img
                                className="pageImg explainationImg"
                                src="https://i.ibb.co/74fCtbY/tencentsgame5.webp"
                                alt="tenCents"
                                loading="lazy"
                            />
                            <p>{t('tenCentsGame6')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersPersoTranslate')}</h2>
            </div>
            <div className="othersPerso ">
                <div className="othersMini persoMargin">
                    <ProjectMini
                        title={t('EldenLoreTitleTranslate')}
                        cover="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                        link={`/EldenLore`}
                        loading="lazy"
                        filtre="PHP"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title="MyAgenda"
                        cover="https://i.ibb.co/Pg9WvgH/myAgenda.webp"
                        link={`/MyAgenda`}
                        loading="lazy"
                        filtre="React / Node.js"
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

export default TenCents;
