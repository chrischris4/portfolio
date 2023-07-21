import { useEffect } from 'react';
import '../styles/Page.css';
import sophie from '../assets/sophiebluel.webp';
import sophie2 from '../assets/sophiebluel3.webp';
import sophie3 from '../assets/sophiebluel2.webp';

function SophieBluel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1>Sophie Bluel - Designer</h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">
                    <a
                        href="https://github.com/chrischris4/Sophie_bluel_site_de_designer"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </button>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={sophie} alt="Sophie-Bluel" />
                <div className="imgInfo">
                    Sur ce site j'ai gérer la partie Frontend du site, j'ai
                    géneré la galerie de la page d'accueil à partir d'un fichier
                    .json en effectuant des requêtes via une API.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img className="pageImg" src={sophie2} alt="Sophie-Bluel" />
                <div className="imgInfo">
                    Le site contient une page d'authentification, pour qu'une
                    fois identifier, le propriétaire du site puisse accéder à un
                    mode édition.
                </div>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={sophie3} alt="Sophie-Bluel" />
                <div className="imgInfo">
                    Une fois le mode édition activé, le propriétaire du site
                    pourra, grâce à une modale, ajouter, modifier ou supprimer
                    des images présentes dans la galerie.
                </div>
            </div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default SophieBluel;
