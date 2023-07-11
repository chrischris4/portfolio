import '../styles/ContactForm.css';
import React, { useState } from 'react';
import exemple from '../assets/exemple.jpg';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        alert('Votre message a été envoyé avec succès.');
    };

    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit}>
                <div className="contactName">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
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
            <img className="formImg" src={exemple} alt="" />
        </div>
    );
}

export default ContactForm;
