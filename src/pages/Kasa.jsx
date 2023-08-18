import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import { useEffect, useContext, useState } from 'react';
import { ThemeContext } from '../components/ThemeSombre';

function Kasa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { isDarkTheme } = useContext(ThemeContext);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        if (isDarkTheme) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
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
                <h1 className="pageh1">Kasa - Agence Immobilière </h1>
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
                <h2 className="projetTitleAbout">Langages utilisés </h2>
                <ul>
                    <li>HTML/CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    La mise en place de l'application, l'utilisation des
                    <strong> composants</strong>, apprendre à gérer leur état et
                    transmettre des informations d'un
                    <strong> composants</strong> à un autre.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à mettre en place une{' '}
                    <strong>application React</strong>, avec son système de
                    routes et ses différents <strong>packages</strong>. J'ai
                    appris à utiliser des <strong>hooks</strong> comme{' '}
                    <strong>UseState</strong> et <strong>UseEffect</strong>,
                    pour changer l'état des <strong>composants</strong>, et les
                    <strong> props</strong> pour transmettre des informations
                    d'un <strong>composants</strong> à un autre.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
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
                <p>
                    Sur ce projet j'ai mis en place une application
                    <strong> react</strong>, je me suis occupé de toute la
                    partie
                    <strong> Frontend</strong>. J'ai faits en sorte de générer
                    des cards pour chaque logement sur la page d'accueil,
                    contenant toutes les infomations provenant d'un fichier
                    <strong> JSON</strong>.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/vvft8b9/kasa2-min.webp"
                    alt="kasa"
                    loading="lazy"
                />
                <p>
                    Aux cliques sur une card, nous sommes redirigés vers une
                    page logements qui contient toutes les informations
                    présentes sur celle-ci, titre, photos, propriétaire...
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
                        title="Sophie Bluel - Designer"
                        cover="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                        link={`/SophieBluel`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title="Mon Vieux Grimoire - Notation de Livres"
                        cover="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                        link={`/MonVieuxGrimoire`}
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

export default Kasa;
