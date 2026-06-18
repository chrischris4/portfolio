import '../styles/ContactForm.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/star-background";

const EMAIL = 'jostchristopher44@gmail.com';

function ContactForm() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(EMAIL).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }

    return (
        <div className="contact relative">
            <ShootingStars />
            <StarsBackground />
            <div className="contactContent z-10">
                <div className="contactContentBorder">
                    <h3>{t('contacth3Translate')}</h3>
                    <button className="myEmailLink" onClick={handleCopy}>
                        <div className="linkName">
                            {copied ? t('copiedTranslate') || 'Copié !' : EMAIL}
                        </div>
                        <span className="material-symbols-outlined">
                            {copied ? 'check' : 'content_copy'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
