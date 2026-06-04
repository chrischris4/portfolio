import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
        '/Reptimorph',
        '/EldenLore',
        '/MyAgenda',
        '/TenCents',
        '/Flun',
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

    ///////////////////////////SCROLL EFFECTS/////////////////////////////////////

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const desktopLink = document.querySelector('.desktopAnimLinks');
            const topPage = document.querySelector('.topPage');
            const header = document.querySelector('.header');

            // Animation de .desktopAnimLinks
            if (window.scrollY > 470 && linksHome) {
                desktopLink.classList.add('showAnimLinks');
            } else {
                desktopLink.classList.remove('showAnimLinks');
            }

            // Animation de .topPage
            if (window.scrollY > 0) {
                topPage.classList.add('showTopPage');
            } else {
                topPage.classList.remove('showTopPage');
            }

            // Animation de .header
            if (window.scrollY > 0) {
                header.classList.add('showLimit');
            } else {
                header.classList.remove('showLimit');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [linksHome]);


    return (
        <div className=" header items-center fixed -top-0 right-0 w-full flex justify-between bg-[#0f1015] bg-opacity-80 backdrop-blur-md z-20 h-[80px]">
            <ScrollLink
                href="topPageLien"
                to="topPageLink"
                className="topPage"
                spy={true}
                smooth={true}
                duration={800}
            >
                <span className="material-symbols-rounded topPageIcon">
                    keyboard_arrow_up
                </span>
            </ScrollLink>
            <div className="headerContent">
                <div className='desktopLinks'>
                    <div className='desktopAnimLinks'>
                        <ScrollLink
                            href="contactLien"
                            to="contactLien"
                            className="desktopAnim"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            <span className="material-symbols-rounded headerContact">
                                mail
                            </span>
                        </ScrollLink>
                        <a
                            className="githubLinkHeader desktopAnim"
                            href="https://github.com/chrischris4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="headerGit"
                                src="https://i.ibb.co/DVbScgL/icons8-github-128.png"
                                alt="GitHub"
                            />
                        </a>
                    </div>
                    {linksHome && (
                        <>
                            <ScrollLink
                                href="aboutLien"
                                to="aboutLien"
                                className="link desktopLink"
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
                                className="link desktopLink"

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
                                className="link desktopLink"

                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                {t('competenceLink')}
                            </ScrollLink>
                            <ScrollLink
                                href="projectProLien"
                                to="projectProLien"
                                className="link desktopLink"

                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                {t('projectsLink')}
                            </ScrollLink>
                            <ScrollLink
                                href="servicesLien"
                                to="servicesLien"
                                className="link desktopLink"

                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                {t('servicesLink')}
                            </ScrollLink>
                            <ScrollLink
                                href="reseauxLien"
                                to="reseauxLien"
                                className="link desktopLink"
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                {t('reseauxLink')}
                            </ScrollLink>
                        </>
                    )}
                    {linksPage && (
                        <>
                            <RouterLink
                                to={`/`}
                                className="link desktopLink"
                                onClick={closeMenu}
                            >
                                {t('homeLink')}
                            </RouterLink>
                            <ScrollLink
                                href="othersLien"
                                to="othersLien"
                                className="link desktopLink"
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                {t('othersProjectsLink')}
                            </ScrollLink>
                            <ScrollLink
                                href="reseauxLien"
                                to="reseauxLien"
                                className="link desktopLink"
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
                                className="link desktopLink"
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={closeMenu}
                            >
                                {t('contactTitleTranslate')}
                            </ScrollLink>
                        </>
                    )}
                </div>
                <div className="translateBtn" onClick={toggleLanguage}>
                    <span className="material-symbols-rounded translateIcon">
                        translate
                    </span>{' '}
                    {t('buttonText')}
                </div>

                <button
                    className={`headerIconClose ${isMenuOpen ? 'navIsOpen ' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Fermer le menu"
                >
                    <span className="material-symbols-rounded headerIcon">
                        close
                    </span>
                </button>

                <button
                    className={`headerIconOpen ${isMenuOpen ? 'navIsOpen ' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Ouvrir le menu"
                >
                    <span className="material-symbols-rounded headerIcon">
                        menu
                    </span>
                </button>
            </div>
            <div
                className={`overlayNav ${isMenuOpen ? 'showOverlayNav' : ''}`}
                onClick={closeMenu}
            ></div>
            <nav
                className={`headerNav ${isMenuOpen ? 'showNav' : ''}`}
            >
                {linksHome && (
                    <>
                        <ScrollLink
                            href="aboutLien"
                            to="aboutLien"
                            className="link"
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
                            className="link"

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
                            className="link"

                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={closeMenu}
                        >
                            {t('competenceLink')}
                        </ScrollLink>
                        <ScrollLink
                            href="projectProLien"
                            to="projectProLien"
                            className="link"

                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={closeMenu}
                        >
                            {t('projectsProLink')}
                        </ScrollLink>
                        <ScrollLink
                            href="projectPersoLien"
                            to="projectPersoLien"
                            className="link"

                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={closeMenu}
                        >
                            {t('projetPersoLink')}
                        </ScrollLink>
                        <ScrollLink
                            href="servicesLien"
                            to="servicesLien"
                            className="link"

                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={closeMenu}
                        >
                            {t('servicesLink')}
                        </ScrollLink>
                        <ScrollLink
                            href="contactLien"
                            to="contactLien"
                            className="link"
                            spy={true}
                            smooth={true}
                            duration={800}
                            onClick={closeMenu}
                        >
                            {t('contactTitleTranslate')}
                        </ScrollLink>
                    </>
                )}
                {linksPage && (
                    <>
                        <RouterLink
                            to={`/`}
                            className="link"

                            onClick={closeMenu}
                        >
                            {t('homeLink')}
                        </RouterLink>
                        <ScrollLink
                            href="othersLien"
                            to="othersLien"
                            className="link"

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
                    className="link"
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
                    className="link"
                    spy={true}
                    smooth={true}
                    duration={800}
                    onClick={closeMenu}
                >
                    {t('contactTitleTranslate')}
                </ScrollLink>
                <RouterLink
                    className="link"
                    to={`https://github.com/chrischris4/`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                >
                    GitHub
                </RouterLink>
                <div className="translateBtnMobile" onClick={toggleLanguage}>
                    <span className="material-symbols-rounded translateIcon">
                        translate
                    </span>{' '}
                    {t('buttonText')}
                </div>
            </nav>
        </div>
    );
}

export default Header;
