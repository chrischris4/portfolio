import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p className="pFooter">
                Ce site a été réalisé par mes soins, vous pouvez retrouvez son
                code sur
                <a
                    className="linkFooter"
                    href="https://github.com/chrischris4/p8"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                . Merci de votre interêt.
            </p>
            <p className="pFooter">© 2023 by JOST Christopher</p>
        </div>
    );
}

export default Footer;
