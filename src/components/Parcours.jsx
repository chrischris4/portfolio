import '../styles/Parcours.css';

function Parcours(props) {
    return (
        <div className="parcoursContent">
            <div className="parcoursP">
                <h3>{props.title}</h3>
                <h4>{props.date}</h4>
                <p>{props.p}</p>
                <p>{props.p2}</p>
            </div>
            <a
                className="parcoursLink"
                href={props.link}
                target="_blank"
                rel="noreferrer"
            >
                <div className="overlayParcours">
                    <h4>{props.overlayTitle}</h4>
                    <p>{props.overlayP}</p>
                </div>
                <img
                    className="parcoursImg"
                    src={props.cover}
                    alt={props.altCover}
                    loading="lazy"
                />
            </a>
        </div>
    );
}

export default Parcours;
