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

        const inputEmail = document.getElementById('email');
        const inputMessage = document.getElementById('message');

        inputEmail.addEventListener('blur', () => {
            document.body.style.zoom = '0.8';
        });

        inputMessage.addEventListener('blur', () => {
            document.body.style.zoom = '0.8';
        });
    }

    return (
        <div className="contact">
            <div className="contactContent">
                <div className="contactContentBorder">
                    <h3>Contactez moi par Email</h3>
                    <a
                        className="myEmailLink"
                        href={`mailto:jostchristopher44@gmail.com`}
                    >
                        <div className="linkName">Email</div>
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                    <div className="contactForm">
                        <h3>Ou via ce formulaire</h3>
                    </div>
                </div>

                <form onSubmit={sendEmail}>
                    <div className="contactMail">
                        <label htmlFor="email">Email :</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="Votre.email@exemple.com"
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
