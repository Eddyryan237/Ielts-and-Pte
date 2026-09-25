import React from 'react';
import InfoPage from './InfoPage';

export default function BuyCertificateWithoutExamsPage() {
    return (
        <InfoPage
            title="Buy Certificate Without Exams"
            description="Explore trusted support to buy certificate without exams for IELTS or PTE with secure guidance, clear communication, and practical next steps."
            keywords="buy certificate without exams, IELTS certificate without exam, PTE certificate without exam, certificate support"
            badge="Certificate Support"
            intro="If you need an IELTS or PTE certificate quickly and do not want to go through a long exam preparation process, our team can help you understand the right support path and the most practical next steps. We focus on straightforward communication and efficient guidance for clients who need a fast solution."
            sections={[
                {
                    heading: 'How the process works',
                    body: 'We begin with your goals, timeline, and required certificate type. From there, we discuss the best route for your situation and give direct guidance so you know exactly what to do next without confusion.'
                },
                {
                    heading: 'Why clients choose this route',
                    body: 'Some people need a certificate for academic, migration, or professional goals and want a faster, simpler route than traditional exam preparation. This option is useful when speed, clarity, and reliable communication matter most.'
                },
                {
                    heading: 'Secure and practical support',
                    body: 'Our process is designed to be clear, confidential, and easy to follow. We keep communication direct and practical so you can move forward with confidence and avoid unnecessary delays.'
                }
            ]}
            relatedLinks={[
                { label: 'IELTS services', href: '/ielts' },
                { label: 'PTE services', href: '/pte' },
                { label: 'Services overview', href: '/services' },
                { label: 'Contact', href: '/contact' }
            ]}
            ctaLabel="Get certificate support"
            ctaHref="https://wa.me/61489926983?text=Hi%20I%20want%20to%20buy%20certificate%20without%20exams"
        />
    );
}
