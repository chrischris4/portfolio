import { useEffect, useContext, useState } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import ProjectMini from '../components/ProjectMini';
import Reseaux from '../components/Reseaux';
import { ThemeContext } from '../components/ThemeSombre';
import { useTranslation } from 'react-i18next';

function NinaCarducci() {
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
                title="Nina Carducci - Photographe"
                description="Projet seo, réferencement, optimisation, performance"
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
                <h1 className="pageh1">{t('NinaTitleTranslate')}</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">SEO</h2>

                    <a
                        href="https://github.com/chrischris4/Nina_carducci_site_de_photographe"
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
                    L'optimisation des <strong>performances</strong>.
                </p>
                <h2 className="projetTitleAbout">Solutions</h2>
                <p className="pProjetAbout">
                    J'ai appris à utiliser des outils comme
                    <strong> Pagespeed</strong>, afin d'analyser les problèmes,
                    j'ai faits le nécessaire au niveau des images et du
                    <strong> HTML/CSS</strong> pour l'alléger le plus possible,
                    puis j'ai mis en place les <strong>metas</strong> et
                    <strong> Richsnippet</strong>.
                </p>
                <h2 className="projetTitleAbout">{t('pageh23')}</h2>
                <ul>
                    <li>Optimisation</li>
                    <li>Performance</li>
                    <li>SEO</li>
                    <li>RichSnippets</li>
                </ul>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />

                <p>
                    Sur ce projet j'ai géré toute la partie <strong>SEO</strong>
                    , conversion et compression des images, minification du code
                    pour les
                    <strong> performances</strong> et
                    <strong> optimisation</strong> du HTML pour le
                    <strong> référencement</strong>.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/qsNbWqj/nina2-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <p>
                    J'ai ajouté des <strong>Richsnippet</strong> nécessaires
                    pour le
                    <strong> référencement</strong> sur google, ainsi que des
                    <strong> meta og</strong> pour les partages sur les réseaux
                    sociaux.
                </p>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/dMHMXYn/nina3-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <p>
                    Afin d'atteindre le meilleur score possible, j'ai utilisé
                    des outils tels que
                    <strong> Pagespeed </strong>
                    et l'extension
                    <strong> Wave</strong> afin d'identifier au mieux les
                    problèmes d'optimisation.
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
                        title="Sophie Bluel - Designer"
                        cover="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                        link={`/SophieBluel`}
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

export default NinaCarducci;
