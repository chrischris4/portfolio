import '../styles/Header.css';
import profil from '../assets/moi.png';

function Header() {
    return (
        <div className="header">
            <div>
                <img id="profilPic" src={profil} alt="" />
            </div>
            <nav>
                <a href="#about" className="link">
                    À propos
                </a>
                <a href="#competence" className="link">
                    Compétence
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
