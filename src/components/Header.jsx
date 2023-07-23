import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import vectorUp from '../assets/vectorup-min.webp';
import backHome from '../assets/backHome-min.webp';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenuOpen, setMenuOpen] = useState(false);
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

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: true,
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.classList.add('header-mounted');
        return () => {
            document.body.classList.remove('header-mounted');
        };
    }, []);

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
            <a href="#topPageLink" className="topPage" onClick={scrollToTop}>
                <img className="vectorUp" src={vectorUp} alt="haut-de-page" />
            </a>

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

            {windowWidth >= 635 && (
                <nav>
                    {linksHome && (
                        <>
                            <ScrollLink
                                href="parcoursLien"
                                to="parcoursLien"
                                className="link"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                Parcours
                            </ScrollLink>
                            <ScrollLink
                                href="competenceLien"
                                to="competenceLien"
                                className="link"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                Compétences
                            </ScrollLink>
                            <ScrollLink
                                href="projectLien"
                                to="projectLien"
                                className="link"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                Projets
                            </ScrollLink>
                        </>
                    )}
                </nav>
            )}

            {windowWidth <= 635 && (
                <>
                    <div
                        className={`menuBurger ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                    {isMenuOpen && (
                        <div
                            className="overlayBurger"
                            onClick={closeMenu}
                        ></div>
                    )}
                    {isMenuOpen && (
                        <nav className="burgerMenu">
                            {linksHome && (
                                <>
                                    <ScrollLink
                                        href="contactLien"
                                        to="contactLien"
                                        className="link"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onClick={closeMenu}
                                    >
                                        Contact
                                    </ScrollLink>
                                    <ScrollLink
                                        href="parcoursLien"
                                        to="parcoursLien"
                                        className="link"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onClick={closeMenu}
                                    >
                                        Parcours
                                    </ScrollLink>
                                    <ScrollLink
                                        href="competenceLien"
                                        to="competenceLien"
                                        className="link"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onClick={closeMenu}
                                    >
                                        Compétences
                                    </ScrollLink>
                                    <ScrollLink
                                        href="projectLien"
                                        to="projectLien"
                                        className="link"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onClick={closeMenu}
                                    >
                                        Projets
                                    </ScrollLink>
                                </>
                            )}
                        </nav>
                    )}
                </>
            )}
        </div>
    );
}

export default Header;
