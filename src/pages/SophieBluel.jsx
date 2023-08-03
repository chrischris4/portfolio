import { useEffect } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';

function SophieBluel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <MetaTagsComponent
                title="Sophie Bluel - Designer"
                description="Projet frontend, requête via API, javaScript"
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
                <h1 className="pageH1">Sophie Bluel - Designer</h1>
            </div>
            <div className="pageProjectButton">
                <a
                    href="https://github.com/chrischris4/Sophie_bluel_site_de_designer"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="pageButton">Code du Projet </button>
                </a>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <p>
                    Sur ce projet j'ai géré la partie <strong>Frontend</strong>,
                    j'ai généré la galerie de la page d'accueil à partir d'un
                    fichier <strong>JSON</strong> en effectuant des{' '}
                    <strong>requêtes</strong> via une <strong>API</strong>.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/GM9CK94/sophiebluel3-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <p>
                    Le site contient une page d'
                    <strong>authentification</strong>, pour qu'une fois
                    identifié, le propriétaire du site puisse accéder à un mode
                    édition.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/nsQVpXN/sophiebluel2-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <p>
                    Une fois le mode édition activé, le propriétaire du site
                    pourra, grâce à une <strong>modale</strong>, ajouter,
                    modifier ou supprimer des images dans la galerie.
                </p>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    L'utilisation d'une <strong>API</strong>, les différentes{' '}
                    <strong>requêtes</strong> et l'
                    <strong>authentification</strong> de l'utilisateur.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à effectuer des <strong>requêtes</strong> avec{' '}
                    <strong>fetch</strong>, afin de manipuler des données
                    présentes sur un fichier <strong>JSON</strong>, les Méthodes
                    : <strong>POST</strong>, <strong>GET</strong>,{' '}
                    <strong>DELETE</strong>, afin de poster, récupérer ou
                    supprimer des données.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <ul>
                    <li>API</li>
                    <li>Requêtes</li>
                    <li>JSON</li>
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

export default SophieBluel;
