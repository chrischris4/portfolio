import '../styles/Reseaux.css';

function Reseaux(props) {
    return (
        <div className="reseaux">
            <h3 className="reseauxP">
                Vous pouvez me retrouver sur ces plateformes :
            </h3>
            <div className="reseauxLinks">
                <a
                    className="linkedinLink"
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Linkedin</p>
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
                    <p>Skype</p>
                    <img
                        className="skypeImg"
                        src="https://i.ibb.co/XkqgcnJ/skype.webp"
                        alt="logo skype"
                    />
                </a>
                <a
                    className="githubLinkReseaux"
                    href="https://github.com/chrischris4"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Github</p>
                    <img
                        className="githubImgReseaux"
                        src="https://i.ibb.co/6ZxjDxV/github.webp"
                        alt="logo github"
                    />
                </a>
            </div>
        </div>
    );
}

export default Reseaux;
