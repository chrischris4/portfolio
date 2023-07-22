import { useEffect } from 'react';
import '../styles/PageMin.css';
import nina from '../assets/nina-min.webp';
import nina2 from '../assets/nina2-min.webp';
import nina3 from '../assets/nina3-min.webp';

function NinaCarducci() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1>Nina Carducci - Photographe</h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">
                    <a
                        href="https://github.com/chrischris4/Nina_carducci_site_de_photographe"
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
                    src={nina}
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Sur ce projet j'ai géré toute la partie SEO, tout d'abbord
                    la gestion des titres, conversion et compression des images,
                    minification du code et optimisation du html pour le
                    réferencement.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src={nina2}
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    J'ai ajouté des richSnippet nécessaire pour le réferencement
                    sur google, ainsi que pour les résaux sociaux.
                </div>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src={nina3}
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Afin d'atteindre le meilleurs score possible, j'ai utiliser
                    des outils tel que{' '}
                    <a className="lienInfo" href="https://pagespeed.web.dev/">
                        Pagespeed
                    </a>{' '}
                    et l'extension Wave afin d'identifier au mieux les problèmes
                    d'optimisation.
                </div>
            </div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default NinaCarducci;
