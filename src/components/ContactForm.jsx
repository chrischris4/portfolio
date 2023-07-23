import '../styles/ContactForm.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
            <p className="contactP">Contactez moi sur :</p>
            <div className="contactLinks">
                <a
                    className="myEmailLink"
                    href={`mailto:jostchristopher44@gmail.com`}
                >
                    jostchristopher44@gmail.com
                </a>
                <a
                    className="linkedinLink"
                    href="https://www.linkedin.com/in/christopher-jost-888b75195/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Linkedin
                </a>
            </div>

            <div className="contactForm">
                <p>Ou via ce formulaire :</p>
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
