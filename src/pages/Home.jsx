import Banner from '../components/Banner';
import '../styles/Home.css';
import adrarImg from '../assets/adrar.png';
import openImg from '../assets/open.png';
import frontendImage from '../assets/frontend.png';
import backendImage from '../assets/backend.png';
import outilImage from '../assets/outil.png';
import { useEffect } from 'react';
import AllProject from '../components/AllProject';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <div id="topPageLink"></div>
            <div id="backHome"></div>
            <Banner />
            <div id="parcourLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Parcour</h2>
            </div>
            <div className="parcour">
                <div className="adrar">
                    <div className="adrarP">
                        J'ai fais une formation chez Adrar en 2021 - 2022 durant
                        laquelle j'ai pu découvrir entre autre le métier de
                        Développeur Web, et les base du coding.
                    </div>
                    <a
                        className="parcourLink"
                        href="https://www.adrar-formation.com/"
                    >
                        <div className="overlayParcour">
                            Visiter leur site !
                        </div>
                        <img className="adrarImg" src={adrarImg} alt="" />{' '}
                    </a>
                </div>
                <div className="open">
                    <div className="openP">
                        J'ai fais une formation chez OpenClassroom du 12/22 au
                        08/23, cette formation m'a permis de me professionaliser
                        et apronfondir mes connaissances en SEO, Frontend et
                        Backend.
                    </div>
                    <a
                        className="parcourLink"
                        href="https://openclassrooms.com/fr/"
                    >
                        <div className="overlayParcour">
                            Visiter leur site !
                        </div>

                        <img className="openImg" src={openImg} alt="" />
                    </a>
                </div>
                <div className="cv">
                    <button className="buttonCv">Voir CV</button>
                    <button className="buttonCv">Télécharger CV</button>
                </div>
            </div>
            <div id="competenceLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Compétences</h2>
            </div>
            <div id="competence">
                <div className="frontend">
                    <img className="frontendImg" src={frontendImage} alt="" />
                    <div className="competenceRow">
                        <h3>Frontend</h3>
                        <ul>
                            <li>Html/Css</li>
                            <li>React.JS</li>
                        </ul>
                    </div>
                </div>
                <div className="backend">
                    <img className="backendImg" src={backendImage} alt="" />
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
                    <img className="outilImg" src={outilImage} alt="" />
                    <div className="competenceRow">
                        <h3>Outils</h3>
                        <ul>
                            <li>VsCode</li>
                            <li>Github</li>
                            <li>Postman</li>
                            <li>npm</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projectLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Mes projets</h2>
            </div>
            <AllProject />{' '}
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default Home;
