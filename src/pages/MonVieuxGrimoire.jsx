import { useEffect } from 'react';
import '../styles/Page.css';

function LeVieuxGrimoire() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1 className="pageH1">
                    Mon Vieux Grimoire - Notation de Livre
                </h1>
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
                <img
                    className="pageImg"
                    src="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Je me suis occuper de toute la partie Backend de ce projet,
                    une application express en React, avec une base de donnés
                    MongoDB. Sur ce site nous pouvons créer un compte afin d'y
                    ajouter les livres de notre choix, avec en plus un systeme
                    de notation.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/B3M0qkX/mvg3-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <div className="imgInfo">
                    J'ai créer un systeme d'authentification, afin que
                    l'utilisateur puisse s'inscrire et se connecter à son compte
                    personnel, un token est génerer avec jsonwebtoken, et un
                    middleware à été créer pour verifier l'authentification de
                    l'utilisateur.
                </div>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/FhGNntW/mvg2-min.webp"
                    alt="Mon-vieux-grimoire"
                    loading="lazy"
                />
                <div className="imgInfo">
                    J'ai créer un model pour les livres contenant leur infos,
                    ainsi qu'un controller afin que l'on puisse ajouter,
                    modifier, supprimer ou noter ces livres. J'ai aussi ajouter
                    un middleware afin qu'à l'ajout d'une image, celle-ci soit
                    automatiquement convertie au format webp, et redimensionner.
                </div>
            </div>
            <div id="contactLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default LeVieuxGrimoire;
