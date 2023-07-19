import '../styles/Page.css';
import kasa from '../assets/kasa.png';
import kasa2 from '../assets/kasa2.png';
import { useEffect } from 'react';

function Kasa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1>Kasa - Site Agence de Location </h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">Github</button>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={kasa} alt="" />
                <div className="imgInfo">
                    Sur ce projet j'ai du mettre en place une application React,
                    je me suis occuper de toute la partie Frontend. J'ai fais en
                    sorte de génerer des cards pour chaque logement, contenant
                    chacune toute les infos provenant du fichier .json.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img className="pageImg" src={kasa2} alt="" />
                <div className="imgInfo">
                    Ensuite j'ai crée une page logement qui s'affiche au clique
                    sur une card, qui contient toute les infos présente sur
                    celle-ci.
                </div>
            </div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default Kasa;
