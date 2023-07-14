import '../styles/Header.css';
import profil from '../assets/moi.png';
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.png';
// import { useLocation } from 'react-router-dom';

function Header() {
    // const location = useLocation();
    // const getHeaderBackground = () => {
    //     if (location.pathname === '/') {
    //         return 'header';
    //     } else if (
    //         location.pathname.startsWith('/Kasa') ||
    //         location.pathname.startsWith('/LeVieuxGrimoire') ||
    //         location.pathname.startsWith('/NinaCarducci') ||
    //         location.pathname.startsWith('/SophieBluel')
    //     ) {
    //         return 'headerProject';
    //     }
    // };

    return (
        <div className={'header'}>
            <div className="profil">
                <img id="profilPic" src={profil} alt="" />
                <p>JOST Christopher</p>
            </div>
            <nav>
                <a href="https://www.linkedin.com/in/christopher-jost-888b75195/">
                    <img className="linkedin" src={linkedin} alt="" />
                </a>
                <Link className="link" to={`/`}>
                    Accueil
                </Link>
                <a href="#competenceLien" className="link">
                    Compétences
                </a>
                <a href="#projectLien" className="link">
                    Mes projets
                </a>
                <a href="#contactLien" className="link">
                    Contact
                </a>
            </nav>
        </div>
    );
}

export default Header;
