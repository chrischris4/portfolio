import '../styles/Page.css';
import booki from '../assets/Booki.webp';
import { useEffect } from 'react';

function Booki() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1>Booki - Agence de Location </h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">Github</button>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={booki} alt="" />
                <div className="imgInfo">
                    Sur ce projet j'ai effectuer l'intégration du site en
                    html/css, j'ai du gérer le responsive un format desktop,
                    tablette et téléphone.
                </div>
            </div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default Booki;
