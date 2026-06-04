import Banner from '../components/Banner';
import '../styles/Home.css';
import { useEffect, useState } from 'react';
import Project from '../components/Project';
import ContactForm from '../components/ContactForm';
import MetaTags from '../components/MetaTags';
import RichSnippetAuthor from '../components/RichSnippetAuthor';
import Reseaux from '../components/Reseaux';
import Services from '../components/Services';
import { useTranslation } from 'react-i18next';
import Competence from '../components/Competence';
import { Button } from '../components/ui/moving-border';
import { AnimatedTestimonialsDemo } from '../components/AnimatedTestimonialsDemo';


function Home() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const observerLeft = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animateLeft");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const observerRight = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animateRight");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.6 }
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
            { threshold: 0.1 }
        );

        document.querySelectorAll('.about h3').forEach((el) => observerLeft.observe(el));
        document.querySelectorAll('.cv').forEach((el) => observerRight.observe(el));
        document.querySelectorAll('.competence, .parcoursSection').forEach((el) => observer.observe(el));

        return () => {
            observerLeft.disconnect();
            observerRight.disconnect();
            observer.disconnect();
        };
    }, []);

    const [activeAnimItems, setActiveAnimItems] = useState([]); // Tableau des éléments actifs
    const [specialAnim, setSpecialAnim] = useState(false); // État pour gérer la classe spéciale

    const [finalAnim, setFinalAnim] = useState(false)
    const handleButtonClick = (itemId) => {
        // Ajouter l'élément si non présent dans le tableau
        if (!activeAnimItems.includes(itemId)) {
            setActiveAnimItems([...activeAnimItems, itemId]);
        }
    };

    useEffect(() => {
        if (
            ['animItem1', 'animItem2', 'animItem3'].every((item) =>
                activeAnimItems.includes(item)
            )
        ) {
            // Ajouter `specialAnim` après un délai de 1 seconde
            const timeout = setTimeout(() => {
                setSpecialAnim(true);
            }, 1000);
            const timeout2 = setTimeout(() => {
                setFinalAnim(true);
            }, 3000);
            return () => {
                clearTimeout(timeout);
                clearTimeout(timeout2);
            };
        } else {
            setSpecialAnim(false); // Réinitialiser si tous les items ne sont plus actifs
            setFinalAnim(false); // Réinitialiser si tous les items ne sont plus actifs
        }
    }, [activeAnimItems]);



    return (
        <div className="page-container">
            <MetaTags
                title="Portfolio - JOST Christopher"
                description="Je suis Christopher JOST, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mon portfolio, mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                keywords="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend, portfolio"
                author="Jost Christopher"
                og_title="Portfolio - JOST Christopher"
                og_description="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                og_image="https://www.christopher-jost.fr/JC.ico"
                og_url="https://www.christopher-jost.fr/"
                og_type="website"
            />
            <RichSnippetAuthor />
            <div id="topPageLink"></div>
            <div id="backHome"></div>
            <Banner />
            <div id="aboutLien"></div>
            <div className="aboutAll">
                <div className="about">
                    <h2>
                        {t('titleAboutTranslate')}
                    </h2>
                    <p >{t('textUpAbout')}</p>
                    <p >{t('textAbout')}</p>
                    <h3>{t('h3AboutTranslate')}</h3>
                </div>

                <div className=
                    {`aboutAnim ${finalAnim ? 'finalAnimOn' : ''}`}>
                    <div className="aboutAnimItem" id="animItem1">
                        <p
                            className={`${activeAnimItems.includes('animItem1') ? 'animOn' : ''
                                } ${specialAnim ? 'specialAnimOnRight' : ''}`}
                        >Less</p>
                        <div
                            className={`aboutAnimBtn ${activeAnimItems.includes('animItem1') ? 'animOn' : ''}`}
                            onClick={() => handleButtonClick('animItem1')}
                        ></div>
                    </div>

                    <div className="aboutAnimItem" id="animItem2">
                        <p className={activeAnimItems.includes('animItem2') ? 'animOn' : ''}>
                            is</p>
                        <div
                            className={`aboutAnimBtn ${activeAnimItems.includes('animItem2') ? 'animOn' : ''}`}
                            onClick={() => handleButtonClick('animItem2')}
                        ></div>
                    </div>

                    <div className="aboutAnimItem" id="animItem3">
                        <p
                            className={`${activeAnimItems.includes('animItem3') ? 'animOn' : ''
                                } ${specialAnim ? 'specialAnimOnLeft' : ''}`}
                        >            more.</p>
                        <div
                            className={`aboutAnimBtn ${activeAnimItems.includes('animItem3') ? 'animOn' : ''}`}
                            onClick={() => handleButtonClick('animItem3')}
                        ></div>
                    </div>
                </div>
            </div>

            <div id="projectProLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('projectProTitle')}</h2>
            </div>
            <div id="projectsPro">
                <div className="projectContent perso tout back front seo">
                    <Project
                        title="Reptimorph"
                        about={t('reptimorphAbout')}
                        cover="https://i.ibb.co/4GfjsMb/Capture-d-cran-2026-06-04-175459.png"
                        link={`/Reptimorph`}
                        loading="lazy"
                        filtre="Nest / Next"
                    />
                </div>
                <div className="projectContent perso tout back front seo">
                    <Project
                        title="Flun"
                        about={t('flunAbout')}
                        cover="https://i.ibb.co/BKzXWnhT/Flun-7.png"
                        link={`/Flun`}
                        loading="lazy"
                        filtre="React Native / NestJS"
                    />
                </div>
            </div>

            <div id="projectPersoLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('projetPersoTitle')}</h2>
            </div>
            <div id="projectsPerso">
                <div className="projectContent perso tout back front seo">
                    <Project
                        title="Elden Lore"
                        about={t('eldenLoreAbout')}
                        cover="https://i.ibb.co/z2dYpT7/elden-Lore.webp"
                        link={`/EldenLore`}
                        loading="lazy"
                        filtre="PHP"
                    />
                </div>
                <div className="projectContent perso tout back front seo">
                    <Project
                        title="10 Cents"
                        about={t('tenCentsAbout')}
                        cover="https://i.ibb.co/BtNkKrp/ten-Cents-Mini.webp"
                        link={`/TenCents`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
                <div className="projectContent perso tout back front seo">
                    <Project
                        title="My agenda"
                        about={t('myAgendaAbout')}
                        cover="https://i.ibb.co/Pg9WvgH/myAgenda.webp"
                        link={`/MyAgenda`}
                        loading="lazy"
                        filtre="React / Node.js"
                    />
                </div>
            </div>

            <div id="parcoursLien"></div>
            <div className="sectionTitle w-2">
                <div className="styleTitle"></div>
                <h2>{t('parcoursTitleTranslate')}</h2>
            </div>
            <div className="parcoursSection">
                <AnimatedTestimonialsDemo />
            </div>
            <div className="cv">
                <a
                    href="https://drive.google.com/uc?export=download&id=1yXz77Fcgvn97PwtHmHhpi5sYRbkhJ16z"
                    download
                >
                    <Button
                        borderRadius="5px"
                        className="bg-[#08090c] text-white border-2 border-[#2A2F3A] w-full p-2 px-4 hover:border-[#3d4454] transition-all duration-300 text-[18px]"
                    >
                        {t('buttonCvTranslate')}
                        <span className="material-symbols-rounded dl">
                            download
                        </span>
                    </Button>

                </a>
            </div>
            <div id="competenceLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('competenceTitleTranslate')}</h2>
            </div>
            <div id="competences">
                <Competence
                    title="Frontend"
                    cover="https://i.ibb.co/tLWdp4Z/computer-7358692.png"
                    list={['./assets/svg/next-dot-js-svgrepo-com.svg', './assets/svg/react-svgrepo-com.svg', './assets/svg/javascript-svgrepo-com.svg', './assets/svg/typescript-icon-svgrepo-com.svg', './assets/svg/tailwind-svgrepo-com.svg']}
                />
                <Competence
                    title="Backend"
                    cover="https://i.ibb.co/D7d9JxP/database-658099.png"
                    list={['./assets/svg/light-prisma-svgrepo-com.svg', './assets/svg/mongodb-svgrepo-com.svg', './assets/svg/php-1-logo-svgrepo-com.svg', './assets/svg/nest-middleware-ts-svgrepo-com.svg', './assets/svg/node-svgrepo-com.svg', './assets/svg/mysql-svgrepo-com.svg']}
                />
                <Competence
                    title="Outils"
                    cover="https://i.ibb.co/tzLVdzv/support-807303.png"
                    list={['./assets/svg/docker-icon-svgrepo-com.svg', './assets/svg/figma-svgrepo-com.svg', './assets/svg/vscode-svgrepo-com.svg', './assets/svg/postman-icon-svgrepo-com.svg', './assets/svg/xampp-svgrepo-com.svg', './assets/svg/gitlab-svgrepo-com.svg']}
                />
            </div>
            <div id="servicesLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>{t('servicesTitle')}</h2>
            </div>
            <div className="servicesContent">
                <Services
                    title={t('webDevTitleTranslate')}
                    span="code"
                    description={t('webDevDescriptionTranslate')}
                    cover="https://i.ibb.co/0Kz4zHD/responsive-1055687.png"
                    listTitle={t('webDevListTitleTranslate')}
                    list={[
                        'HTML/CSS',
                        'React',
                        'Node.js',
                        'JavaScript',
                        'MongoDB',
                        'PHP',
                    ]}
                    listTitle2={t('webDevListTitle2Translate')}
                    list2={[
                        t('listWebTranslate'),
                        t('listWebTranslate1'),
                        t('listWebTranslate2'),
                        t('listWebTranslate3'),
                        t('listWebTranslate4'),
                    ]}
                    p={t('servicesPTranslate')}
                    link={['/Reptimorph', '/Flun', '/TenCents']}
                />
                <Services
                    title="SEO"
                    span="monitoring"
                    description={t('seoDescriptionTranslate')}
                    cover="https://i.ibb.co/h9j9H7t/ux.png"
                    listTitle={t('seoListTitleTranslate')}
                    list={['Pagespeed', 'Wave']}
                    listTitle2={t('seoListTitle2Translate')}
                    list2={[
                        t('listSeoTranslate'),
                        t('listSeoTranslate1'),
                        t('listSeoTranslate2'),
                        t('listSeoTranslate3'),
                    ]}
                    p={t('servicesPTranslate')}
                    link={['/Reptimorph', '/EldenLore']}
                />
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
                <h2>{t('contactTitleTranslate')}</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default Home;
