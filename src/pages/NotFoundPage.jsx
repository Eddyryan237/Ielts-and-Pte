import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage()
{
    return (
        <>
            <SEOHead
                title="Page Not Found"
                description="The page you are looking for could not be found. Explore the IELTSPTEPRO homepage, services, FAQ, or contact page instead."
                keywords="404 page, IELTS page not found, PTE page not found"
                canonical="https://ieltsptepro.com/"
                robots="noindex, follow"
            />
            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-10 text-center">
                    <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">404</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Page not found</h1>
                    <p className="text-lg text-muted leading-relaxed mb-8">
                        The page you requested may have moved or no longer exists. You can continue exploring our main IELTS and PTE resources instead.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/" className="btn-primary">Home</Link>
                        <Link to="/ielts" className="btn-secondary">IELTS</Link>
                        <Link to="/pte" className="btn-secondary">PTE</Link>
                        <Link to="/services" className="btn-secondary">Services</Link>
                        <Link to="/faq" className="btn-secondary">FAQ</Link>
                        <Link to="/contact" className="btn-secondary">Contact</Link>
                    </div>
                </div>
            </main>
        </>
    );
}