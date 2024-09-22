import '../styles/Page.css';
import { useEffect, useContext, useState } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function EldenLore() {
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
                title="Elden Lore - Site sur l'univers de Elden Ring"
                description="Projet PHP, SQL, PhpMyAdmin, Xampp"
                keywords="Jost Christopher, développeur, FullStack, siteWeb, PHP, SQL, Xampp"
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
                <h1 className="pageh1">{t('EldenLoreTitleTranslate')}</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Frontend / Backend</h2>
                    <a
                        href="https://github.com/chrischris4/elden_lore"
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
                    <li>PHP</li>
                    <li>JavaScript</li>
                </ul>
                <h2 className="projetTitleAbout">{t('pageh22')}</h2>
                <p className="pProjetAbout">{t('pageDiffEldenLore')}</p>
                <h2 className="projetTitleAbout">Solutions</h2>
                <p className="pProjetAbout">{t('pageSolEldenLore')}</p>
                <h2 className="projetTitleAbout">{t('pageh23')}</h2>
                <ul>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>XAMPP</li>
                    <li>Apache</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                    alt="eldenLore"
                    loading="lazy"
                />
                <p>{t('pageInfoEldenLore')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/VqjMf3T/Elden-Lore-Article.webp"
                    alt="eldenLore"
                    loading="lazy"
                />
                <p>{t('pageInfoEldenLore2')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/fHH23Hw/Elden-Lore2.webp"
                    alt="eldenLore"
                    loading="lazy"
                />
                <p>{t('pageInfoEldenLore3')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/TKDGmV0/elden-Lore-User.webp"
                    alt="eldenLore"
                    loading="lazy"
                />
                <p>{t('pageInfoEldenLore4')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/Jxs3bhB/Elden-Lore-Commentary.webp"
                    alt="eldenLore"
                    loading="lazy"
                />
                <p>{t('pageInfoEldenLore5')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/hWgZ3rP/elden-Lore-Edit.webp"
                    alt="eldenLore"
                    loading="lazy"
                />
                <p>{t('pageInfoEldenLore7')}</p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/BG26mFC/elden-Lore-Lore.webp"
                    alt="eldenLore"
                    loading="lazy"
                />
                <p>{t('pageInfoEldenLore6')}</p>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersPersoTranslate')}</h2>
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

export default EldenLore;
