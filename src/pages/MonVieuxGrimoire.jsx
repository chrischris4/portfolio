import { useEffect } from 'react';
import '../styles/Page.css';
import mvg from '../assets/MVG.png';
import mvg2 from '../assets/MVG3.png';
import mvg3 from '../assets/MVG2.png';

function LeVieuxGrimoire() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1>Le Vieux Grimoire - Site de Notation de Livre</h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">
                    <a
                        href="https://github.com/chrischris4/Mon_vieux_grimoire_site_notation_de_livre"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </button>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={mvg} alt="Mon-vieux-grimoire" />
                <div className="imgInfo">
                    Je me suis occuper de toute la partie Backend de ce projet,
                    une application express en React, avec une base de donnés
                    MongoDB. Sur ce site nous pouvons créer un compte afin d'y
                    ajouter les livres de notre choix, avec en plus un systeme
                    de notation.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img className="pageImg" src={mvg2} alt="Mon-vieux-grimoire" />
                <div className="imgInfo">
                    J'ai créer un systeme d'authentification, afin que
                    l'utilisateur puisse s'inscrire et se connecter à son compte
                    personnel, un token est génerer avec jsonwebtoken, et un
                    middleware à été créer pour verifier l'authentification de
                    l'utilisateur.
                </div>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={mvg3} alt="Mon-vieux-grimoire" />
                <div className="imgInfo">
                    J'ai créer un model pour les livres contenant leur infos,
                    ainsi qu'un controller afin que l'on puisse ajouter,
                    modifier, supprimer ou noter ces livres. J'ai aussi ajouter
                    un middleware afin qu'à l'ajout d'une image, celle-ci soit
                    automatiquement convertie au format webp, et redimensionner.
                </div>
            </div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default LeVieuxGrimoire;
