import '../styles/Header.css';
import linkedin from '../assets/linkedin.png';
import git from '../assets/git.png';
import vectorUp from '../assets/vectorUp.jpg';
import { Link } from 'react-router-dom';
import backHome from '../assets/backHome.png';
import { useLocation } from 'react-router-dom';

function Header() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const location = useLocation();

    const allLinksPages = [
        '/Kasa',
        '/MonVieuxGrimoire',
        '/NinaCarducci',
        '/SophieBluel',
        '/Booki',
    ];
    const linksPage = allLinksPages.includes(location.pathname);

    const linksHome = location.pathname === '/';

    window.addEventListener('scroll', function () {
        var topPage = document.querySelector('.topPage');

        if (window.scrollY > 0) {
            topPage.classList.add('show');
        } else {
            topPage.classList.remove('show');
        }
    });

    return (
        <div className="header">
            <div className="profil">
                <a
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="linkedin" src={linkedin} alt="" />
                </a>
                <a
                    href="https://github.com/chrischris4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="github" src={git} alt="" />
                </a>
            </div>
            {linksPage && (
                <>
                    <Link className="backHomeLink" to={`/`}>
                        <img className="backHomeImg" src={backHome} alt="" />
                    </Link>
                </>
            )}
            <nav>
                {linksHome && (
                    <>
                        <a href="#competenceLien" className="link">
                            Compétences
                        </a>
                        <a href="#projectLien" className="link">
                            Mes projets
                        </a>
                    </>
                )}
                <a
                    href="#topPageLink"
                    className="topPage"
                    onClick={scrollToTop}
                >
                    <img className="vectorUp" src={vectorUp} alt="" />
                </a>
            </nav>
        </div>
    );
}

export default Header;
