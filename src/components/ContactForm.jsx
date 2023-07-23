import '../styles/ContactForm.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import skype from '../assets/skype.webp';
import linkedin from '../assets/linkedin.webp';
emailjs.init('uFF5qZzQCkElWuX8Q');

function ContactForm() {
    const [name, setEmail] = useState('');
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
            <p className="contactP">Retrouvez moi sur :</p>
            <div className="contactLinks">
                <a
                    className="myEmailLink"
                    href={`mailto:jostchristopher44@gmail.com`}
                >
                    Jostchristopher44@gmail.com
                    <span class="material-symbols-outlined">mail</span>
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
                        src={linkedin}
                        alt="linkedin"
                    />
                </a>
                <a
                    className="skypeLink"
                    href="https://join.skype.com/invite/Cec2SWhMcalN"
                    target="_blank"
                    rel="noreferrer"
                >
                    Skype
                    <img className="skypeImg" src={skype} alt="linkedin" />
                </a>
            </div>

            <div className="contactForm">
                <p>Ou contactez moi via ce formulaire :</p>
                <form onSubmit={handleSubmit}>
                    <div className="contactMail">
                        <label htmlFor="name">Email :</label>
                        <input
                            placeholder="JohnDoe@gmail.com"
                            type="name"
                            value={name}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="contactMsg">
                        <label htmlFor="message">Message :</label>
                        <textarea
                            placeholder="Votre message"
                            value={message}
                            onChange={handleMessageChange}
                            required
                        />
                    </div>
                    <button className="contactButton" type="submit">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
