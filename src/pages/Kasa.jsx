import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

function Kasa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1 className="pageH1">Kasa - Agence Immobilière </h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">
                    <a
                        href="https://github.com/chrischris4/Kasa_site_agence_immobiliere"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Code du Projet
                    </a>
                </button>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/znVrBcm/kasa-min.webp"
                    alt="kasa"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Sur ce projet j'ai mis en place une application React, je me
                    suis occupé de toute la partie Frontend. J'ai fais en sorte
                    de génerer des cards pour chaque logements, contenant
                    chacune toutes les infos provenant du fichier .json.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/vvft8b9/kasa2-min.webp"
                    alt="kasa"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Ensuite j'ai crée une page logement qui s'affiche au clique
                    sur une card, qui contient toutes les infos présentes sur
                    celle-ci.
                </div>
            </div>
            <div id="contactLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default Kasa;
