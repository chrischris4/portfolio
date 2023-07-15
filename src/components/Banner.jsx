import '../styles/Banner.css';

function Banner() {
    return (
        <div className="bannerAll">
            <div className="bannerColor">
                <div className="bannerLastName">JOST</div>
            </div>
            <div className="banner">
                <div className="bannerContent">
                    <div className="bannerFirstName">CHRISTOPHER</div>
                    <div className="bannerP"> Développeur FullStack</div>
                    <div className="bannerAbout">
                        Spécialisé dans la création d'applications web
                        dynamiques. Prêt à contribuer à des projets innovants !
                    </div>
                    <a href="#contactLien" className="bannerLink">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
