import '../styles/Banner.css';

function Banner(props) {
    return (
        <div className="banner">
            <img className="banner-image" src={props.cover} alt={props.title} />
            <div className="banner-title">{props.title}</div>
            <div className="about">
                Je suis un développeur spécialisé dans la création
                d'applications web dynamiques avec JavaScript, React et Node.js.
                Prêt à relever de nouveaux défis et à contribuer à des projets
                innovants !
            </div>
        </div>
    );
}

export default Banner;
