import React from 'react';
import { Helmet } from 'react-helmet-async';

function RichSnippetAuthor() {
    const jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Christopher Jost',
        url: 'https://www.christopher-jost.fr/',
        image: 'https://www.christopher-jost.fr/JC.ico',
        sameAs: [
            'https://www.linkedin.com/in/christopher-jost-888b75195/',
            'https://github.com/chrischris4',
        ],
        jobTitle: 'Développeur FullStack',
        description:
            "Développeur FullStack spécialisé dans les applications web et mobiles production-ready : React, Next.js, NestJS, React Native. J'intègre l'IA dans mes produits et l'utilise au quotidien dans mon workflow de développement.",
        knowsAbout: [
            'React',
            'Next.js',
            'NestJS',
            'React Native',
            'TypeScript',
            'Node.js',
            'Prisma',
            'PostgreSQL',
            'MongoDB',
            'Docker',
            "Intégration d'IA",
            'IA générative',
            'Développement assisté par IA',
            'Prompt engineering',
            'OpenAI GPT',
            'SEO',
        ],
        alumniOf: [
            { '@type': 'EducationalOrganization', name: 'OpenClassrooms' },
            { '@type': 'EducationalOrganization', name: 'ADRAR' },
        ],
        areaServed: {
            '@type': 'Place',
            name: 'Montpellier, Hérault, France',
        },
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdData)}
                </script>
            </Helmet>
        </>
    );
}

export default RichSnippetAuthor;
