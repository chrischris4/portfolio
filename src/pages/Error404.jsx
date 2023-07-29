import '../styles/Error404.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Error404() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page-container">
            <div id="error-main">
                <h2 className="error-404">404</h2>
                <p className="errorP">
                    La page que vous demandez n'existe pas.
                </p>
                <Link to="/" className="error-link">
                    Retourner sur la page d'Accueil
                </Link>
            </div>
        </div>
    );
}

export default Error404;
