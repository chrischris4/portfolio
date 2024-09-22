import React, { useState, useEffect, useContext } from 'react';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function Header() {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };
    const [isMenuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const allLinksPages = [
        '/EldenLore',
        '/MyAgenda',
        '/TenCents',
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

    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 635);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                <div
                    className={`translateBtn ${isMobileScreen ? 'hide' : ''}`}
                    onClick={toggleLanguage}
                >
                    <span className="material-symbols-rounded translateIcon">
                        translate
                    </span>{' '}
                    {t('buttonText')}
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
                                {t('aboutLink')}
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
                                {t('parcoursLink')}
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
                                {t('competenceLink')}
                            </ScrollLink>
                            <ScrollLink
                                href="projectPersoLien"
                                to="projectPersoLien"
                                className={`link ${
                                    theme === 'dark' ? 'night' : ''
                                }`}
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                {t('projetPersoLink')}
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
                                {t('projetLink')}
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
                                {t('homeLink')}
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
                                {t('othersProjectsLink')}
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
                        {t('reseauxLink')}
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
                        className={`translateBtnMobile ${
                            isMobileScreen ? 'show' : ''
                        }`}
                        onClick={toggleLanguage}
                    >
                        <span className="material-symbols-rounded translateIcon">
                            translate
                        </span>{' '}
                        {t('buttonText')}
                    </div>
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
