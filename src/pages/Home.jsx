import Banner from '../components/Banner';
import '../styles/Home.css';
import { useEffect, useState, useContext } from 'react';
import AllProject from '../components/AllProject';
import Project from '../components/Project';
import ContactForm from '../components/ContactForm';
import MetaTags from '../components/MetaTags';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import Reseaux from '../components/Reseaux';
import Services from '../components/Services';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';
import Competence from '../components/Competence';
import Parcours from '../components/Parcours';

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
                threshold: 0.6,
            }
        );

        const elementsToAnimateRight =
            document.querySelectorAll('.aboutSlide, .cv');

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
            '.competence, .parcoursContent'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    }, [theme]);

    return (
        <div className={`page-container ${theme === 'dark' ? 'night' : ''}`}>
            <MetaTags
                title="Portfolio - JOST Christopher"
                description="Je suis Christopher JOST, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mon portfolio, mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                keywords="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend, portfolio"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://www.christopher-jost.fr/JC.ico"
                og_url="https://www.christopher-jost.fr/"
                og_type="website"
            />
            <RichSnippetAuthor />
            <div id="topPageLink"></div>
            <div id="backHome"></div>
            <Banner />
            <div id="aboutLien"></div>
            <div className="aboutAll">
                <div className="about">
                    <div className="aboutSlide">
                        <h2 className="titleAbout">
                            {' '}
                            {t('titleAboutTranslate')}
                        </h2>
                        <p className="pAbout">{t('textUpAbout')}</p>
                        <p className="pAbout">{t('textAbout')}</p>
                    </div>
                    <h3>{t('h3AboutTranslate')}</h3>
                </div>
            </div>
            <div id="parcoursLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('parcoursTitleTranslate')}</h2>
            </div>
            <div className="parcours">
                <Parcours
                    title={t('adrarTitleTranslate')}
                    date="10/2021 - 06/2022"
                    p={t('adrarPTranslate')}
                    link="https://www.adrar-formation.com/"
                    overlayTitle={t('overlayParcoursTranslate')}
                    overlayP="adrar-formation.com"
                    cover="https://i.ibb.co/Q6PbSS4/adrar-min.webp"
                    altCover="adrarhomepage"
                />

                <Parcours
                    title={t('openTitleTranslate')}
                    date="12/2022 - 08/2023"
                    p={t('openPTranslate')}
                    p2={t('openP2Translate')}
                    link="https://openclassrooms.com/fr/"
                    overlayTitle={t('overlayParcoursTranslate')}
                    overlayP="openclassrooms.com"
                    cover="https://i.ibb.co/ZzwdcZF/open-min.webp"
                    altCover="openclassroomshomepage"
                />
                <div className="cv">
                    <a
                        className="buttonCv"
                        href="https://drive.google.com/uc?export=download&id=1Pf7efCGmqpNwOdOPCgAlWOrnsAaeK4Ph
                        "
                        download
                    >
                        {t('buttonCvTranslate')}
                        <span className="material-symbols-rounded dl">
                            download
                        </span>
                    </a>
                </div>
            </div>
            <div id="competenceLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('competenceTitleTranslate')}</h2>
            </div>
            <div id="competences">
                <Competence
                    title="Frontend"
                    cover="https://i.ibb.co/tLWdp4Z/computer-7358692.png
"
                    list={['HTML/CSS', 'JavaScript', 'Bootstrap', 'React.js']}
                />
                <Competence
                    title="Backend"
                    cover="
https://i.ibb.co/D7d9JxP/database-658099.png
"
                    list={['MongoDB', 'Node.js', 'PHP', 'MySQL', 'NoSQL']}
                />
                <Competence
                    title="Outils"
                    cover="
https://i.ibb.co/tzLVdzv/support-807303.png
"
                    list={['VsCode', 'Postman', 'Git', 'XAMPP', 'Figma']}
                />
            </div>
            <div id="projectPersoLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('projetPersoTitle')}</h2>
            </div>
            <div id="projectsPerso">
                <div className="projectContent perso tout back front seo">
                    <Project
                        title={t('EldenLoreTitleTranslate')}
                        cover="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                        link={`/EldenLore`}
                        loading="lazy"
                        filtre="PHP"
                    />
                </div>
                <div className="projectContent perso tout back front seo">
                    <Project
                        title={t('TenCentsTitleTranslate')}
                        cover="https://i.ibb.co/BtNkKrp/ten-Cents-Mini.webp"
                        link={`/TenCents`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="projectContent perso tout back front seo">
                    <Project
                        title={t('MyAgenda - Votre agenda en ligne')}
                        cover="https://i.ibb.co/Pg9WvgH/myAgenda.webp"
                        link={`/MyAgenda`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
            </div>
            <div id="projectLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('projetTitle')}</h2>
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
                    list={[
                        'HTML/CSS',
                        'React',
                        'Node.js',
                        'JavaScript',
                        'MongoDB',
                        'PHP',
                    ]}
                    listTitle2={t('webDevListTitle2Translate')}
                    list2={[
                        t('listWebTranslate'),
                        t('listWebTranslate1'),
                        t('listWebTranslate2'),
                        t('listWebTranslate3'),
                    ]}
                    p={t('servicesPTranslate')}
                    link={['/TenCents', '/EldenLore']}
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
