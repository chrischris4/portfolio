import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import { useEffect, useContext, useState } from 'react';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function Kasa() {
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

        const elementsToAnimateRight = document.querySelectorAll('.pageh1');

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
                title="Kasa - Agence Immobilière"
                description="Kasa, agence immobilière, application react, projet frontend"
                keywords="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://chrischris4.github.io/p8/JC.ico"
                og_url="https://chrischris4.github.io/p8/"
                og_type="website"
            />
            <div id="topPageLink"></div>
            <div className="pageTitle">
                <h1 className="pageh1">{t('KasaTitleTranslate')}</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Frontend</h2>
                    <a
                        href="https://github.com/chrischris4/Kasa_site_agence_immobiliere"
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
                    <li>HTML/CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
                <h2 className="projetTitleAbout">{t('pageh22')}</h2>
                <p className="pProjetAbout">{t('pageDiffKasa')}</p>
                <h2 className="projetTitleAbout">Solutions</h2>
                <p className="pProjetAbout">{t('pageSolKasa')}</p>
                <h2 className="projetTitleAbout">{t('pageh23')}</h2>
                <ul>
                    <li>Npm</li>
                    <li>React</li>
                    <li>Hooks</li>
                    <li>Props</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/znVrBcm/kasa-min.webp"
                    alt="kasa"
                    loading="lazy"
                />
                <p>{t('pageInfoKasa')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/vvft8b9/kasa2-min.webp"
                    alt="kasa"
                    loading="lazy"
                />
                <p>{t('pageInfoKasa2')}</p>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersTranslate')}</h2>
            </div>
            <div className="others">
                <div className="othersMini">
                    <ProjectMini
                        title={t('BookiTitleTranslate')}
                        cover="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                        link={`/Booki`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title="Sophie Bluel - Designer"
                        cover="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                        link={`/SophieBluel`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title={t('MVGTitleTranslate')}
                        cover="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                        link={`/MonVieuxGrimoire`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title={t('NinaTitleTranslate')}
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

export default Kasa;
