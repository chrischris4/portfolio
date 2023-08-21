import React, { useState, useEffect, useContext } from 'react';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeContext } from '../components/ThemeSombre';

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

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const toggleAndSetTheme = () => {
        toggleTheme();
    };
    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    useEffect(() => {
        if (isDarkTheme) {
            setTheme('dark');
        } else {
            setTheme('');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`header ${theme === 'dark' ? 'night' : ''}`}>
            <ScrollLink
                href="topPageLien"
                to="topPageLink"
                className="topPage"
                spy={true}
                smooth={true}
                duration={800}
            >
                <span className="material-symbols-rounded arrow">
                    keyboard_arrow_up
                </span>
            </ScrollLink>
            {linksPage && (
                <>
                    <RouterLink className="backHomeLink" to={`/`}>
                        <span className="material-symbols-rounded home">
                            home
                        </span>
                    </RouterLink>
                </>
            )}
            <div className="headerRight">
                <div className="translateBtn">
                    <span className="material-symbols-rounded translateIcon">
                        translate
                    </span>{' '}
                    Translate
                </div>

                <div
                    className={`menuBurger ${isMenuOpen ? 'open ' : ''}${
                        theme === 'dark' ? 'night' : ''
                    }`}
                    onClick={toggleMenu}
                >
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="overlayBurger" onClick={closeMenu}></div>
            )}
            {isMenuOpen && (
                <nav
                    className={`burgerMenu ${isMenuOpen ? 'open' : ''} ${
                        theme === 'dark' ? 'night' : ''
                    }`}
                >
                    {linksHome && (
                        <>
                            <ScrollLink
                                href="aboutLien"
                                to="aboutLien"
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                À propos
                            </ScrollLink>
                            <ScrollLink
                                href="parcoursLien"
                                to="parcoursLien"
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                Parcours
                            </ScrollLink>
                            <ScrollLink
                                href="competenceLien"
                                to="competenceLien"
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                Compétences
                            </ScrollLink>
                            <ScrollLink
                                href="projectLien"
                                to="projectLien"
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                Projets
                            </ScrollLink>
                            <ScrollLink
                                href="servicesLien"
                                to="servicesLien"
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                Services
                            </ScrollLink>
                        </>
                    )}
                    {linksPage && (
                        <>
                            <RouterLink
                                to={`/`}
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                onClick={closeMenu}
                            >
                                Accueil
                            </RouterLink>
                            <ScrollLink
                                href="othersLien"
                                to="othersLien"
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                Autres Projets
                            </ScrollLink>
                        </>
                    )}
                    <ScrollLink
                        href="reseauxLien"
                        to="reseauxLien"
                        className={`link ${theme === 'dark' ? 'night' : ''}`}
                        spy={true}
                        smooth={true}
                        duration={800}
                        onClick={closeMenu}
                    >
                        Réseaux
                    </ScrollLink>
                    <ScrollLink
                        href="contactLien"
                        to="contactLien"
                        className={`link ${theme === 'dark' ? 'night' : ''}`}
                        spy={true}
                        smooth={true}
                        duration={800}
                        onClick={closeMenu}
                    >
                        Contact
                    </ScrollLink>
                    <RouterLink
                        className={`link ${theme === 'dark' ? 'night' : ''}`}
                        to={`https://github.com/chrischris4/`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                    >
                        GitHub
                    </RouterLink>
                    <div
                        className={`nightShift ${
                            theme === 'dark' ? 'night' : ''
                        }`}
                    >
                        <span className="material-symbols-rounded">
                            light_mode
                        </span>
                        <button
                            className="nightShiftBtn"
                            onClick={toggleAndSetTheme}
                        >
                            <div
                                className={`nightShiftVector ${
                                    theme === 'dark' ? 'on' : ''
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
