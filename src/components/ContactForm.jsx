import '../styles/ContactForm.css';
import React, { useState } from 'react';
import contact from '../assets/contact.png';

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
        <div className="contactForm">
            <form onSubmit={handleSubmit}>
                <p>Pour plus d'informations, n'hésitez pas à me contacter ! </p>
                <div className="contactMail">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="contactMsg">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                </div>
                <button className="contactButton" type="submit">
                    Envoyer
                </button>
            </form>
            <img className="formImg" src={contact} alt="" />
        </div>
    );
}

export default ContactForm;
