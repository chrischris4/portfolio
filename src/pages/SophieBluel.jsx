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
                <div className="imgInfo">
                    Sur ce projet j'ai géré la partie Frontend, j'ai géneré la
                    galerie de la page d'accueil à partir d'un fichier json en
                    effectuant des requêtes via une API.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/GM9CK94/sophiebluel3-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Le site contient une page d'authentification, pour qu'une
                    fois identifié, le propriétaire du site puisse accéder à un
                    mode édition.
                </div>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/nsQVpXN/sophiebluel2-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Une fois le mode édition activé, le propriétaire du site
                    pourra, grâce à une modale, ajouter, modifier ou supprimer
                    des images dans la galerie.
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

export default SophieBluel;
