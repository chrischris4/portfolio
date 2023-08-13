import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
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

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }, [isMenuOpen]);

    window.addEventListener('scroll', function () {
        var topPage = document.querySelector('.topPage');

        if (window.scrollY > 0) {
            topPage.classList.add('show');
        } else {
            topPage.classList.remove('show');
        }
    });

    window.addEventListener('scroll', function () {
        var topPage = document.querySelector('.topPage');

        if (window.scrollY <= 0) {
            topPage.classList.add('hide');
        } else {
            topPage.classList.remove('hide');
        }
    });

    window.addEventListener('scroll', function () {
        var header = document.querySelector('.header');

        if (window.scrollY > 0) {
            header.classList.add('show');
        } else {
            header.classList.remove('show');
        }
    });

    const [nightMode, setNightMode] = useState(false);
    function NightTheme() {
        const vector = document.querySelector('.nightShiftVector');
        const header = document.querySelector('.header');
        const menu = document.querySelector('.burgerMenu');
        const links = document.querySelectorAll('.link');
        const lines = document.querySelectorAll('.line');

        vector.classList.toggle('on');
        header.classList.toggle('night');
        menu.classList.toggle('night');

        links.forEach((link) => {
            link.classList.toggle('night');
        });
        lines.forEach((line) => {
            line.classList.toggle('night');
        });

        document.body.classList.toggle('night');
        setNightMode((currentNightMode) => !currentNightMode);
        sessionStorage.setItem('nightMode', !nightMode);
    }

    return (
        <div className={`header ${nightMode ? 'night' : ''}`}>
            <ScrollLink
                href="topPageLien"
                to="topPageLink"
                className="topPage"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <span className="material-symbols-rounded arrow">
                    keyboard_arrow_up
                </span>
            </ScrollLink>
            {linksPage && (
                <>
                    <RouterLink className="backHomeLink.show" to={`/`}>
                        <span className="material-symbols-rounded home">
                            home
                        </span>
                    </RouterLink>
                </>
            )}

            <div
                className={`menuBurger ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            {isMenuOpen && (
                <div className="overlayBurger" onClick={closeMenu}></div>
            )}
            {isMenuOpen && (
                <nav
                    className={`burgerMenu ${isMenuOpen ? 'open' : ''} ${
                        nightMode ? 'night' : ''
                    }`}
                >
                    {linksHome && (
                        <>
                            <ScrollLink
                                href="aboutLien"
                                to="aboutLien"
                                className={`link ${nightMode ? 'night' : ''}`}
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={closeMenu}
                            >
                                À propos
                            </ScrollLink>
                            <ScrollLink
                                href="parcoursLien"
                                to="parcoursLien"
                                className={`link ${nightMode ? 'night' : ''}`}
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
                                className={`link ${nightMode ? 'night' : ''}`}
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
                                className={`link ${nightMode ? 'night' : ''}`}
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={closeMenu}
                            >
                                Projets
                            </ScrollLink>
                        </>
                    )}
                    {linksPage && (
                        <>
                            <RouterLink
                                to={`/`}
                                className={`link ${nightMode ? 'night' : ''}`}
                                onClick={closeMenu}
                            >
                                Accueil
                            </RouterLink>
                            <ScrollLink
                                href="othersLien"
                                to="othersLien"
                                className={`link ${nightMode ? 'night' : ''}`}
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={closeMenu}
                            >
                                Autres Projets
                            </ScrollLink>
                        </>
                    )}
                    <ScrollLink
                        href="reseauxLien"
                        to="reseauxLien"
                        className={`link ${nightMode ? 'night' : ''}`}
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={closeMenu}
                    >
                        Réseaux
                    </ScrollLink>
                    <ScrollLink
                        href="contactLien"
                        to="contactLien"
                        className={`link ${nightMode ? 'night' : ''}`}
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={closeMenu}
                    >
                        Contact
                    </ScrollLink>
                    <RouterLink
                        className={`link ${nightMode ? 'night' : ''}`}
                        to={`https://github.com/chrischris4/`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                    >
                        GitHub
                    </RouterLink>
                    <div className="nightShift">
                        <span className="material-symbols-rounded">
                            light_mode
                        </span>
                        <button className="nightShiftBtn" onClick={NightTheme}>
                            <div
                                className={` nightShiftVector ${
                                    nightMode ? 'on' : ''
                                }`}
                            ></div>
                        </button>
                        <span className="material-symbols-rounded darkMode">
                            dark_mode
                        </span>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default Header;
