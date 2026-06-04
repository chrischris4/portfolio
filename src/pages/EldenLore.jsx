import '../styles/Page.css';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import MetaTagsComponent from '../components/MetaTags';
import Project from '../components/Project';
import Reseaux from '../components/Reseaux';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import { useTranslation } from 'react-i18next';
import { ShootingStars } from "../components/ui/shooting-star";
import { StarsBackground } from "../components/ui/star-background";
import PageInfo from '../components/PageInfo';
// import { Spotlight } from "../components/ui/spotlight-new";


function EldenLore() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        const observerRight = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animateRight");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const observerUp = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animateUp");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.pageh1').forEach((el) => observerRight.observe(el));
        document.querySelectorAll('.pageGithub').forEach((el) => observerUp.observe(el));
        document.querySelectorAll('.pageInfo, .projectContent').forEach((el) => observer.observe(el));

        return () => {
            observerRight.disconnect();
            observerUp.disconnect();
            observer.disconnect();
        };
    }, []);

    return (
        <div className="page-container">
            {/* <Spotlight /> */}
            <MetaTagsComponent
                title="Elden Lore - Site sur l'univers de Elden Ring"
                description="Projet PHP, SQL, PhpMyAdmin, Xampp"
                keywords="Jost Christopher, développeur, FullStack, siteWeb, PHP, SQL, Xampp"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://www.christopher-jost.fr/JC.ico"
                og_url="https://www.christopher-jost.fr/"
                og_type="website"
            />
            <RichSnippetAuthor />
            <div id="topPageLink"></div>
            <div className="pageTitle relative">
                <ShootingStars />
                <StarsBackground />
                <h1 className="pageh1">{t('EldenLoreTitleTranslate')}</h1>
                <div className="pageGithub">
                    <h2 className="pageh2">Frontend / Backend</h2>
                    <a
                        href="https://github.com/chrischris4/elden_lore"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="imgGithub"
                            src="https://i.ibb.co/DVbScgL/icons8-github-128.png"
                            alt="GitHub"
                        />
                    </a>
                </div>
            </div>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">{t('pageh2')}</h2>
                <ul>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>MySQL</li>
                    <li>XAMPP</li>
                    <li>Apache</li>
                </ul>
            </div>
            <PageInfo image="https://i.ibb.co/z2dYpT7/elden-Lore.webp" imageAlt="eldenLore" text={t('pageInfoEldenLore')} />
            <PageInfo image="https://i.ibb.co/VqjMf3T/Elden-Lore-Article.webp" imageAlt="eldenLore" text={t('pageInfoEldenLore2')} />
            <PageInfo image="https://i.ibb.co/fHH23Hw/Elden-Lore2.webp" imageAlt="eldenLore" text={t('pageInfoEldenLore3')} />
            <PageInfo image="https://i.ibb.co/TKDGmV0/elden-Lore-User.webp" imageAlt="eldenLore" text={t('pageInfoEldenLore4')} />
            <PageInfo image="https://i.ibb.co/Jxs3bhB/Elden-Lore-Commentary.webp" imageAlt="eldenLore" text={t('pageInfoEldenLore5')} />
            <PageInfo image="https://i.ibb.co/hWgZ3rP/elden-Lore-Edit.webp" imageAlt="eldenLore" text={t('pageInfoEldenLore7')} />
            <PageInfo image="https://i.ibb.co/BG26mFC/elden-Lore-Lore.webp" imageAlt="eldenLore" text={t('pageInfoEldenLore6')} />
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersPersoTranslate')}</h2>
            </div>
            <div className="allProjectPage">
                <div className="projectContent">
                    <Project
                        title="10 Cents"
                        about={t('tenCentsAbout')}
                        cover="https://i.ibb.co/BtNkKrp/ten-Cents-Mini.webp"
                        link={`/TenCents`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="My Agenda"
                        about={t('myAgendaAbout')}
                        cover="https://i.ibb.co/Pg9WvgH/myAgenda.webp"
                        link={`/MyAgenda`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="Reptimorph"
                        about={t('reptimorphAboutShort')}
                        cover="https://i.ibb.co/svCQxS6K/Capture-d-cran-2025-09-30-013221.png"
                        link={`/Reptimorph`}
                        loading="lazy"
                        filtre="Nest / Next"
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

export default EldenLore;
