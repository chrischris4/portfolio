import '../styles/Header.css';
import profil from '../assets/moi.png';

function Header() {
    return (
        <div className="header">
            <div className="profil">
                <img id="profilPic" src={profil} alt="" />
                <p>JOST Christopher</p>
            </div>
            <nav>
                <a href="#accueil" className="link">
                    Accueil
                </a>
                <a href="#competence" className="link">
                    Compétences
                </a>
                <a href="#project" className="link">
                    Mes projets
                </a>
                <a href="#contactForm" className="link">
                    Contact
                </a>
            </nav>
        </div>
    );
}

export default Header;
