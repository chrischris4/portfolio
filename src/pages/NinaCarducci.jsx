import { useEffect } from 'react';
import '../styles/Kasa.css';
import exemple from '../assets/exemple.jpg';
import git from '../assets/git.png';
import { Link } from 'react-router-dom';

function NinaCarducci() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div className="pageProjectTitle">
                <h1>Nina Carducci - Site de Présentaion Photographe</h1>
                <img className="gitPic" src={git} alt="" />
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
        </div>
    );
}

export default NinaCarducci;
