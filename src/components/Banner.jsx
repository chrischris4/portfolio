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

    useEffect(() => {
        const updatePositions = () => {
            const points = document.querySelectorAll('.pulsePoint');

            points.forEach((point) => {
                const randomTop = Math.random();
                const randomLeft = Math.random();

                point.style.setProperty('--random-top', randomTop);
                point.style.setProperty('--random-left', randomLeft);
            });
        };

        updatePositions();

        const interval = setInterval(updatePositions, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const updatePositions = () => {
            const pointsDelayed =
                document.querySelectorAll('.pulsePointDelayed');

            pointsDelayed.forEach((pointDelayed) => {
                const randomTop = Math.random();
                const randomLeft = Math.random();

                pointDelayed.style.setProperty('--random-top', randomTop);
                pointDelayed.style.setProperty('--random-left', randomLeft);
            });
        };

        updatePositions();

        const interval = setInterval(updatePositions, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner">
            <div className="bannerColor">
                <div className="bannerLastName">JOST</div>
            </div>
            <div className="bannerBlack">
                <div className="bannerContent">
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
                            <span className="material-symbols-rounded bannerContact">
                                mail
                            </span>
                        </ScrollLink>
                        <a
                            className="bannerLink githubLink"
                            href="https://github.com/chrischris4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="imgContact"
                                src="https://i.ibb.co/dD4Q3xW/git.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="bannerPattern">
                        <div class="pulsePoint"></div>
                        <div class="pulsePoint"></div>
                        <div class="pulsePoint"></div>
                        <div class="pulsePoint"></div>
                        <div class="pulsePoint"></div>
                        <div class="pulsePoint"></div>
                        <div class="pulsePoint"></div>
                        <div class="pulsePointDelayed"></div>
                        <div class="pulsePointDelayed"></div>
                        <div class="pulsePointDelayed"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
