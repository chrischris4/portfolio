import '../styles/ContactForm.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('uFF5qZzQCkElWuX8Q');

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('pzjldt7', 'ozffzkd', e.target, 'uFF5qZzQCkElWuX8Q')
            .then(
                (result) => {
                    console.log('E-mail sent successfully!', result.text);
                },
                (error) => {
                    console.log('Failed to send e-mail!', error.text);
                }
            );
    };

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
            </div>

            <div className="contactForm">
                <h3>Ou contactez moi via ce formulaire :</h3>
                <form onSubmit={handleSubmit}>
                    <div className="contactMail">
                        <label for="email">Email :</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="JohnDoe@gmail.com"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="contactMsg">
                        <label for="message">Message :</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Votre message"
                            value={message}
                            onChange={handleMessageChange}
                            required
                        />
                    </div>
                    <button className="contactButton" type="submit" async defer>
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
