import React from 'react';
import InfoPage from './InfoPage';

export default function CertifyProPage() {
    return (
        <InfoPage
            title="Certify Pro"
            description="Learn about Certify Pro support, IELTS and PTE guidance, and practical next steps for confident exam preparation and application planning."
            keywords="Certify Pro, IELTS services, PTE services, exam preparation support, English test guidance"
            badge="Certify Pro"
            intro="Certify Pro helps students and applicants understand the right IELTS or PTE path for their study, migration, or professional goals. We focus on trustworthy guidance, clear planning, and direct support when you want the next best step without confusion."
            sections={[
                {
                    heading: 'What Certify Pro supports',
                    body: 'Certify Pro is designed for people who need practical, reliable guidance around English proficiency tests, application timing, and preparation planning. It helps you compare your options and move forward with confidence.'
                },
                {
                    heading: 'Why students use it',
                    body: 'Many students want clarity on which test fits their goals, how to prepare well, and what the realistic next steps are. A clear pathway reduces uncertainty and helps people focus on the areas that matter most.'
                },
                {
                    heading: 'How we help',
                    body: 'Our team provides direct support through WhatsApp and helpful guidance about IELTS, PTE, study planning, score expectations, and service options. The goal is to make the process easier, faster, and more transparent.'
                }
            ]}
            relatedLinks={[
                { label: 'IELTS services', href: '/ielts' },
                { label: 'PTE services', href: '/pte' },
                { label: 'Services overview', href: '/services' },
                { label: 'Contact', href: '/contact' }
            ]}
            ctaLabel="Talk to Certify Pro"
            ctaHref="https://wa.me/61489926983?text=Hi%20I%20want%20to%20learn%20more%20about%20Certify%20Pro"
        />
    );
}
