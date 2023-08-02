import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
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
                <div className="imgInfo">
                    Sur ce projet j'ai mis en place une application React, je me
                    suis occupé de toute la partie Frontend. J'ai fais en sorte
                    de génerer des cards pour chaque logements sur la page
                    d'accueil, contenant toutes les infos provenant d'un fichier
                    json.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/vvft8b9/kasa2-min.webp"
                    alt="kasa"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Au clique sur une card, nous sommes redirigé vers une page
                    logements qui contient toutes les infos présentes sur
                    celle-ci, titre, photos, propriétaire..
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    L'utilisation des composants, apprendre à géré leur états et
                    transmettre des informations d'un composant à un autre.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à utiliser les hooks et les props, les hooks
                    pour changer l'état des composants, et les props pour
                    transmettre des informations d'un composant parents à un
                    composant enfant.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <p className="pProjetAbout">
                    A la fin de ce projet, j'ai appris à utiliser différent
                    package, le systeme de routage, ainsi que manipuler les
                    composants, leur valeurs et leur états
                </p>
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
