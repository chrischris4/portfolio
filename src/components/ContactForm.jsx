import '../styles/ContactForm.css';
import React, { useState } from 'react';

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
        setEmail('');
        setMessage('');
        alert('Votre message a été envoyé avec succès.');
    };

    return (
        <div className="contact">
            <div className="contactP">
                <p>Pour plus d'informations, n'hésitez pas à me contacter ! </p>
            </div>
            <div className="contactForm">
                <form onSubmit={handleSubmit}>
                    <div className="contactMail">
                        <label htmlFor="email">Email :</label>
                        <input
                            placeholder="JohnDoe@gmail.com"
                            type="email"
                            value={email}
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
