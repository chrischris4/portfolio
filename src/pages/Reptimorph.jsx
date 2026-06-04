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

function Reptimorph() {
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
                rel="noreferrer" className=' flex justify-center w-[90%] lg:w-[80%] mt-5 mx-auto bg-white/80 text-black p-3 rounded-lg font-medium text-lg hover:bg-gray-200'>{t('visitWebsiteButton')}</a>
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
            <PageInfo
                image="https://i.ibb.co/4GfjsMb/Capture-d-cran-2026-06-04-175459.png"
                imageAlt="Reptimorph"
                text={t('reptimorphPageInfo1Text')}
                items={[
                    t('reptimorphPageInfo1Item1'),
                    t('reptimorphPageInfo1Item2'),
                    t('reptimorphPageInfo1Item3'),
                    t('reptimorphPageInfo1Item4'),
                ]}
            />
            <PageInfo
                image="https://i.ibb.co/sdPFZw55/Capture-d-cran-2026-06-04-175522.png"
                text={t('reptimorphPageInfo2Text')}
                items={[
                    t('reptimorphPageInfo2Item1'),
                    t('reptimorphPageInfo2Item2'),
                    t('reptimorphPageInfo2Item3'),
                    t('reptimorphPageInfo2Item4'),
                    t('reptimorphPageInfo2Item5'),
                ]}
            />
            <PageInfo
                image="https://i.ibb.co/4gNwF051/Capture-d-cran-2026-06-04-175550.png"
                text={t('reptimorphPageInfo3Text')}
                items={[
                    t('reptimorphPageInfo3Item1'),
                    t('reptimorphPageInfo3Item2'),
                    t('reptimorphPageInfo3Item3'),
                    t('reptimorphPageInfo3Item4'),
                ]}
            />
            <PageInfo
                image="https://i.ibb.co/zTNNmMY3/Capture-d-cran-2026-06-04-175615.png"
                text={t('reptimorphPageInfo4Text')}
                items={[
                    t('reptimorphPageInfo4Item1'),
                    t('reptimorphPageInfo4Item2'),
                    t('reptimorphPageInfo4Item3'),
                    t('reptimorphPageInfo4Item4'),
                    t('reptimorphPageInfo4Item5'),
                    t('reptimorphPageInfo4Item6'),
                ]}
            />
            <div id="othersLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('othersTranslate')}</h2>
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
                        title="Elden Lore"
                        about={t('eldenLoreAbout')}
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
