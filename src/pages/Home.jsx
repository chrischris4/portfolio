import Banner from '../components/Banner';
import '../styles/Home.css';
import { useEffect, useState } from 'react';
import AllProject from '../components/AllProject';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import Reseaux from '../components/Reseaux';
import Services from '../components/Services';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isUp, setIsUp] = useState(false);

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
            <div className="aboutAll">
                <div className="about">
                    <h2 className="titleAbout">À propos de moi</h2>
                    <p className="pAbout">
                        Je vous souhaite la bienvenue sur mon
                        <strong> portfolio</strong> ! Jeune
                        <strong> Développeur</strong> de 28 ans, je vous invite
                        à en découvrir d'avantage sur moi et mon travail, vous
                        retrouverez ici mon <strong>parcours</strong>, mes
                        <strong> compétences</strong> ainsi que mes
                        <strong> projets</strong>.
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
                <div className="parcoursContent">
                    <div className="parcoursP">
                        <h3>Formation Adrar</h3>
                        <h4>10/2021 - 06/2022</h4>
                        <p>
                            {' '}
                            Formation découverte sur le métier de Développeur
                            web.
                        </p>
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
                            className="parcoursImg"
                            src="https://i.ibb.co/Q6PbSS4/adrar-min.webp"
                            alt="adrarhomepage"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="parcoursContent">
                    <div className="parcoursP">
                        <h3>Formation OpenClassrooms</h3>
                        <h4>12/2022 - 08/2023</h4>
                        <p>Formation Développeur / Intégrateur web</p>
                        <p>Diplôme niveau bac +2</p>
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
                            className="parcoursImg"
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
                        Télécharger mon CV
                    </a>
                </div>
            </div>
            <div id="competenceLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>

                <h2>Compétences</h2>
            </div>
            <div id="competences">
                <div className="competence">
                    <div className="competenceContent">
                        <div className="competenceTop">
                            <h3>Frontend</h3>
                            <img
                                className="competenceImg"
                                src="https://i.ibb.co/DfSx4x0/frontend-min.webp"
                                alt="illustration frontend"
                                loading="lazy"
                            />
                        </div>
                        <div className="competenceStyle">
                            <div
                                className={`competenceVector ${
                                    isUp ? 'trailUp' : 'trailDown'
                                }`}
                                onAnimationIteration={() =>
                                    setIsUp((prevIsUp) => !prevIsUp)
                                }
                            ></div>
                        </div>

                        <ul>
                            <li>HTML/CSS</li>
                            <li>React.JS</li>
                        </ul>
                    </div>
                </div>
                <div className="competence">
                    <div className="competenceContent">
                        <div className="competenceTop">
                            <h3>Backend</h3>
                            <img
                                className="competenceImg"
                                src="https://i.ibb.co/kyyvCVN/backend-min.webp"
                                alt="illustration backend"
                                loading="lazy"
                            />
                        </div>
                        <div className="competenceStyle">
                            <div
                                className={`competenceVector ${
                                    isUp ? 'trailUp' : 'trailDown'
                                }`}
                                onAnimationIteration={() =>
                                    setIsUp((prevIsUp) => !prevIsUp)
                                }
                            ></div>
                        </div>
                        <ul>
                            <li>MongoDB</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
                <div className="competence">
                    <div className="competenceContent">
                        <div className="competenceTop">
                            <h3>Outils</h3>
                            <img
                                className="competenceImg"
                                src="https://i.ibb.co/CsV5Cdq/outil-min.webp"
                                alt="illustration outil"
                                loading="lazy"
                            />
                        </div>
                        <div className="competenceStyle">
                            <div
                                className={`competenceVector ${
                                    isUp ? 'trailUp' : 'trailDown'
                                }`}
                                onAnimationIteration={() =>
                                    setIsUp((prevIsUp) => !prevIsUp)
                                }
                            ></div>
                        </div>
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
            <div id="servicesLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Services</h2>
            </div>
            <h3 className="servicesPres">
                Après avoir aqcuis de nombreuses compétences lors de mes
                formations et mes différents projets, je suis en mesure de vous
                proposez ces services
            </h3>
            <div className="servicesContent">
                <Services
                    title="Site Vitrine"
                    description="Un site adapter à vos besoins, parfaitement ajuster afin de partager au mieux vos convictions à vos visiteurs."
                    details="un site parfaitement adapter a vos besoins"
                    cover="
                    https://i.ibb.co/8gHf982/Web-Development-Singgle-06-generated.jpg"
                />
                <Services
                    title="SEO"
                    description="Optimisation, performance, accéssibilité, les indispensables pour améliorer votre réferencement."
                    details="Optimisation des performance, n'hésitez pas a découvrir le projet SEO sur lequel j'ai travailler en cliquant sur."
                    cover="https://i.ibb.co/xJjKS2s/Web-Development-Singgle-01-generated.jpg"
                />
            </div>

            <div id="reseauxLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Réseaux</h2>
            </div>
            <Reseaux />
            <div id="contactLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Contact</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default Home;
