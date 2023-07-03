import Banner from '../components/Banner';
import bannerImage from '../assets/set.jpg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="page-container">
            <Banner title="JOST Christopher" cover={bannerImage} />
            <div className="titreSection">
                <h2>Compétences</h2>
            </div>
            <div className="titreSection">
                <h2>Mon Parcours</h2>
            </div>
            <div className="titreSection">
                <h2>A propos</h2>
            </div>
            <div className="titreSection">
                <h2>Me contacter</h2>
                Formulaire
            </div>
        </div>
    );
}

export default Home;
