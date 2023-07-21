import '../styles/ContactFormMin.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('uFF5qZzQCkElWuX8Q');

function ContactForm() {
    const myEmail = 'jostchristopher44@gmail.com';

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
            <div className="contactP">
                <p>
                    Pour plus d'informations, n'hésitez pas à me contacter via
                    ce formulaire :
                </p>
            </div>
            <div className="contactForm">
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
            <div className="myEmail">
                <p className="myEmailP">Ou en cliquant sur ce lien :</p>
                <a className="myEmailLink" href={`mailto:${myEmail}`}>
                    {myEmail}
                </a>
            </div>
        </div>
    );
}

export default ContactForm;
