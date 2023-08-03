import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import { useEffect } from 'react';

function Kasa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
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
            <div className="pageProjectTitle">
                <h1 className="pageH1">Kasa - Agence Immobilière </h1>
            </div>
            <div className="pageProjectButton">
                <a
                    href="https://github.com/chrischris4/Kasa_site_agence_immobiliere"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="pageButton">Code du Projet </button>
                </a>
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
            <div className="projetAbout">
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    L'utilisation des <strong>composants</strong>, apprendre à
                    gérer leur état et transmettre des informations d'un
                    <strong> composants</strong> à un autre.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à utiliser les <strong>hooks</strong> et les
                    <strong> props</strong>, les <strong> hooks </strong>
                    pour changer l'état des <strong>composants</strong>, et les
                    <strong> props</strong> pour transmettre des informations
                    d'un <strong>composants</strong> à un autre.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <ul>
                    <li>Npm</li>
                    <li>React.js</li>
                    <li>Hooks</li>
                    <li>Props</li>
                </ul>
            </div>
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
            <div id="contactLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default Kasa;
