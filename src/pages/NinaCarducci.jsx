import { useEffect } from 'react';
import '../styles/Page.css';
import nina from '../assets/nina.png';
import nina2 from '../assets/nina2.png';
import nina3 from '../assets/nina3.png';

function NinaCarducci() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1>Nina Carducci - Site de Photographie</h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">Github</button>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={nina} alt="" />
                <div className="imgInfo">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque ab harum illum doloribus ad, distinctio, nesciunt
                    temporibus dolore fugiat eius cupiditate totam quasi.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img className="pageImg" src={nina2} alt="" />
                <div className="imgInfo">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque ab harum illum doloribus ad, distinctio, nesciunt
                    temporibus dolore fugiat eius cupiditate totam quasi.
                </div>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={nina3} alt="" />
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

export default NinaCarducci;
