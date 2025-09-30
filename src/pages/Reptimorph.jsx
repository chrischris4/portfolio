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

function Reptimorph() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        const observerRight = new IntersectionObserver(
            (entries, observerRight) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animateRight"
                        );
                        observerRight.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const elementsToAnimateRight = document.querySelectorAll(
            '.pageh1'
        );

        elementsToAnimateRight.forEach((element) => {
            observerRight.observe(element);
        });

        const observerUp = new IntersectionObserver(
            (entries, observerUp) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animateUp"
                        );
                        observerUp.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const elementsToAnimateUp = document.querySelectorAll('.pageGithub');

        elementsToAnimateUp.forEach((element) => {
            observerUp.observe(element);
        });
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animate"
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
            '.pageInfo, .projectContent'
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });
    },);

    return (
        <div className="page-container">
            <MetaTagsComponent
                title="Reptimorph - ventes de reptiles entre pros et particuliers "
                description="Projet fullstack, nest, prisma, next, postgresql, stripe"
                keywords="Jost Christopher, développeur, FullStack, application,next, nest, stripe, postgresql, react, express, mongodb, frontend, backend"
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
                <h1 className="pageh1">Reptimorph - Ventes de reptiles entre pros et particuliers</h1>
                <div className="flex  self-end justify-end items-center gap-4 mt-6">
                    <h2 className="pageh2">Next / Nest</h2>
                    {/* <a
                        href="https://reptimorph.fr"
                        target="_blank"
                        rel="noreferrer"
                        className='bg-white text-black px-3 py-2 rounded-full font-medium text-lg'
                    >
                        Visiter le site
                    </a> */}
                </div>
            </div>
            <a href="https://reptimorph.fr" target="_blank"
                rel="noreferrer" className=' flex justify-center w-[90%] lg:w-[80%] mt-5 mx-auto bg-white/80 text-black p-3 rounded-lg font-medium text-lg hover:bg-gray-200'>Visiter le site</a>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">{t('pageh2')}</h2>
                <ul>
                    <li>Nest</li>
                    <li>Next</li>
                    <li>Prisma</li>
                    <li>TypeScript</li>
                    <li>PostgreSql</li>
                    <li>Railway</li>
                    <li>Stripe</li>
                    <li>Socket.io</li>
                    <li>Cloudinary</li>
                    <li>MapBox</li>
                    <li>0Auth</li>
                </ul>
            </div>
            <div className="pageInfo">
                <div className="pageInfoContent">
                    <img
                        className="pageImg"
                        src="https://i.ibb.co/svCQxS6K/Capture-d-cran-2025-09-30-013221.png"
                        alt="Reptimorph"
                        loading="lazy"
                    />
                    <div className="pageInfoDesc">
                        <p>
                            Reptimorph est un site mettant en relation des éleveurs et particuliers afin de vendre leurs reptiles / poissons et autres matériels.
                        </p>
                        <ul>
                            <li>
                                Nous avons choisis Nest coté back afin d'avoir un controle robuste sur les données
                            </li>
                            <li>
                                Coté front nous utilisons Next, pour ses performances et rendu SSR permettant un référencement au top
                            </li>
                            <li>
                                Concernant les transaction, nous utilisons stripe
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='w-[90%] lg:w-[80%] mx-auto text-center mt-6'>Une présentation du projet plus en détails sera disponible bientôt..</p>
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersTranslate')}</h2>
            </div>
            <div className="allProjectPage">
                <div className="projectContent">
                    <Project
                        title="10 Cents"
                        about="Jeu de hasard en ligne"
                        cover="https://i.ibb.co/BtNkKrp/ten-Cents-Mini.webp"
                        link={`/TenCents`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="My Agenda"
                        about="Votre agenda en ligne"
                        cover="https://i.ibb.co/Pg9WvgH/myAgenda.webp"
                        link={`/MyAgenda`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="Elden Lore"
                        about="Site sur l'univers d'Elden Ring"
                        cover="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                        link={`/EldenLore`}
                        loading="lazy"
                        filtre="PHP"
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

export default Reptimorph;
