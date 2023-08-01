import '../styles/Page.css';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';

function Booki() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <MetaTagsComponent
                title="Booki - Agence de Location "
                description="Projet frontend, intégration html/css, responsive"
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
                <h1 className="pageH1">Booki - Agence de Location </h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">
                    <a
                        href="https://github.com/chrischris4/Booki_agence_de_location"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Code du Projet
                    </a>
                </button>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="booki"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Sur ce projet j'ai effectué l'intégration du site en
                    html/css, j'ai du gérer le responsive, un format desktop,
                    tablette et téléphone.
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

export default Booki;
