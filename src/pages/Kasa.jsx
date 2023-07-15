import '../styles/Kasa.css';
import exemple from '../assets/exemple.jpg';
import { Link } from 'react-router-dom';
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
                <img className="pageImg" src={exemple} alt="" />
                <div className="imgInfo">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque ab harum illum doloribus ad, distinctio, nesciunt
                    temporibus dolore fugiat eius cupiditate totam quasi.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img className="pageImg" src={exemple} alt="" />
                <div className="imgInfo">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque ab harum illum doloribus ad, distinctio, nesciunt
                    temporibus dolore fugiat eius cupiditate totam quasi.
                </div>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={exemple} alt="" />
                <div className="imgInfo">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque ab harum illum doloribus ad, distinctio, nesciunt
                    temporibus dolore fugiat eius cupiditate totam quasi.
                </div>
            </div>
            <Link className="pageLink" to={`/`}>
                Retourner sur la page d'Accueil
            </Link>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default Kasa;
