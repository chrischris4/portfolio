import { Link } from 'react-router-dom';
import '../styles/Header.css';
import profil from '../assets/lalala.jpg';

function Header() {
    return (
        <div className="header">
            <nav>
                <div>
                    <img id="profilPic" src={profil} alt="" />
                </div>
                <Link to="#" className="link">
                    À propos
                </Link>
                <Link to="#" className="link">
                    Compétence
                </Link>
                <Link to="#" className="link">
                    Portfolio
                </Link>
                <Link to="#" className="link">
                    Contact
                </Link>
            </nav>
        </div>
    );
}

export default Header;
