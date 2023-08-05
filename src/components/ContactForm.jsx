import '../styles/ContactForm.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
emailjs.init('uFF5qZzQCkElWuX8Q');

function ContactForm() {
    const [isMessageSent, setMessageSent] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log('Message envoyé !', result.text);
                    setMessageSent(true);
                    setTimeout(() => setMessageSent(false), 3000);
                },
                (error) => {
                    console.log('Failed to send e-mail!', error.text);
                }
            );
        e.target.reset();
    }

    return (
        <div className="contact">
            <div className="contactForm">
                <h3>Contactez moi via ce formulaire :</h3>
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
                    {isMessageSent && (
                        <div className="alertMessage">Message envoyé !</div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
