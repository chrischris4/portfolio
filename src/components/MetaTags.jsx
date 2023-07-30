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
                </MetaTags>
            </div>
        );
    }
}

export default MetaTagsComponent;
