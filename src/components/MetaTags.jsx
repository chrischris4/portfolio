import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTagsComponent(props) {
    return (
        <>
            <Helmet>
                <title>{props.title ?? 'JOST Christopher'}</title>
                <meta
                    name="description"
                    content={
                        props.description ??
                        "Je suis Christopher JOST, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                    }
                />
                <meta name="author" content={props.author ?? ''} />
                <meta
                    name="keywords"
                    content={
                        props.keywords ??
                        'Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend'
                    }
                />
                <meta
                    property="og:title"
                    content={props.og_title ?? 'JOST Christopher'}
                />
                <meta
                    property="og:description"
                    content={
                        props.og_description ??
                        "Je suis Christopher JOST, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                    }
                />
                <meta property="og:image" content={props.og_image ?? ''} />
                <meta
                    property="og:url"
                    content={
                        props.og_url ??
                        'https://chrischris4.github.io/portfolio/'
                    }
                />
                <meta property="og:type" content={props.og_type ?? 'website'} />
            </Helmet>
        </>
    );
}

export default MetaTagsComponent;
