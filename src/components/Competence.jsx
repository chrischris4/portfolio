import '../styles/Competence.css';
import { Meteors } from './ui/meteors';

function Competence(props) {
    return (
        <div className="competence relative">
                      <Meteors number={10} />

            <div className='competenceTitle'>
            <h3>{props.title}</h3>
                </div>
            <div className="competenceContent">
                <ul>
                {props.list &&
                        props.list.map((item, index) => (
                            <li key={index} className='z-10'>
                                <img
                                    src={`${process.env.PUBLIC_URL}${item}`} 
                                    alt={`SVG ${index}`} 
                                    className="svgIcon"
                                />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Competence;
