import '../styles/Page.css';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';

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
            <div className="pageTitle">
                <h1 className="pageh1">Booki - Agence de Location</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Frontend</h2>
                    <a
                        href="https://github.com/chrischris4/Booki_agence_de_location"
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
                </ul>
                <h2 className="projetTitleAbout">Difficulté</h2>
                <p className="pProjetAbout">La mise en place du responsive.</p>
                <h2 className="projetTitleAbout">Solution</h2>
                <p className="pProjetAbout">
                    J'ai appris à modifier les différentes sections qui
                    composent le site, suivant le format de l'écran, notamment
                    avec le <strong>display flex</strong>.
                </p>
                <h2 className="projetTitleAbout">Aqcuis</h2>
                <ul>
                    <li>HTML/CSS</li>
                    <li>Media queries</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                    alt="booki"
                    loading="lazy"
                />
                <p>
                    Sur ce projet j'ai effectué l'intégration du site en
                    <strong> HTML/CSS</strong>, j'ai du gérer le
                    <strong> responsive</strong>, un format desktop, tablette et
                    téléphone.
                </p>
            </div>

            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Autres Projets</h2>
            </div>
            <div className="others">
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

export default Booki;
