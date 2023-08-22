import '../styles/ContactForm.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
emailjs.init('uFF5qZzQCkElWuX8Q');

function ContactForm() {
    const { t } = useTranslation();

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
                    <h3>{t('contacth3Translate')}</h3>
                    <a
                        className="myEmailLink"
                        href={`mailto:jostchristopher44@gmail.com`}
                    >
                        <div className="linkName">Email</div>
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                    <div className="contactForm">
                        <h3>{t('contacth3Translate2')}</h3>
                    </div>
                </div>

                <form onSubmit={sendEmail}>
                    <div className="contactMail">
                        <label htmlFor="email">{t('labelMailTranslate')}</label>
                        <input
                            id="email"
                            name="email"
                            placeholder={t('placeMailTranslate')}
                            type="email"
                            required
                            title="Entrez une adresse e-mail valide (ex: john.doe@example.com)"
                        />
                    </div>
                    <div className="contactMsg">
                        <label htmlFor="message">
                            {t('labelMessageTranslate')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            required
                        />
                    </div>
                    <button
                        className="contactButton"
                        type="submit"
                        value="send message"
                    >
                        {t('sendTranslate')}
                    </button>
                    {isMessageSent && (
                        <div className="alertMessage">
                            {t('alertTranslate')}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
