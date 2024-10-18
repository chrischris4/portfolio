import '../styles/Banner.css';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Banner() {
    const { t } = useTranslation();

    useEffect(() => {
        const linkTimeout = setTimeout(() => {
            const bannerLink = document.querySelector('.bannerLink');
            bannerLink.classList.add('show-link');
        }, 1500);

        const githubLinkTimeout = setTimeout(() => {
            const githubLink = document.querySelector('.githubLink');
            githubLink.classList.add('show-link');
        }, 1500);

        return () => {
            clearTimeout(linkTimeout);
            clearTimeout(githubLinkTimeout);
        };
    }, []);

    return (
        <div className="All">
            <div className="bannerAll">
                <div className="bannerColor">
                    <div className="bannerLastName">JOST</div>
                </div>
                <div className="banner">
                    <div className="bannerFirstName">CHRISTOPHER</div>
                    <h1>{t('bannerTitleTranslate')}</h1>
                    <div className="bannerAbout">{t('bannerTranslate')}</div>
                    <div className="bannerLinks">
                        <ScrollLink
                            href="contactLien"
                            to="contactLien"
                            className="bannerLink"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Contact
                        </ScrollLink>
                        <a
                            className="bannerLink githubLink"
                            href="https://github.com/chrischris4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
