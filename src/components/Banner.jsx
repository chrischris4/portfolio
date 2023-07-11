import '../styles/Banner.css';

function Banner(props) {
    return (
        <div className="banner">
            <img className="banner-image" src={props.cover} alt={props.title} />
            <div className="banner-title">{props.title}</div>
            <div className="about">
                <div className="box1"></div>
                <div className="box2"></div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia minima accusamus repudiandae, maxime vero voluptate?
                Vero sit ducimus ea eum provident ex fugit pariatur aspernatur
                similique ab, laudantium quas rem!
            </div>
        </div>
    );
}

export default Banner;
