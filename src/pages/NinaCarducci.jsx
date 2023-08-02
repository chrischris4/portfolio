import { useEffect } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';

function NinaCarducci() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <MetaTagsComponent
                title="Nina Carducci - Photographe"
                description="Projet seo, réferencement, optimisation, performance"
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
                <h1 className="pageH1">Nina Carducci - Photographe</h1>
            </div>
            <div className="pageProjectButton">
                <a
                    href="https://github.com/chrischris4/Nina_carducci_site_de_photographe"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="pageButton">Code du Projet </button>
                </a>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Sur ce projet j'ai géré toute la partie SEO, conversion et
                    compression des images, minification du code pour les
                    performances et optimisation du html pour le réferencement.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/qsNbWqj/nina2-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    J'ai ajouté des richSnippet nécessaire pour le réferencement
                    sur google, ainsi que des meta og pour les résaux sociaux.
                </div>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/dMHMXYn/nina3-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Afin d'atteindre le meilleurs score possible, j'ai utiliser
                    des outils tel que
                    <a
                        className="lienInfo"
                        href="https://pagespeed.web.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Pagespeed
                    </a>
                    et l'extension Wave afin d'identifier au mieux les problèmes
                    d'optimisation.
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    L'optimisation des performances, et du réferencement.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à utiliser des outils comme pagespeed, afin
                    d'analyser les problèmes, j'ai fais le nécessaire au niveau
                    des images et du code pour l'alléger le plus possible, puis
                    j'ai mis en place les meta, et richsnippet pour le
                    référencement.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <p className="pProjetAbout">
                    A la fin de ce projet, j'ai appris à optimiser un site, ses
                    perfomances, son accésibilité, son utilisation et son
                    référencement.
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

export default NinaCarducci;
