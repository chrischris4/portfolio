import { useEffect } from 'react';
import '../styles/Page.css';
import exemple from '../assets/exemple.jpg';

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
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default LeVieuxGrimoire;
