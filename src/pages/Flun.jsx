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
import Carousel from '../components/Carousel';

function Flun() {
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
                title="Flun - Application mobile de création d'histoires IA"
                description="Application React Native / Expo pour générer des histoires personnalisées avec illustrations générées par IA. NestJS, OpenAI, Replicate, PostgreSQL."
                keywords="Jost Christopher, développeur, FullStack, application mobile, React Native, Expo, NestJS, OpenAI, Replicate, histoires enfants, IA"
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
                <h1 className="pageh1">{t('flunPageTitle')}</h1>
                <div className="flex self-end justify-end items-center gap-4 mt-6">
                    <h2 className="pageh2">React Native / Expo</h2>
                </div>
            </div>
            <a
                href="https://play.google.com/store/apps/details?id=com.flun.app"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center w-[90%] lg:w-[80%] mt-5 mx-auto bg-white/80 text-black p-3 rounded-lg font-medium text-lg hover:bg-gray-200"
            >
                {t('viewOnPlayStore')}
            </a>
            <div className="projetAbout">
                <h2 className="projetTitleAbout">{t('pageh2')}</h2>
                <ul>
                    <li>React Native</li>
                    <li>Expo</li>
                    <li>TypeScript</li>
                    <li>NativeWind</li>
                    <li>NestJS</li>
                    <li>Prisma</li>
                    <li>PostgreSQL</li>
                    <li>OpenAI</li>
                    <li>Replicate</li>
                </ul>
            </div>

            <PageInfo
                image="https://i.ibb.co/BKzXWnhT/Flun-7.png"
                text={t('flunPageInfo1Text')}
                items={[
                    t('flunPageInfo1Item1'),
                    t('flunPageInfo1Item2'),
                    t('flunPageInfo1Item3'),
                    t('flunPageInfo1Item4'),
                    t('flunPageInfo1Item5'),
                ]}
            />
            <PageInfo
                text={t('flunPageInfo2Text')}
                items={[
                    t('flunPageInfo2Item1'),
                    t('flunPageInfo2Item2'),
                    t('flunPageInfo2Item3'),
                    t('flunPageInfo2Item4'),
                    t('flunPageInfo2Item5'),
                ]}
            />
            <PageInfo
                text={t('flunPageInfo3Text')}
                items={[
                    t('flunPageInfo3Item1'),
                    t('flunPageInfo3Item2'),
                    t('flunPageInfo3Item3'),
                    t('flunPageInfo3Item4'),
                ]}
            />
            <PageInfo
                text={t('flunPageInfo4Text')}
                items={[
                    t('flunPageInfo4Item1'),
                    t('flunPageInfo4Item2'),
                    t('flunPageInfo4Item3'),
                    t('flunPageInfo4Item4'),
                ]}
            />
            <PageInfo
                text={t('flunPageInfo5Text')}
                items={[
                    t('flunPageInfo5Item1'),
                    t('flunPageInfo5Item2'),
                    t('flunPageInfo5Item3'),
                    t('flunPageInfo5Item4'),
                    t('flunPageInfo5Item5'),
                ]}
            />

            <h3 className="carouselTitle">{t('screenshotsTitle')}</h3>
            <Carousel
                centered
                items={[
                    'https://i.ibb.co/rGx228WZ/1000005272.jpg',
                    'https://i.ibb.co/Rp7hY2gD/1000005274.jpg',
                    'https://i.ibb.co/7dTfQXGT/1000005276.jpg',
                    'https://i.ibb.co/1GPC7hDy/1000005278.jpg',
                    'https://i.ibb.co/YFgqCHPG/1000005280.jpg',
                    'https://i.ibb.co/v4cYdmcB/1000005282.jpg',
                    'https://i.ibb.co/990szN6V/1000005284.jpg',
                    'https://i.ibb.co/DHGR1Ty5/1000005286.jpg',
                    'https://i.ibb.co/KjhFM5kY/1000005288.jpg',
                    'https://i.ibb.co/wh1q8ZMf/1000005290.jpg',
                    'https://i.ibb.co/k2HNSNc0/1000005292.jpg',
                    'https://i.ibb.co/Q7zhfx8L/1000005294.jpg',
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
                        title="Reptimorph"
                        about={t('reptimorphAbout')}
                        cover="https://i.ibb.co/svCQxS6K/Capture-d-cran-2025-09-30-013221.png"
                        link="/Reptimorph"
                        loading="lazy"
                        filtre="Nest / Next"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="Elden Lore"
                        about={t('eldenLoreAbout')}
                        cover="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                        link="/EldenLore"
                        loading="lazy"
                        filtre="PHP"
                    />
                </div>
                <div className="projectContent">
                    <Project
                        title="10 Cents"
                        about={t('tenCentsAbout')}
                        cover="https://i.ibb.co/BtNkKrp/ten-Cents-Mini.webp"
                        link="/TenCents"
                        loading="lazy"
                        filtre="React / Node.js"
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

export default Flun;
