import '../styles/Header.css';
import linkedin from '../assets/linkedin.png';
import git from '../assets/git.png';
import vectorUp from '../assets/vectorUp.jpg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import backHome from '../assets/backHome.png';

function Header() {
    const location = useLocation();

    const linksHome = location.pathname === '/';
    const allLinksPages = [
        '/Kasa',
        '/LeVieuxGrimoire',
        '/NinaCarducci',
        '/SophieBluel',
    ];
    const linksPage = allLinksPages.includes(location.pathname);

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
                <a href="https://www.linkedin.com/in/christopher-jost-888b75195/">
                    <img className="linkedin" src={linkedin} alt="" />
                </a>{' '}
                <img className="github" src={git} alt="" />
                {linksPage && (
                    <>
                        <Link className="backHomeLink" to={`/`}>
                            <img
                                className="backHomeImg"
                                src={backHome}
                                alt=""
                            />
                        </Link>
                    </>
                )}
            </div>
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
                <a href="#topPageLink" className="topPage">
                    <img className="vectorUp" src={vectorUp} alt="" />
                </a>
            </nav>
        </div>
    );
}

export default Header;
