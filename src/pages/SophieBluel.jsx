import { useEffect, useContext, useState } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function SophieBluel() {
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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            `animate${theme === 'dark' ? 'night' : ''}`
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        const elementsToAnimate = document.querySelectorAll(
            '.pageInfo, .othersMini'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    }, [theme]);

    return (
        <div className={`page-container ${theme === 'dark' ? 'night' : ''}`}>
            <MetaTagsComponent
                title="Sophie Bluel - Designer"
                description="Projet frontend, requête via API, javaScript"
                keywords="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://chrischris4.github.io/p8/JC.ico"
                og_url="https://chrischris4.github.io/p8/"
                og_type="website"
            />
            <div id="topPageLink"></div>

            <div className="pageTitle">
                <h1 className="pageh1">Sophie Bluel - Designer</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Frontend</h2>
                    <a
                        href="https://github.com/chrischris4/Sophie_bluel_site_de_designer"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="imgGithub"
                            src="https://i.ibb.co/dD4Q3xW/git.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">{t('pageh2')}</h2>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                </ul>
                <h2 className="projetTitleAbout">{t('pageh22')}</h2>
                <p className="pProjetAbout">
                    L'utilisation d'une <strong>API</strong>, les différentes{' '}
                    <strong>requêtes</strong> et l'
                    <strong>authentification</strong> de l'utilisateur.
                </p>
                <h2 className="projetTitleAbout">Solutions</h2>
                <p className="pProjetAbout">
                    J'ai appris à effectuer des <strong>requêtes</strong> avec{' '}
                    <strong>fetch</strong>, afin de manipuler des données
                    présentes sur un fichier <strong>JSON</strong>, les Méthodes
                    : <strong>POST</strong>, <strong>GET</strong>,{' '}
                    <strong>DELETE</strong>, afin de poster, récupérer ou
                    supprimer des données.
                </p>
                <h2 className="projetTitleAbout">{t('pageh3')}</h2>
                <ul>
                    <li>API</li>
                    <li>Requêtes</li>
                    <li>JSON</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <p>
                    Sur ce projet j'ai géré la partie <strong>Frontend</strong>,
                    j'ai généré la galerie de la page d'accueil à partir d'un
                    fichier <strong>JSON</strong> en effectuant des{' '}
                    <strong>requêtes</strong> via une <strong>API</strong>.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/GM9CK94/sophiebluel3-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <p>
                    Le site contient une page d'
                    <strong>authentification</strong>, pour qu'une fois
                    identifié, le propriétaire du site puisse accéder à un mode
                    édition.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/nsQVpXN/sophiebluel2-min.webp"
                    alt="Sophie-Bluel"
                    loading="lazy"
                />
                <p>
                    Une fois le mode édition activé, le propriétaire du site
                    pourra, grâce à une <strong>modale</strong>, ajouter,
                    modifier ou supprimer des images dans la galerie.
                </p>
            </div>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersTranslate')}</h2>
            </div>
            <div className="others">
                <div className="othersMini">
                    <ProjectMini
                        title={t('BookiTitleTranslate')}
                        cover="https://i.ibb.co/mFqVKV1/Booki-min.webp"
                        link={`/Booki`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title={t('KasaTitleTranslate')}
                        cover="https://i.ibb.co/znVrBcm/kasa-min.webp"
                        link={`/Kasa`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title={t('MVGTitleTranslate')}
                        cover="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                        link={`/MonVieuxGrimoire`}
                        loading="lazy"
                    />
                </div>
                <div className="othersMini">
                    <ProjectMini
                        title={t('NinaTitleTranslate')}
                        cover="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                        link={`/NinaCarducci`}
                        loading="lazy"
                    />
                </div>
            </div>
            <div id="reseauxLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('reseauxTitleTranslate')}</h2>
            </div>
            <Reseaux />
            <div id="contactLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Contact</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default SophieBluel;
