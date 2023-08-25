import '../styles/Error404.css';
import { Link } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { ThemeContext } from '../components/ThemeSombre';

function Error404() {
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

    return (
        <div className={`error${theme === 'dark' ? ' night' : ''}`}>
            <h2 className="error404">404</h2>
            <p className="errorP">La page que vous demandez n'existe pas.</p>
            <Link to="/" className="errorLink">
                Retourner sur la page d'Accueil
            </Link>
        </div>
    );
}

export default Error404;
