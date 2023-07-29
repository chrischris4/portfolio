import '../styles/ContactForm.css';
import emailjs from '@emailjs/browser';
emailjs.init('uFF5qZzQCkElWuX8Q');

function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();
        const serviceId = 'service_pzjldt7';
        const templateId = 'template_ozffzkd';
        const publicKey = 'uFF5qZzQCkElWuX8Q';
        emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
            (result) => {
                console.log('E-mail sent successfully!', result.text);
            },
            (error) => {
                console.log('Failed to send e-mail!', error.text);
            }
        );
        e.target.reset();
    }

    return (
        <div className="contact">
            <h3 className="contactP">Retrouvez moi sur :</h3>
            <div className="contactLinks">
                <a
                    className="myEmailLink"
                    href={`mailto:jostchristopher44@gmail.com`}
                >
                    Jostchristopher44@gmail.com
                    <span className="material-symbols-outlined">mail</span>
                </a>
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

            <div className="contactForm">
                <h3>Ou contactez moi via ce formulaire :</h3>
                <form onSubmit={sendEmail}>
                    <div className="contactMail">
                        <label htmlFor="email">Email :</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="John.doe@exemple.com"
                            type="email"
                            required
                            title="Entrez une adresse e-mail valide (ex: john.doe@example.com)"
                        />
                    </div>
                    <div className="contactMsg">
                        <label htmlFor="message">Message :</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Votre message"
                            required
                        />
                    </div>
                    <button
                        className="contactButton"
                        type="submit"
                        value="send message"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
