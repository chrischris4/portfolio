import '../styles/Header.css';
import linkedin from '../assets/linkedin.webp';
import git from '../assets/git.webp';
import vectorUp from '../assets/vectorup.webp';
import backHome from '../assets/backHome.webp';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { useState } from 'react';

function Header() {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: true,
        });
    };
    const location = useLocation();

    const allLinksPages = [
        '/Kasa',
        '/MonVieuxGrimoire',
        '/NinaCarducci',
        '/SophieBluel',
        '/Booki',
        '/*',
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

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <div className="header">
            <div className="profil">
                <a
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="linkedin" src={linkedin} alt="linkedin" />
                </a>
                <a
                    href="https://github.com/chrischris4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="github" src={git} alt="github" />
                </a>
            </div>
            {linksPage && (
                <>
                    <RouterLink className="backHomeLink" to={`/`}>
                        <img
                            className="backHomeImg"
                            src={backHome}
                            alt="accueil"
                        />
                    </RouterLink>
                </>
            )}
            <nav>
                {linksHome && (
                    <>
                        <ScrollLink
                            to="parcoursLien"
                            className="link"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Parcours
                        </ScrollLink>
                        <ScrollLink
                            to="competenceLien"
                            className="link"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Compétences
                        </ScrollLink>
                        <ScrollLink
                            to="projectLien"
                            className="link"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Mes projets
                        </ScrollLink>
                    </>
                )}
                <a
                    href="#topPageLink"
                    className="topPage"
                    onClick={scrollToTop}
                >
                    <img
                        className="vectorUp"
                        src={vectorUp}
                        alt="haut-de-page"
                    />
                </a>
            </nav>
            {/* <div className="menuBurger" onClick={toggleMenu}>
                <div className={isMenuOpen ? 'line line1' : 'line'}></div>
                <div className={isMenuOpen ? 'line line2' : 'line'}></div>
                <div className={isMenuOpen ? 'line line3' : 'line'}></div>
            </div> */}
        </div>
    );
}

export default Header;
