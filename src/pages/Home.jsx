import Banner from '../components/Banner';
import bannerImage from '../assets/set.jpg';
import '../styles/Home.css';
import frontendImage from '../assets/frontend.png';
import backendImage from '../assets/backend.png';
import outilImage from '../assets/outil.png';
import competence from '../assets/competence.jpg';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';
import AllProject from '../components/AllProject';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page-container">
            <Banner
                title="JOST Christopher Développeur FullStack"
                cover={bannerImage}
            />
            <div className="sectionTitle">
                <h2>Compétences</h2>
            </div>
            <div id="competence">
                <div className="frontend">
                    <img className="frontendImg" src={frontendImage} alt="" />
                    <h3>Frontend</h3>
                    <ul>
                        <li>Html/Css</li>
                        <li>React.JS</li>
                    </ul>
                </div>
                <img className="competenceImg" src={competence} alt="" />
                <div className="backend">
                    <img className="backendImg" src={backendImage} alt="" />

                    <h3>Backend</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <img className="competenceImg" src={competence} alt="" />
                <div className="outil">
                    <img className="outilImg" src={outilImage} alt="" />
                    <h3>Outils</h3>
                    <ul>
                        <li>VsCode</li>
                        <li>Github</li>
                        <li>Postman</li>
                        <li>npm</li>
                    </ul>
                </div>
            </div>
            <div id="projectLien"></div>
            <div className="sectionTitle">
                <h2>Mes projets</h2>
            </div>
            <AllProject />{' '}
            <div className="sectionTitle">
                <h2>Me contacter</h2>
            </div>
            <div id="contactForm">
                <ContactForm />
            </div>
        </div>
    );
}

export default Home;
