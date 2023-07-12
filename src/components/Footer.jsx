import '../styles/Footer.css';
import git from '../assets/gitFooter.png';
import linkedin from '../assets/linkedinFooter.png';

function Footer() {
    return (
        <div className="footer">
            <div className="lienFooter">
                <img className="gitFooter" src={git} alt="" />
                <img className="linkedinFooter" src={linkedin} alt="" />
            </div>
            <p className="pFooter">© 2023 by JOST Christopher</p>
        </div>
    );
}

export default Footer;
