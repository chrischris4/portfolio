import { useEffect, useContext, useState } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import { ThemeContext } from '../components/ThemeSombre';

function LeVieuxGrimoire() {
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
                title="Mon Vieux Grimoire - Notation de Livre"
                description="Projet backend, app react, express, base de données MongoDB"
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
                <h1 className="pageh1">
                    Mon Vieux Grimoire - Notation de Livre
                </h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Backend</h2>
                    <a
                        href="https://github.com/chrischris4/Mon_vieux_grimoire_site_notation_de_livre"
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
                <h2 className="projetTitleAbout">Langages utilisés </h2>
                <ul>
                    <li>HTML/CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    L'utilisation d'une base de données, la création de
                    <strong> model</strong>, de <strong>controller</strong>, de
                    <strong> root</strong> et de
                    <strong> middleware</strong>.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à créer une base de données
                    <strong> MongoDB</strong> grâce à des cours et des
                    recherches, puis j'ai utilisé les{' '}
                    <strong>controller</strong>, <strong>model</strong> et{' '}
                    <strong>root </strong>
                    pour mettre en place les paramêtres dont on a besoin pour le
                    bon fonctionnement du site.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <ul>
                    <li>MongoDB</li>
                    <li>Model</li>
                    <li>Controller</li>
                    <li>Root</li>
                    <li>Middleware</li>
                    <li>BDD</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <p>
                    Je me suis occupé de toute la partie
                    <strong> Backend</strong> de ce projet, une application
                    <strong> React</strong> avec <strong>express</strong> et une
                    base de données
                    <strong> MongoDB</strong>. Sur ce site nous pouvons créer un
                    compte afin d'y ajouter les livres de notre choix, avec en
                    plus un système de notation.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/B3M0qkX/mvg3-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <p>
                    J'ai créé un système d'authentification, afin que
                    l'utilisateur puisse s'inscrire et se connecter à son compte
                    personnel, un <strong>token</strong> est généré avec
                    <strong> jsonwebtoken</strong>, un
                    <strong> middleware</strong> a été créé pour vérifier
                    l'authentification de l'utilisateur.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/FhGNntW/mvg2-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <p>
                    J'ai créé un <strong>model</strong> pour les livres
                    contenant leurs informations, un
                    <strong> controller</strong> et un <strong>root </strong>
                    afin que l'on puisse ajouter, modifier, supprimer ou noter
                    ces livres. J'ai aussi ajouté un
                    <strong> middleware</strong> afin qu'a l'ajout d'une image,
                    celle-ci soit automatiquement convertit au format webp, et
                    redimensionnée.
                </p>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Autres Projets</h2>
            </div>
            <div className="others">
                <div className="othersMini">
                    <ProjectMini
                        title="Booki - Agence de Location"
                        cover="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                        link={`/Booki`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title="Kasa - Agence Immobilière"
                        cover="https://i.ibb.co/znVrBcm/kasa-min.webp"
                        link={`/Kasa`}
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
                        title="Nina Carducci - Photographe"
                        cover="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                        link={`/NinaCarducci`}
                        loading="lazy"
                    />
                </div>
            </div>
            <div id="reseauxLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Réseaux</h2>
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

export default LeVieuxGrimoire;
