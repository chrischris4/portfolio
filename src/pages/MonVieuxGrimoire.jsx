import { useEffect } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';

function LeVieuxGrimoire() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
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
            <div className="pageProjectTitle">
                <h1 className="pageH1">
                    Mon Vieux Grimoire - Notation de Livre
                </h1>
            </div>
            <div className="pageProjectButton">
                <a
                    href="https://github.com/chrischris4/Mon_vieux_grimoire_site_notation_de_livre"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="pageButton">Code du Projet </button>
                </a>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Je me suis occupé de toute la partie Backend de ce projet,
                    une application React avec express et une base de données
                    MongoDB. Sur ce site nous pouvons créer un compte afin d'y
                    ajouter les livres de notre choix, avec en plus un système
                    de notation.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/B3M0qkX/mvg3-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <div className="imgInfo">
                    J'ai crée un systeme d'authentification, afin que
                    l'utilisateur puisse s'inscrire et se connecter à son compte
                    personnel, un token est géneré avec jsonwebtoken, un
                    middleware à été crée pour vérifier l'authentification de
                    l'utilisateur.
                </div>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/FhGNntW/mvg2-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <div className="imgInfo">
                    J'ai crée un model pour les livres contenant leur infos,
                    ainsi qu'un controller afin que l'on puisse ajouter,
                    modifier, supprimer ou noter ces livres. J'ai aussi ajouté
                    un middleware afin qu'à l'ajout d'une image, celle-ci soit
                    automatiquement convertie au format webp, et redimensionnée.
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    L'utilisation d'une base de données, la création de models,
                    de controller et de middleware.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à crée une base de données mongoDB grâce à un
                    cours et des recherches, puis utiliser un controller pour
                    mettre en place les fonction dont ont a besoin pour le bon
                    fonctionnement du site.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <ul>
                    <li>MongoDB</li>
                    <li>Models</li>
                    <li>Controller</li>
                    <li>Middleware</li>
                </ul>
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

export default LeVieuxGrimoire;
