import { useEffect } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';

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
            <div className="projetAbout">
                <h2 className="projetTitleAbout">Langages utilisés </h2>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                </ul>
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">
                    L'optimisation des <strong>performances</strong>.
                </p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à utiliser des outils comme
                    <strong> Pagespeed</strong>, afin d'analyser les problèmes,
                    j'ai faits le nécessaire au niveau des images et du
                    <strong> HTML/CSS</strong> pour l'alléger le plus possible,
                    puis j'ai mis en place les <strong>metas</strong> et
                    <strong> Richsnippet</strong>.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <ul>
                    <li>Optimisation</li>
                    <li>Performance</li>
                    <li>SEO</li>
                    <li>RichSnippets</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />

                <p>
                    Sur ce projet j'ai géré toute la partie <strong>SEO</strong>
                    , conversion et compression des images, minification du code
                    pour les
                    <strong> performances</strong> et
                    <strong> optimisation</strong> du HTML pour le
                    <strong> référencement</strong>.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/qsNbWqj/nina2-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <p>
                    J'ai ajouté des <strong>Richsnippet</strong> nécessaires
                    pour le
                    <strong> référencement</strong> sur google, ainsi que des
                    <strong> meta og</strong> pour les partages sur les réseaux
                    sociaux.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/dMHMXYn/nina3-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <p>
                    Afin d'atteindre le meilleur score possible, j'ai utilisé
                    des outils tels que
                    <strong> Pagespeed </strong>
                    et l'extension
                    <strong> Wave</strong> afin d'identifier au mieux les
                    problèmes d'optimisation.
                </p>
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
                        title="Mon Vieux Grimoire - Notation de Livres"
                        cover="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                        link={`/MonVieuxGrimoire`}
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

export default NinaCarducci;
