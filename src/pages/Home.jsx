import Banner from '../components/Banner';
import '../styles/Home.css';
import { useEffect } from 'react';
import AllProject from '../components/AllProject';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import RichSnippetAuthor from '../components/RichSnippetAuthor';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <MetaTagsComponent
                title="Portfolio - JOST Christopher"
                description="Je suis Christopher JOST, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                keywords="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://chrischris4.github.io/p8/JC.ico"
                og_url="https://chrischris4.github.io/p8/"
                og_type="website"
            />
            <RichSnippetAuthor />
            <div id="topPageLink"></div>
            <div id="backHome"></div>
            <Banner />
            <div id="aboutLien"></div>
            <div className="about">
                <div className="contentAbout">
                    <h2 className="titleAbout">À propos de moi</h2>
                    <p className="pAbout">
                        Je vous souhaite la bienvenue sur mon portfolio ! Jeune
                        Développeur de 28 ans, je vous invite à en découvrir
                        d'avantage sur moi et mon travail, vous retrouverez ici
                        mon parcours, mes compétences ainsi que mes projets.
                        Ambitieux à l'idée de perfectionner mes aqcuis à travers
                        de nouvelles éxperiences.
                    </p>
                    <h3> Bonne visite !</h3>
                </div>
            </div>
            <div id="parcoursLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>

                <h2>Parcours</h2>
            </div>
            <div className="parcours">
                <div className="adrar">
                    <div className="adrarP">
                        <h3>Formation Adrar</h3>
                        <h4>10/2021 - 06/2022</h4>
                        Durant cette formation, j'ai pu en savoir plus sur ce
                        qu'est le métier de Développeur ainsi qu'approfondir mes
                        bases en coding.
                    </div>
                    <a
                        className="parcoursLink"
                        href="https://www.adrar-formation.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="overlayParcours">
                            <h4> Visiter leur site :</h4>
                            <p> adrar-formation.com</p>
                        </div>
                        <img
                            className="adrarImg"
                            src="https://i.ibb.co/Q6PbSS4/adrar-min.webp"
                            alt="adrarhomepage"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="openClass">
                    <div className="openClassP">
                        <h3>Formation OpenClassrooms</h3>
                        <h4>12/2022 - 08/2023</h4>
                        Durant cette formation je me suis professionalisé et ai
                        appronfondi mes connaissances en SEO, Frontend et
                        Backend.
                    </div>
                    <a
                        className="parcoursLink"
                        href="https://openclassrooms.com/fr/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="overlayParcours">
                            <h4> Visiter leur site :</h4>
                            <p> openclassrooms.com</p>
                        </div>

                        <img
                            className="openClassImg"
                            src="https://i.ibb.co/ZzwdcZF/open-min.webp"
                            alt="openclassroomshomepage"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="cv">
                    <a
                        className="buttonCv"
                        href="https://drive.google.com/uc?export=download&id=1BpIdVawO7mGZ9Se-SI3CienXT6EoHjeU
                        "
                        download
                    >
                        Mon CV
                    </a>
                </div>
            </div>
            <div id="competenceLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>

                <h2>Compétences</h2>
            </div>
            <div id="competence">
                <div className="frontend">
                    <img
                        className="frontendImg"
                        src="https://i.ibb.co/DfSx4x0/frontend-min.webp"
                        alt="illustration frontend"
                        loading="lazy"
                    />
                    <div className="competenceRow">
                        <h3>Frontend</h3>
                        <ul>
                            <li>Html/Css</li>
                            <li>React.JS</li>
                        </ul>
                    </div>
                </div>
                <div className="backend">
                    <img
                        className="backendImg"
                        src="https://i.ibb.co/kyyvCVN/backend-min.webp"
                        alt="illustration backend"
                        loading="lazy"
                    />
                    <div className="competenceRow">
                        <h3>Backend</h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
                <div className="outil">
                    <img
                        className="outilImg"
                        src="https://i.ibb.co/CsV5Cdq/outil-min.webp"
                        alt="illustration outil"
                        loading="lazy"
                    />
                    <div className="competenceRow">
                        <h3>Outils</h3>
                        <ul>
                            <li>VsCode</li>
                            <li>Git</li>
                            <li>Postman</li>
                            <li>npm</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projectLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>

                <h2>Projets</h2>
            </div>
            <AllProject />
            <div className="sectionTitle">
                <div className="styleTitle"></div>

                <h2>Me contacter</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default Home;
