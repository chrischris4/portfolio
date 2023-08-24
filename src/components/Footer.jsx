import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <p className="pFooter">
                {t('footerStartTranslate')}
                <a
                    className="linkFooter"
                    href="https://github.com/chrischris4/portfolio"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                .
            </p>
            <p className="pFooter">{t('footerEndTranslate')}</p>
            <p className="byFooter">© 2023 by JOST Christopher</p>
        </div>
    );
}

export default Footer;
