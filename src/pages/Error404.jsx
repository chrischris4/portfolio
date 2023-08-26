import '../styles/Error404.css';
import { Link } from 'react-router-dom';
import { useEffect, useContext, useState, useRef, useMemo } from 'react';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function Error404() {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { isDarkTheme } = useContext(ThemeContext);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    useEffect(() => {
        if (isDarkTheme) {
            setTheme('dark');
        } else {
            setTheme('');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const images = useMemo(
        () => [
            'https://i.ibb.co/9rt0cYk/server-control-6688463.png',
            'https://i.ibb.co/42hGMc1/error-404-9723235.png',
            'https://i.ibb.co/fCRFBR5/skull-bones-5354410.png',
        ],
        []
    );

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [images]);

    useEffect(() => {
        imageRef.current.src = images[currentImageIndex];
    }, [currentImageIndex, images]);

    return (
        <div className={`error${theme === 'dark' ? ' night' : ''}`}>
            <img className="error404" ref={imageRef} alt="" />
            <p className="errorP">{t('errorP')}</p>
            <Link to="/" className="errorLink">
                {t('errorLink')}
            </Link>
        </div>
    );
}

export default Error404;
