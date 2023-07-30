import '../styles/Banner.css';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Banner() {
    useEffect(() => {
        const bannerAbout = document.querySelector('.bannerAbout');
        const words = bannerAbout.textContent.trim().split(' ');
        bannerAbout.innerHTML = '';

        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');

            const letters = word.split('');

            letters.forEach((letter) => {
                const letterSpan = document.createElement('span');
                letterSpan.textContent = letter;
                letterSpan.classList.add('letter');
                wordSpan.appendChild(letterSpan);
            });

            if (index > 0) {
                const space = document.createTextNode(' ');
                bannerAbout.appendChild(space);
            }

            bannerAbout.appendChild(wordSpan);
        });

        const wordSpans = bannerAbout.querySelectorAll('.word');
        let delay = 0;

        wordSpans.forEach((span, index) => {
            span.style.animationDelay = `${delay}s`;
            delay += index % 2 === 0 ? 0.25 : 0.15;
        });

        const borderTimeout = setTimeout(() => {
            bannerAbout.classList.add('show-border');
        }, 3700);

        const linkTimeout = setTimeout(() => {
            const bannerLink = document.querySelector('.bannerLink');
            bannerLink.classList.add('show-link');
        }, 3700);

        const githubLinkTimeout = setTimeout(() => {
            const githubLink = document.querySelector('.githubLink');
            githubLink.classList.add('show-link');
        }, 3700);

        bannerAbout.classList.add('fade-in');

        return () => {
            clearTimeout(borderTimeout);
            clearTimeout(linkTimeout);
            clearTimeout(githubLinkTimeout);
        };
    }, []);

    return (
        <div className="bannerAll">
            <div className="bannerColor">
                <div className="bannerLastName">JOST</div>
            </div>
            <div className="banner">
                <div className="bannerContent">
                    <div className="bannerFirstName">CHRISTOPHER</div>
                    <div className="bannerP">
                        <h1>Développeur FullStack</h1>
                    </div>
                    <div className="bannerAbout">
                        Spécialisé dans la création d'applications web
                        dynamiques. Prêt à contribuer à des projets innovants !
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
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
