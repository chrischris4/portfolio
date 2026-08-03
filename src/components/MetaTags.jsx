import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTags(props) {
    return (
        <>
            <Helmet>
                <title>
                    {props.title ??
                        'Christopher Jost | Développeur FullStack React & IA'}
                </title>
                <meta
                    name="description"
                    content={
                        props.description ??
                        "Développeur FullStack à Montpellier : React, Next.js, NestJS, React Native. J'intègre l'IA dans mes produits et l'utilise au quotidien dans mon workflow."
                    }
                />
                <meta
                    name="author"
                    content={props.author ?? 'Christopher Jost'}
                />
                <meta
                    name="keywords"
                    content={
                        props.keywords ??
                        "Jost Christopher, développeur fullstack, développeur react, next.js, nestjs, react native, typescript, node.js, prisma, postgresql, intégration ia, ia générative, développement assisté par ia, openai, application web, application mobile, seo, montpellier"
                    }
                />
                <link
                    rel="canonical"
                    href={props.og_url ?? 'https://www.christopher-jost.fr/'}
                />
                <meta
                    property="og:title"
                    content={
                        props.og_title ??
                        'Christopher Jost | Développeur FullStack React & IA'
                    }
                />
                <meta
                    property="og:description"
                    content={
                        props.og_description ??
                        "Je conçois des applications web et mobiles complètes : marketplaces Next.js / NestJS, apps React Native, fonctionnalités IA. L'IA fait partie de mon quotidien de développeur, conception, code, tests et itérations plus rapides."
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
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:site_name" content="Christopher Jost" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={
                        props.og_title ??
                        'Christopher Jost | Développeur FullStack React & IA'
                    }
                />
                <meta
                    name="twitter:description"
                    content={
                        props.og_description ??
                        "Applications web et mobiles complètes : Next.js, NestJS, React Native, fonctionnalités IA, et l'IA au quotidien dans mon workflow de dev."
                    }
                />
                <meta
                    name="twitter:image"
                    content={
                        props.og_image ??
                        'https://www.christopher-jost.fr/JC.ico'
                    }
                />
            </Helmet>
        </>
    );
}

export default MetaTags;
