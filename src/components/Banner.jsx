import '../styles/Banner.css';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Banner() {
    useEffect(() => {
        const linkTimeout = setTimeout(() => {
            const bannerLink = document.querySelector('.bannerLink');
            bannerLink.classList.add('show-link');
        }, 2000);

        const githubLinkTimeout = setTimeout(() => {
            const githubLink = document.querySelector('.githubLink');
            githubLink.classList.add('show-link');
        }, 2000);

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
                    <h1>Développeur FullStack</h1>

                    <div className="bannerAbout">
                        Spécialisé dans la création d'applications web
                        dynamiques. Prêt à contribuer à des projets innovants.
                    </div>
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
