import Banner from '../components/Banner';
import '../styles/Home.css';
import { useEffect, useState, useContext } from 'react';
import AllProject from '../components/AllProject';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import Reseaux from '../components/Reseaux';
import Services from '../components/Services';
import { ThemeContext } from '../components/ThemeSombre';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isUp, setIsUp] = useState(false);

    const { isDarkTheme } = useContext(ThemeContext);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        if (isDarkTheme) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`page-container ${theme === 'dark' ? 'night' : ''}`}>
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
                        <strong> compétences</strong>, mes
                        <strong> projets</strong> ainsi que mes{' '}
                        <strong>services</strong>.
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
                            web
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
                                src="https://i.ibb.co/WcqnJhx/social-media-5299596.png"
                                alt="illustration frontend"
                                loading="lazy"
                            />
                        </div>
                        <div className="competenceStyle">
                            <div className="vectorContainer">
                                <div
                                    className={`competenceVector ${
                                        isUp ? 'trailUp' : 'trailDown'
                                    }`}
                                    onAnimationIteration={() =>
                                        setIsUp((prevIsUp) => !prevIsUp)
                                    }
                                ></div>
                            </div>
                        </div>

                        <ul>
                            <li>HTML/CSS</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
                <div className="competence">
                    <div className="competenceContent">
                        <div className="competenceTop">
                            <h3>Backend</h3>
                            <img
                                className="competenceImg"
                                src="https://i.ibb.co/427cG02/server-5993206.png"
                                alt="illustration backend"
                                loading="lazy"
                            />
                        </div>
                        <div className="competenceStyle">
                            <div className="vectorContainer">
                                <div
                                    className={`competenceVector ${
                                        isUp ? 'trailUp' : 'trailDown'
                                    }`}
                                    onAnimationIteration={() =>
                                        setIsUp((prevIsUp) => !prevIsUp)
                                    }
                                ></div>
                            </div>
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
                                src="https://i.ibb.co/RgvQkzz/wrench-9846327.png"
                                alt="illustration outil"
                                loading="lazy"
                            />
                        </div>
                        <div className="competenceStyle">
                            <div className="vectorContainer">
                                <div
                                    className={`competenceVector ${
                                        isUp ? 'trailUp' : 'trailDown'
                                    }`}
                                    onAnimationIteration={() =>
                                        setIsUp((prevIsUp) => !prevIsUp)
                                    }
                                ></div>
                            </div>
                        </div>
                        <ul>
                            <li>VsCode</li>
                            <li>Git</li>
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
            <div className="servicesContent">
                <Services
                    title="Web Développement"
                    description="Développement d'applications web Frontend & Backend, sites vitrines."
                    cover="https://i.ibb.co/0Kz4zHD/responsive-1055687.png"
                    listTitle="Langages :"
                    list={['HTML/CSS', 'React', 'JavaScript', 'MongoDB']}
                    listTitle2="Développement :"
                    list2={[
                        "Création d'application avec React.js",
                        "Mise en place / utilisation d'une API",
                        'Manipuler des données en format JSON',
                        "Mise en place / utilisation d'une base de données",
                    ]}
                    p="Pour plus d'informations sur mes compétences, je vous invite à découvrir ces projets :"
                    link={['/MonVieuxGrimoire', '/Kasa']}
                />
                <Services
                    title="SEO"
                    description="Optimisation, performance, accéssibilité, améliorer votre réferencement."
                    cover="https://i.ibb.co/h9j9H7t/ux.png"
                    listTitle="Outils :"
                    list={['Pagespeed', 'Wave']}
                    listTitle2="Améliorations :"
                    list2={[
                        'Optimisation des balises meta',
                        'Minification du code',
                        'Mise en place des Richsnippet',
                        'Optimisation des images (format, dimensions)',
                    ]}
                    p="Pour plus d'informations sur mes compétences, je vous invite à découvrir ce projet :"
                    link={['/NinaCarducci']}
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
