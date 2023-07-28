import React from 'react';
import MetaTags from 'react-meta-tags';

class MetaTagsComponent extends React.Component {
    render() {
        return (
            <div className="metaTags">
                <MetaTags>
                    <title>Portfolio - JOST Christopher</title>
                    <meta
                        name="description"
                        content="Je suis Christopher JOST, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                    />
                    <meta name="author" content="Jost Christopher" />
                    <meta
                        name="keywords"
                        content="Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend,"
                    />
                    <meta
                        property="og:title"
                        content="Portfolio - JOST Christopher"
                    />
                    <meta
                        property="og:description"
                        content="Découvrez mon portfolio qui met en valeur mes projets créatifs et mes compétences en développement web."
                    />
                    <meta
                        property="og:image"
                        content="https://chrischris4.github.io/p8/JC.ico"
                    />
                    <meta
                        property="og:url"
                        content="https://chrischris4.github.io/p8/"
                    />

                    <meta property="og:type" content="website" />
                    <script type="application/ld+json">
                        {`
                    "@context": "http://schema.org",
                    "@type": "Person",
                    "name": "Jost Christopher",
                    "url": "https://chrischris4.github.io/p8/",
                    "image": "https://chrischris4.github.io/p8/JC.ico",
                    "sameAs": [
                        "https://www.linkedin.com/in/christopher-jost-888b75195/",
                        "https://github.com/chrischris4"
                    ],
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Openclassrooms"
                    },
                    "jobTitle": "Développeur FullStack"
                },
                {
                    "@context": "http://schema.org",
                    "@type": "ItemList",
                    "name": "Mes Projets",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Kasa - Agence Immobilière",
                                "image": "https://i.ibb.co/znVrBcm/kasa-min.webp",
                                "url": "https://chrischris4.github.io/p8/Kasa"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Sophie Bluel - Designer",
                                "image": "https://i.ibb.co/8PCjj8K/sophiebluel-min.webp",
                                "url": "https://chrischris4.github.io/p8/SophieBluel"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Nina Carducci - Photographe",
                                "image": "https://i.ibb.co/TwtD4Fn/nina-min.webp",
                                "url": "https://chrischris4.github.io/p8/NinaCarducci"
                            }
                        },                    
                        {
                            "@type": "ListItem",
                            "position": 4,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Mon vieux grimoire - Notation de Livres",
                                "image": "https://i.ibb.co/r5FVsdh/mvg-min.webp",
                                "url": "https://chrischris4.github.io/p8/MonVieuxGrimoire"
                            }
                        },                        
                        {
                            "@type": "ListItem",
                            "position": 5,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Booki - Agence de Location",
                                "image": "https://i.ibb.co/mFqVKV1/Booki-min.webp",
                                "url": "https://chrischris4.github.io/p8/Booki"
                            }
                        }                        
                    ]
                `}
                    </script>
                </MetaTags>
            </div>
        );
    }
}

export default MetaTagsComponent;
