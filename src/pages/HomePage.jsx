import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import Advantages from '../components/Advantages';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';

export default function HomePage()
{
    return (
        <>
            <SEOHead
                title="Buy a Certificate Online | IELTS & PTE Certificates Without Exams"
                description="Buy a certificate online with fast IELTS and PTE support, secure guidance, and practical certificate solutions without exams for study, migration, and work goals."
                keywords="buy a certificate online, buy certificate without exams, IELTS certificate, PTE certificate, buy IELTS certificate, buy PTE certificate"
            />
            <main className="bg-secondary min-h-screen">
                <Hero />
                <section id="buy-certificate-without-exams" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="glass-effect rounded-3xl p-8 md:p-10">
                        <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">Fast certificate support</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Buy a certificate online without exams</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-muted leading-relaxed">
                            <p>
                                If you need an IELTS or PTE certificate quickly, our support team helps you move fast with clear guidance, realistic timelines, and direct communication. We focus on making the process simple for clients who want to buy a certificate online with confidence.
                            </p>
                            <p>
                                Whether your goal is university entry, migration, or professional recognition, we make it easier to compare your options and choose the right certificate support route without long delays, confusion, or unnecessary waiting.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="glass-effect rounded-3xl p-8 md:p-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Why students choose IELTS and PTE guidance</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-muted leading-relaxed">
                            <p>
                                IELTS and PTE are both important English proficiency tests used for university admissions, migration pathways, and professional recognition. The right exam depends on the specific requirements of your destination, your comfort with the test format, and the score level you need to reach.
                            </p>
                            <p>
                                Good preparation is not just about memorising answers. It means understanding the format, practising under realistic conditions, and identifying where you need stronger skills in speaking, writing, reading, or listening. With clear guidance, students can build a focused plan that reduces stress and improves their confidence.
                            </p>
                        </div>
                        <ul className="mt-8 space-y-3 text-muted">
                            <li>• Understand which test fits your academic or migration goals.</li>
                            <li>• Learn the core structure and expectations of IELTS and PTE.</li>
                            <li>• Prepare with practical next steps instead of guessing.</li>
                            <li>• Speak with a team that can guide you through your options clearly.</li>
                        </ul>
                    </div>
                </section>
                <SocialProof />
                <Services />
                <WhyChooseUs />
                <HowItWorks />
                <Comparison />
                <Advantages />
                <Statistics />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
        </>
    );
}
