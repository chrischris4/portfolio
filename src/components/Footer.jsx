import '../styles/Footer.css';
import git from '../assets/gitFooter.png';
import linkedin from '../assets/linkedinFooter.png';

function Footer() {
    return (
        <div className="footer">
            <div className="lienFooter">
                <a
                    href="https://github.com/chrischris4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="gitFooter" src={git} alt="" />
                </a>
                <a
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="linkedinFooter" src={linkedin} alt="" />
                </a>
            </div>
            <p className="pFooter">© 2023 by JOST Christopher</p>
        </div>
    );
}

export default Footer;
