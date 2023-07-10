import Banner from '../components/Banner';
import bannerImage from '../assets/set.jpg';
import '../styles/Home.css';
import frontendImage from '../assets/frontend.png';
import backendImage from '../assets/backend.png';
import outilImage from '../assets/outil.png';
import exempleImage from '../assets/exemple.jpg';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="page-container">
            <Banner title="JOST Christopher" cover={bannerImage} />
            <div className="sectionTitle">
                <h2>A propos de moi</h2>
            </div>
            <div id="about">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus expedita cum nisi alias voluptas, nam provident
                    quidem voluptate delectus officia nesciunt earum mollitia
                    natus assumenda eos repellat distinctio nihil reprehenderit?
                </p>
            </div>
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
                <div className="backend">
                    <img className="backendImg" src={backendImage} alt="" />

                    <h3>Backend</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                    </ul>
                </div>
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
            <div className="sectionTitle">
                <h2>Mes projets</h2>
            </div>
            <div id="project">
                <div className="filter">
                    <button className="tout">Tout</button>
                    <button className="frontend">Frontend</button>
                    <button className="backend">Backend</button>
                    <button className="seo">SEO</button>
                </div>
                <div className="allProject">
                    <Link className="projectLink" to={`/Kasa`}>
                        <img
                            className="exempleImg tout backend"
                            src={exempleImage}
                            alt=""
                        />
                    </Link>
                    <Link className="projectLink" to={`/LeVieuxGrimoire`}>
                        <img
                            className="exempleImg tout seo"
                            src={exempleImage}
                            alt=""
                        />
                    </Link>

                    <Link className="projectLink" to={`/SophieBluel`}>
                        <img
                            className="exempleImg tout frontend"
                            src={exempleImage}
                            alt=""
                        />
                    </Link>

                    <Link className="projectLink" to={`/Kasa`}>
                        <img
                            className="exempleImg tout frontend"
                            src={exempleImage}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
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
