import '../styles/Competence.css';

function Competence(props) {
    return (
        <div className="competence">
            <h3>{props.title}</h3>
            <div className="competenceContent">
                <img
                    className="competenceImg"
                    src={props.cover}
                    alt="illustration frontend"
                    loading="lazy"
                />
                <div className="vectorContainer">
                    <div className="competenceVector"></div>
                </div>
                <ul>
                    {props.list &&
                        props.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Competence;
