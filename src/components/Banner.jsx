import '../styles/Banner.css';

function Banner(props) {
    return (
        <div className="banner">
            <img className="bannerImage" src={props.cover} alt={props.title} />
            <div className="bannerTitle">{props.title}</div>
            <div className="bannerAbout">
                Développeur spécialisé dans la création d'applications web
                dynamiques. Prêt à relever de nouveaux défis et à contribuer à
                des projets innovants !
            </div>
            <div id="competenceLien"></div>
        </div>
    );
}

export default Banner;
