import '../styles/Page.css';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import Project from '../components/Project';
import Carousel from '../components/Carousel';
import Reseaux from '../components/Reseaux';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import { useTranslation } from 'react-i18next';
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/star-background";

function TenCents() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const observerRight = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animateRight");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const observerUp = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animateUp");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.pageh1').forEach((el) => observerRight.observe(el));
        document.querySelectorAll('.pageGithub').forEach((el) => observerUp.observe(el));
        document.querySelectorAll('.pageInfo, .projectContent').forEach((el) => observer.observe(el));

        return () => {
            observerRight.disconnect();
            observerUp.disconnect();
            observer.disconnect();
        };
    }, []);


    const images = [
        'https://i.ibb.co/8Kz4yvY/tencentsstart.webp',
        'https://i.ibb.co/KhtndfK/tencentsstart2.webp',
        'https://i.ibb.co/r3y7WP0/tencentsstart6.webp',
        'https://i.ibb.co/6rdqRY4/tencentsstart7.webp',
        'https://i.ibb.co/B22bCC8/tencentsstart8.webp',
        'https://i.ibb.co/WKjMTD0/tencentsstart9.webp',
        'https://i.ibb.co/bWw3G2C/tencentsstart10.webp',
    ];

    const descriptions = [
        t('tenCentsSub'),
        t('tenCentsSub2'),
        t('tenCentsSub3'),
        t('tenCentsSub4'),
        t('tenCentsSub5'),
        t('tenCentsSub6'),
        t('tenCentsSub7'),
    ];

    const imagesLogin = [
        'https://i.ibb.co/GPz5n9c/tencentsstart3.webp',
        'https://i.ibb.co/1mPr5S8/tencentsstart4.webp',
        'https://i.ibb.co/TqcdQWb/tencentsstart5.webp',
    ];

    const descriptionsLogin = [
        t('tenCentsLog'),
        t('tenCentsLog2'),
        t('tenCentsLog3'),
    ]

    const imagesPages = [
        'https://i.ibb.co/mD80WRD/tencents-On.webp',
        'https://i.ibb.co/d64kmqb/tencents-On2.webp',
        'https://i.ibb.co/0mQ5Rwq/tencents-On3.webp',
        'https://i.ibb.co/fFvN7mv/tencents-On4.webp',
        'https://i.ibb.co/4tZX15y/tencents-On5.webp',
    ];

    const descriptionsPages = [
        t('tenCentsPages'),
        t('tenCentsPages2'),
        t('tenCentsPages3'),
        t('tenCentsPages4'),
        t('tenCentsPages5'),

    ]

    const imagesExp = [
        'https://i.ibb.co/0mQ5Rwq/tencents-On3.webp',
        'https://i.ibb.co/xCn0xMB/tencentsgame.webp',
        'https://i.ibb.co/y6H6r0h/tencentsgame2.webp',
        'https://i.ibb.co/zh7bgZV/tencentsgame3.webp',
        'https://i.ibb.co/Bn2sY7f/tencentsgame4.webp',
        'https://i.ibb.co/74fCtbY/tencentsgame5.webp',
    ];

    const descriptionsExp = [
        t('tenCentsGame'),
        t('tenCentsGame2'),
        t('tenCentsGame3'),
        t('tenCentsGame4'),
        t('tenCentsGame5'),
        t('tenCentsGame6'),
    ]

    return (
        <div className="page-container">
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
            <div className="pageTitle relative">
                <ShootingStars />
                <StarsBackground />                <h1 className="pageh1">{t('TenCentsTitleTranslate')}</h1>
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
                    <li>MongoDB</li>
                </ul>
            </div>
            <h3 className='carouselTitle'>Création du compte</h3>
            <Carousel items={images}
                descriptions={descriptions}
            />

            <h3 className='carouselTitle'>Connexion</h3>

            <Carousel items={imagesLogin}
                descriptions={descriptionsLogin}
            />            <h3 className='carouselTitle'>Les pages</h3>

            <Carousel items={imagesPages}
                descriptions={descriptionsPages} />
            <h3 className='carouselTitle'>Expérience utilisateur</h3>

            <Carousel items={imagesExp}
                descriptions={descriptionsExp} />



            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersPersoTranslate')}</h2>
            </div>
            <div className="allProjectPage">
                <div className="projectContent">
                    <Project
                        title="Elden Lore"
                        about={t('eldenLoreAbout')}
                        cover="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                        link={`/EldenLore`}
                        loading="lazy"
                        filtre="PHP"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="My Agenda"
                        about={t('myAgendaAbout')}
                        cover="https://i.ibb.co/Pg9WvgH/myAgenda.webp"
                        link={`/MyAgenda`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="Reptimorph"
                        about={t('reptimorphAboutShort')}
                        cover="https://i.ibb.co/svCQxS6K/Capture-d-cran-2025-09-30-013221.png"
                        link={`/Reptimorph`}
                        loading="lazy"
                        filtre="Nest / Next"
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
