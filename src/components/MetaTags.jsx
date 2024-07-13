import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTags(props) {
    return (
        <>
            <Helmet>
                <title>
                    {props.title ?? 'Jost Christopher - Développeur FullStack'}
                </title>
                <meta
                    name="description"
                    content={
                        props.description ??
                        "Je suis Christopher Jost, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                    }
                />
                <meta
                    name="author"
                    content={props.author ?? 'Jost Christopher'}
                />
                <meta
                    name="keywords"
                    content={
                        props.keywords ??
                        'Jost Christopher, développeur, FullStack, application, react, express, mongodb, frontend, backend'
                    }
                />
                <meta
                    property="og:title"
                    content={props.og_title ?? 'Jost Christopher'}
                />
                <meta
                    property="og:description"
                    content={
                        props.og_description ??
                        "Je suis Christopher Jost, un développeur FullStack spécialisé dans la création d'applications web dynamiques. Explorez mes projets et découvrez mon parcours de formation en développement web. Contactez-moi pour collaborer sur des projets innovants."
                    }
                />
                <meta
                    property="og:image"
                    content={
                        props.og_image ??
                        'https://www.christopher-jost.fr/JC.ico'
                    }
                />
                <meta
                    property="og:url"
                    content={props.og_url ?? 'https://www.christopher-jost.fr/'}
                />
                <meta property="og:type" content={props.og_type ?? 'website'} />
            </Helmet>
        </>
    );
}

export default MetaTags;
