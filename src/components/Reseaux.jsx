import '../styles/Reseaux.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Reseaux() {
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animate"
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const elementsToAnimate = document.querySelectorAll(
            ' .linkedinLink, .githubLinkReseaux'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    },);
    return (
        <div className="reseaux relative overflow-hidden">
            <h3 className="reseauxP">{t('reseauxPTranslate')}</h3>
            <div className="reseauxLinks">
                <a
                    className="linkedinLink"
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Linkedin</p>
                    <img
                        className="linkedinImg"
                        src="https://i.ibb.co/3fdtLFX/linkedin-3536505.png"
                        alt="logo linkedin"
                    />
                </a>
                <a
                    className="githubLinkReseaux"
                    href="https://github.com/chrischris4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Github</p>
                    <img
                        className="githubImgReseaux"
                        src="https://i.ibb.co/DVbScgL/icons8-github-128.png"
                        alt="logo github"
                    />
                </a>
            </div>
        </div>
    );
}

export default Reseaux;
