import '../styles/Reseaux.css';

function Reseaux(props) {
    return (
        <div className="reseaux">
            <h3 className="contactP">
                Vous pouvez me retrouver sur ces plateformes :
            </h3>
            <div className="contactLinks">
                <a
                    className="linkedinLink"
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Linkedin
                    <img
                        className="linkedinImg"
                        src="https://i.ibb.co/SQVK6tV/linkedin.webp"
                        alt="logo linkedin"
                    />
                </a>
                <a
                    className="skypeLink"
                    href="https://join.skype.com/invite/Cec2SWhMcalN"
                    target="_blank"
                    rel="noreferrer"
                >
                    Skype
                    <img
                        className="skypeImg"
                        src="https://i.ibb.co/XkqgcnJ/skype.webp"
                        alt="logo skype"
                    />
                </a>
                <a
                    className="githubLinkContact"
                    href="https://github.com/chrischris4"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                    <img
                        className="githubImgContact"
                        src="https://i.ibb.co/6ZxjDxV/github.webp"
                        alt="logo github"
                    />
                </a>
            </div>
        </div>
    );
}

export default Reseaux;
