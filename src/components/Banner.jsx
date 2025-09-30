import '../styles/Banner.css';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/star-background";
import { FlipWords } from '../components/ui/flip-words';

function Banner() {
    const { t } = useTranslation();
    const words = ["Next | React", "Nest | Node", "JavaScript | TypeScript"];
    const [animateBackground, setAnimateBackground] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateBackground(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="banner">
            <div className={`bannerColor ${animateBackground ? 'animate-border' : ''}`}>
     <ShootingStars />
                <StarsBackground />
                <div className="bannerLastName">JOST</div>
            </div>
            <div className={`bannerBlack relative ${animateBackground ? 'animate-borderBlack' : ''}`}> <ShootingStars />
                <StarsBackground />

                <div className="bannerContent">
                    <div className="bannerFirstName">CHRISTOPHER</div>
                    <h1>{t('bannerTitleTranslate')}</h1>
                    <div className="bannerAbout">
                        <FlipWords words={words} />
                    </div>
                    <div className="bannerLinks">
                        <ScrollLink
                            to="contactLien"
                            className="bannerLink z-10"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            <span className="material-symbols-rounded bannerContact">
                                mail
                            </span>
                        </ScrollLink>
                        <a
                            className="bannerLink githubLink z-10"
                            href="https://github.com/chrischris4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="imgContact"
                                src="https://i.ibb.co/DVbScgL/icons8-github-128.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
