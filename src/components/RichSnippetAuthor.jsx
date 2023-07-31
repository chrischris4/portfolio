import React from 'react';
import { Helmet } from 'react-helmet-async';

function RichSnippetAuthor() {
    const jsonLdData = {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jost Christopher',
        url: 'https://chrischris4.github.io/portfolio/',
        image: 'https://chrischris4.github.io/portfolio/JC.ico',
        sameAs: [
            'https://www.linkedin.com/in/christopher-jost-888b75195/',
            'https://github.com/chrischris4',
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'Openclassrooms',
        },
        jobTitle: 'Développeur FullStack',
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdData)}
                </script>
            </Helmet>
            <div className="rich"></div>
        </>
    );
}

export default RichSnippetAuthor;
