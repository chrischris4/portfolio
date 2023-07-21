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
                const space = document.createTextNode(' '); // Ajoute un espace entre les mots
                bannerAbout.appendChild(space);
            }

            bannerAbout.appendChild(wordSpan);
        });

        const wordSpans = bannerAbout.querySelectorAll('.word');
        let delay = 0;

        wordSpans.forEach((span, index) => {
            span.style.animationDelay = `${delay}s`;
            delay += index % 2 === 0 ? 0.25 : 0.15; // Ajustez les délais pour une apparence plus fluide
        });

        const borderTimeout = setTimeout(() => {
            bannerAbout.classList.add('show-border');
        }, 3700); // Définissez le délai pour l'affichage de la bordure (1,5 seconde dans cet exemple)

        const linkTimeout = setTimeout(() => {
            const bannerLink = document.querySelector('.bannerLink');
            bannerLink.classList.add('show-link');
        }, 3700);

        bannerAbout.classList.add('fade-in');

        return () => {
            clearTimeout(borderTimeout);
            clearTimeout(linkTimeout);
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
                    <div className="bannerP"> Développeur FullStack</div>
                    <div className="bannerAbout">
                        Spécialisé dans la création d'applications web
                        dynamiques. Prêt à contribuer à des projets innovants !
                    </div>
                    <ScrollLink
                        to="contactLien"
                        className="bannerLink"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        Contact
                    </ScrollLink>
                </div>
            </div>
        </div>
    );
}

export default Banner;
