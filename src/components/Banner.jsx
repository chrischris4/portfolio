import '../styles/Banner.css';

function Banner() {
    return (
        <div className="bannerAll">
            <div className="banner">
                <div className="bannerP">JOST</div>
            </div>
            <div className="bannerBackground">
                <div className="bannerP2">CHRISTOPHER</div>
                <div className="bannerP3"> Développeur FullStack</div>
                <div className="bannerAbout">
                    Développeur spécialisé dans la création d'applications web
                    dynamiques. Prêt à relever de nouveaux défis et à contribuer
                    à des projets innovants !
                </div>
            </div>
            <div id="competenceLien"></div>
        </div>
    );
}

export default Banner;
