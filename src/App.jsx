import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import NotFoundPage from './pages/NotFoundPage'
import ServicePage from './pages/ServicePage'
import UpgradeScoresPage from './pages/UpgradeScoresPage'
import BuyPteQuestionsPage from './pages/BuyPteQuestionsPage'
import ArticlesHubPage from './pages/ArticlesHubPage'
import ArticlePage from './pages/ArticlePage'
import './index.css'

function App()
{
    return (
        <>
            <div className="bg-secondary min-h-screen">
                <Navbar />
                <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route
                    path="/ielts"
                    element={
                        <InfoPage
                            title="IELTS Services and Information"
                            description="Learn about IELTS preparation, test information, common questions, and expert guidance for students planning study, migration, or career goals."
                            keywords="IELTS services, IELTS preparation, IELTS information, IELTS test guide"
                            badge="IELTS"
                            intro="IELTS is one of the most widely recognised English language tests for study, migration, and professional pathways. Whether you are preparing for university admissions or a new visa process, understanding the test format and planning early can improve confidence and outcomes."
                            sections={[
                                {
                                    heading: 'What IELTS measures',
                                    body: 'The IELTS test assesses listening, reading, writing, and speaking. It is designed to measure how well a learner can use English in practical situations, from academic study to everyday communication. Many institutions and migration programs use IELTS results as part of their eligibility requirements.'
                                },
                                {
                                    heading: 'How IELTS preparation works',
                                    body: 'Strong IELTS preparation usually combines practice tests, targeted skill development, feedback, and time management. Students often focus on speaking fluency, writing structure, reading speed, and listening accuracy. A realistic preparation plan can make a major difference in confidence and performance.'
                                },
                                {
                                    heading: 'Why students choose guided support',
                                    body: 'Guidance helps candidates understand the structure of the exam, identify weak areas, and practise strategically. That can reduce confusion and improve efficiency before the test day. Good support also helps students stay motivated and focused on the areas that matter most.'
                                }
                            ]}
                            relatedLinks={[
                                { label: 'PTE services', href: '/pte' },
                                { label: 'IELTS vs PTE', href: '/articles/pte-vs-ielts' },
                                { label: 'IELTS preparation guide', href: '/articles/ielts-preparation-guide' }
                            ]}
                        />
                    }
                />
                <Route
                    path="/pte"
                    element={
                        <InfoPage
                            title="PTE Services and Information"
                            description="Explore PTE test information, preparation guidance, score understanding, and practical support for students preparing for English proficiency requirements."
                            keywords="PTE services, PTE preparation, PTE test information, PTE score information"
                            badge="PTE"
                            intro="PTE Academic is a computer-based English proficiency test that focuses on real-life communication in academic and professional settings. It is widely used by institutions and organizations that need a quick, digital assessment of English capability."
                            sections={[
                                {
                                    heading: 'What makes PTE different',
                                    body: 'PTE is typically delivered in a digital format with integrated tasks that evaluate speaking, writing, reading, and listening in a single system. Many students prefer it because it feels more structured and time-driven, especially if they feel comfortable using a computer-based format.'
                                },
                                {
                                    heading: 'How to prepare well',
                                    body: 'PTE preparation usually benefits from timed practice, familiarity with task types, and regular review of weak areas. Practising under realistic conditions helps candidates improve pacing, response quality, and overall confidence before the official test day.'
                                },
                                {
                                    heading: 'Planning for admissions and migration',
                                    body: 'Students often prepare for PTE because they need a test result for university entry, migration, or professional requirements. Understanding score expectations and your target timeline is essential for a smoother application process.'
                                }
                            ]}
                            relatedLinks={[
                                { label: 'IELTS services', href: '/ielts' },
                                { label: 'Understanding PTE scores', href: '/articles/understanding-pte-scores' },
                                { label: 'PTE vs IELTS', href: '/articles/pte-vs-ielts' }
                            ]}
                        />
                    }
                />
                <Route
                    path="/services"
                    element={
                        <InfoPage
                            title="IELTS and PTE Services"
                            description="Explore IELTS and PTE services, support options, and practical guidance for students preparing for academic and migration goals."
                            keywords="IELTS services, PTE services, IELTS and PTE support, English test guidance"
                            badge="Services"
                            intro="Our support is designed to help students understand their options, prepare strategically, and move forward with clear information. We focus on practical guidance, transparent communication, and a simple process that makes it easier to take the next step."
                            sections={[
                                {
                                    heading: 'What we help with',
                                    body: 'We support students who need assistance with IELTS and PTE planning, score-related guidance, preparation resources, and service-related questions. Our aim is to provide straightforward support and relevant next steps without unnecessary confusion.'
                                },
                                {
                                    heading: 'A simple process',
                                    body: 'Clients start by sharing their goal, timeline, and exam-related questions. From there, they receive tailored guidance, practical recommendations, and direct support on the best path forward for their situation.'
                                },
                                {
                                    heading: 'Why clear guidance matters',
                                    body: 'When students understand the exam, the score requirements, and the process behind the decision, they feel more confident and prepared. That clarity often reduces stress and improves the overall experience from preparation through application.'
                                }
                            ]}
                            relatedLinks={[
                                { label: 'IELTS services', href: '/ielts' },
                                { label: 'PTE services', href: '/pte' },
                                { label: 'Upgrade scores', href: '/upgrade-scores' }
                            ]}
                        />
                    }
                />
                <Route
                    path="/faq"
                    element={
                        <InfoPage
                            title="IELTS and PTE Frequently Asked Questions"
                            description="Find practical answers about IELTS, PTE, preparation, score expectations, and how to get the right guidance for your next steps."
                            keywords="IELTS FAQ, PTE FAQ, IELTS questions, PTE questions, IELTS and PTE guidance"
                            badge="FAQ"
                            intro="Students often ask similar questions before booking a test, choosing a preparation route, or deciding which English credential fits their goals. Below are practical answers that help clarify the process and reduce uncertainty."
                            sections={[
                                {
                                    heading: 'What is the difference between IELTS and PTE?',
                                    body: 'IELTS is often known for its traditional format and widely recognised academic and migration use, while PTE is usually delivered digitally and focuses on integrated tasks. The best option depends on your comfort level, test goals, and application requirements.'
                                },
                                {
                                    heading: 'How do I choose the right exam?',
                                    body: 'Start by checking the exact requirements of your university, employer, or migration authority. Then compare the exam format, your study pattern, and the score target you need. A well-informed choice commonly leads to better preparation and stronger outcomes.'
                                },
                                {
                                    heading: 'Can I get help with preparation strategy?',
                                    body: 'Yes. Many students benefit from clear guidance on where to focus their effort, how to practise for weak sections, and how to approach test day with more confidence. Practical support can make preparation feel more structured and manageable.'
                                }
                            ]}
                            relatedLinks={[
                                { label: 'IELTS services', href: '/ielts' },
                                { label: 'PTE services', href: '/pte' },
                                { label: 'Articles hub', href: '/articles' }
                            ]}
                        />
                    }
                />
                <Route
                    path="/about"
                    element={
                        <InfoPage
                            title="About IELTSPTEPRO"
                            description="Learn more about IELTSPTEPRO, our focus on IELTS and PTE guidance, and the practical support we provide to students and applicants."
                            keywords="about IELTSPTEPRO, IELTS and PTE support, exam guidance company"
                            badge="About"
                            intro="IELTSPTEPRO helps students and applicants understand the path to IELTS and PTE success through clear guidance, useful information, and direct support. We believe reliable information and practical next steps are essential when planning for education, migration, or professional goals."
                            sections={[
                                {
                                    heading: 'Our approach',
                                    body: 'We focus on helpful, honest guidance rather than shortcuts or vague promises. Our process is built around clear communication, useful information, and tailored support that helps students make informed decisions about their next steps.'
                                },
                                {
                                    heading: 'What we support',
                                    body: 'This includes IELTS and PTE information, preparation planning, score-related questions, and general guidance on how to approach the process confidently. We are committed to keeping the conversation practical, relevant, and easy to understand.'
                                },
                                {
                                    heading: 'A trustworthy experience',
                                    body: 'Students value straightforward responses, realistic timelines, and support that helps them build clarity before acting. We work to create that experience through responsive communication and educational resources that are genuinely useful.'
                                }
                            ]}
                            relatedLinks={[
                                { label: 'Services', href: '/services' },
                                { label: 'Contact', href: '/contact' },
                                { label: 'FAQ', href: '/faq' }
                            ]}
                        />
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <InfoPage
                            title="Contact IELTSPTEPRO"
                            description="Contact IELTSPTEPRO for IELTS and PTE guidance, service information, and direct WhatsApp support for your next steps."
                            keywords="contact IELTS PTE support, WhatsApp IELTS support, PTE guidance contact"
                            badge="Contact"
                            intro="If you are planning IELTS or PTE preparation, have questions about your score goals, or want to understand the next steps, our team is ready to help. Reach out through WhatsApp for a quick and clear conversation."
                            sections={[
                                {
                                    heading: 'How to get in touch',
                                    body: 'You can contact us through WhatsApp and share your goals, timeline, and questions. This is often the fastest way to receive clear guidance and practical next steps for your exam planning or preparation needs.'
                                },
                                {
                                    heading: 'What to include in your message',
                                    body: 'To help us respond efficiently, include the exam you are interested in, your target score or timeline, and any requirements that matter for your application or planning. The more context you share, the easier it is to give useful guidance.'
                                },
                                {
                                    heading: 'Fast response support',
                                    body: 'We aim to provide quick support for students who need a straightforward answer or a clearer direction. Clear communication is especially helpful when your timeline is important or your target score is specific.'
                                }
                            ]}
                            relatedLinks={[
                                { label: 'IELTS services', href: '/ielts' },
                                { label: 'PTE services', href: '/pte' },
                                { label: 'FAQ', href: '/faq' }
                            ]}
                        />
                    }
                />
                <Route
                    path="/services/ielts"
                    element={
                        <ServicePage
                            title="IELTS Certificate Services"
                            intro="Get trusted IELTS certificate support with fast, secure guidance for students preparing for university, migration, and professional goals."
                            description="Buy or learn about IELTS certificate services, trusted support, and fast assistance for students seeking secure exam-related guidance."
                            keywords="IELTS certificate, buy IELTS certificate, IELTS support, IELTS score upgrade"
                            highlights={[
                                'Fast communication and transparent next steps',
                                'Support for students looking for credible IELTS certificate solutions',
                                'Helpful guidance for documentation, timelines, and planning',
                            ]}
                            processSteps={[
                                'Share your IELTS need and preferred timeline.',
                                'Receive clear guidance and a tailored support plan.',
                                'Complete the process through secure WhatsApp communication.',
                            ]}
                            ctaLabel="Start IELTS support"
                            ctaHref="https://wa.me/61489926983?text=Hi%20I%20want%20help%20with%20IELTS%20certificate%20services"
                        />
                    }
                />
                <Route
                    path="/services/pte"
                    element={
                        <ServicePage
                            title="PTE Certificate Services"
                            intro="Choose trusted PTE certificate support with clear communication, fast follow-up, and guidance tailored to your goals."
                            description="Explore PTE certificate services, score support, and secure guidance for students who need reliable PTE assistance."
                            keywords="PTE certificate, buy PTE certificate, PTE support, PTE score upgrade"
                            highlights={[
                                'Clear support for students seeking PTE certificate guidance',
                                'Fast, discreet communication through WhatsApp',
                                'Tailored advice for your target score and timeline',
                            ]}
                            processSteps={[
                                'Tell us about your PTE goal and timeline.',
                                'Receive a tailored plan and support steps.',
                                'Move forward with secure, direct communication.',
                            ]}
                            ctaLabel="Start PTE support"
                            ctaHref="https://wa.me/61489926983?text=Hi%20I%20want%20help%20with%20PTE%20certificate%20services"
                        />
                    }
                />
                <Route
                    path="/services/bundle"
                    element={
                        <ServicePage
                            title="Express IELTS & PTE Bundle"
                            intro="Get combined support for both IELTS and PTE needs with a streamlined process designed for speed and convenience."
                            description="Explore the express IELTS and PTE bundle for students who want combined support and practical guidance in one place."
                            keywords="IELTS and PTE bundle, PTE and IELTS support, buy IELTS and PTE services"
                            highlights={[
                                'Support for both IELTS and PTE requirements',
                                'Fast response and organised guidance',
                                'Helpful for students managing multiple application needs',
                            ]}
                            processSteps={[
                                'Tell us what you need from both exams.',
                                'Receive combined guidance and practical next steps.',
                                'Continue through secure WhatsApp support.',
                            ]}
                            ctaLabel="Ask about the bundle"
                            ctaHref="https://wa.me/61489926983?text=Hi%20I%20want%20to%20know%20more%20about%20the%20IELTS%20and%20PTE%20bundle"
                        />
                    }
                />
                <Route path="/upgrade-scores" element={<UpgradeScoresPage />} />
                <Route path="/buy-pte-questions-and-answers" element={<BuyPteQuestionsPage />} />
                <Route path="/articles" element={<ArticlesHubPage />} />
                <Route path="/articles/how-to-verify-a-pte-certificate" element={<ArticlePage title="How to Verify a PTE Certificate" description="Learn how to verify a PTE certificate and understand the right checks to perform before trusting it." keywords="verify PTE certificate, PTE certificate verification, check PTE certificate" intro="A PTE certificate can be an important document for admissions or professional requirements, so it is essential to understand how to verify it properly and what signs to look for." sections={[{ heading: 'Why verification matters', body: 'Verification helps protect you from confusion, incorrect documentation, or reliance on records that may not match official standards. It is especially important when a document is used for admissions, migration, or employment purposes.' }, { heading: 'What to check', body: 'Review the candidate details, test date, score report references, and any official verification steps provided by the testing body. If you are unsure, check with the official organisation or request a direct confirmation channel.' }, { heading: 'Best practice', body: 'Keep copies of the certificate, score report, and communication records. If you need guide or support, our team can help you understand the right steps to take and provide practical next actions.' }]} relatedLinks={[{ label: 'PTE vs IELTS', href: '/articles/pte-vs-ielts' }, { label: 'Understanding PTE Scores', href: '/articles/understanding-pte-scores' }, { label: 'Everything About PTE Certificates', href: '/articles/everything-about-pte-certificates' }]} />} />
                <Route path="/articles/pte-vs-ielts" element={<ArticlePage title="PTE vs IELTS" description="Compare PTE and IELTS to understand the differences in format, scoring, and suitability for your goals." keywords="PTE vs IELTS, IELTS vs PTE, choose PTE or IELTS" intro="Both PTE and IELTS are widely used for study and migration, but they differ in format, scoring style, and the experience they offer to test-takers." sections={[{ heading: 'Key differences', body: 'IELTS is often known for its traditional speaking and writing format, while PTE is usually delivered in a computer-based format with integrated tasks. The way each exam is structured can affect comfort and preparation strategy.' }, { heading: 'Which one suits you better', body: 'Some candidates prefer the digital experience of PTE, while others feel more confident with the structure of IELTS. The best choice often depends on your goals, preparation style, and comfort with the test format.' }, { heading: 'Practical advice', body: 'Choose the exam that aligns with your strengths, preparation time, and the requirements of your target institution or migration pathway.' }]} relatedLinks={[{ label: 'Understanding PTE Scores', href: '/articles/understanding-pte-scores' }, { label: 'IELTS Preparation Guide', href: '/articles/ielts-preparation-guide' }, { label: 'Latest IELTS Updates', href: '/articles/latest-ielts-updates' }]} />} />
                <Route path="/articles/common-ielts-mistakes" element={<ArticlePage title="Common IELTS Mistakes" description="Avoid common IELTS mistakes with practical guidance on preparation, speaking, writing, and exam strategy." keywords="common IELTS mistakes, IELTS preparation mistakes, IELTS exam mistakes" intro="Many IELTS candidates lose marks because of small mistakes that are easy to fix with better preparation and awareness." sections={[{ heading: 'Speaking mistakes', body: 'Speaking too fast, giving memorised answers, or failing to fully answer the question can reduce clarity and fluency. It is better to respond naturally and stay focused on the task.' }, { heading: 'Writing mistakes', body: 'Weak structure, grammar slips, and not answering the prompt directly are common issues. Clear planning and simple paragraph structure can make a major difference.' }, { heading: 'Reading and listening mistakes', body: 'Missing instructions, rushing through questions, and ignoring keywords often lead to avoidable errors. Careful reading and active listening are essential.' }]} relatedLinks={[{ label: 'IELTS Preparation Guide', href: '/articles/ielts-preparation-guide' }, { label: 'Latest IELTS Updates', href: '/articles/latest-ielts-updates' }, { label: 'How to Verify a PTE Certificate', href: '/articles/how-to-verify-a-pte-certificate' }]} />} />
                <Route path="/articles/how-long-does-pte-take" element={<ArticlePage title="How Long Does PTE Take" description="Understand the timing, preparation expectations, and overall duration involved in PTE testing and result processing." keywords="how long does PTE take, PTE duration, PTE test time" intro="Candidates often want clarity around how long PTE takes, both in terms of the test itself and the overall experience from preparation to results." sections={[{ heading: 'Test duration', body: 'The test itself is completed in a structured format with several sections, and the full experience is designed to be completed within a defined period. Understanding the format helps reduce anxiety and improve pacing.' }, { heading: 'Preparation time', body: 'Preparation time varies depending on your current English level, familiarity with the test format, and target score. Some students need a few weeks while others benefit from a longer study plan.' }, { heading: 'Result timing', body: 'Result timing can vary depending on the test provider and region, so it is wise to check official timelines and plan accordingly.' }]} relatedLinks={[{ label: 'Understanding PTE Scores', href: '/articles/understanding-pte-scores' }, { label: 'Everything About PTE Certificates', href: '/articles/everything-about-pte-certificates' }, { label: 'PTE vs IELTS', href: '/articles/pte-vs-ielts' }]} />} />
                <Route path="/articles/everything-about-pte-certificates" element={<ArticlePage title="Everything About PTE Certificates" description="Learn what PTE certificates are, how they are used, and what students should understand before relying on them." keywords="PTE certificates, PTE certificate information, understand PTE certificate" intro="PTE certificates are often requested for academic, migration, or professional purposes, and understanding the context around them is important for students and applicants." sections={[{ heading: 'What they represent', body: 'A PTE certificate usually reflects a candidate’s performance in a test and is often used as part of admissions or application requirements. It is important to understand the purpose and context of the document.' }, { heading: 'What to keep in mind', body: 'Always check the details, keep your official documents organised, and understand the official process around any certificate-related requests or verification needs.' }, { heading: 'How to approach it', body: 'If you are uncertain about a certificate or need guidance on next steps, it is best to seek reliable information and professional support rather than relying on assumptions.' }]} relatedLinks={[{ label: 'How to Verify a PTE Certificate', href: '/articles/how-to-verify-a-pte-certificate' }, { label: 'Understanding PTE Scores', href: '/articles/understanding-pte-scores' }, { label: 'PTE vs IELTS', href: '/articles/pte-vs-ielts' }]} />} />
                <Route path="/articles/ielts-preparation-guide" element={<ArticlePage title="IELTS Preparation Guide" description="Follow a practical IELTS preparation guide covering planning, practice, and confidence-building steps." keywords="IELTS preparation guide, IELTS study plan, IELTS prep tips" intro="A good IELTS preparation plan can make a big difference in confidence, consistency, and performance on test day." sections={[{ heading: 'Build a plan', body: 'Break preparation into manageable weekly goals for listening, reading, writing, and speaking. Consistency matters more than trying to study everything at once.' }, { heading: 'Practice smart', body: 'Use timed practice sessions, review your mistakes, and focus on the areas that need the most improvement. This helps turn practice into measurable progress.' }, { heading: 'Stay calm on test day', body: 'Rest well, manage your time carefully, and review instructions before each section. Calm preparation often leads to stronger execution.' }]} relatedLinks={[{ label: 'Common IELTS Mistakes', href: '/articles/common-ielts-mistakes' }, { label: 'Latest IELTS Updates', href: '/articles/latest-ielts-updates' }, { label: 'PTE vs IELTS', href: '/articles/pte-vs-ielts' }]} />} />
                <Route path="/articles/understanding-pte-scores" element={<ArticlePage title="Understanding PTE Scores" description="Learn how PTE scores are interpreted and what they may mean for different university and migration requirements." keywords="understanding PTE scores, PTE score chart, PTE band score" intro="PTE scores can seem technical at first, but understanding the basics can make the process much easier for applicants and students." sections={[{ heading: 'How scoring works', body: 'PTE uses a scoring system that reflects performance across different skills. Familiarity with the structure can help you understand your results more clearly.' }, { heading: 'How to use your score', body: 'Your score may be used for admissions or other formal requirements, so it is useful to compare your result against the expectations of your target institution or organisation.' }, { heading: 'Next steps', body: 'If you are preparing for a new test or trying to improve your result, focus on targeted practice and practical planning based on your weak areas.' }]} relatedLinks={[{ label: 'How Long Does PTE Take', href: '/articles/how-long-does-pte-take' }, { label: 'Everything About PTE Certificates', href: '/articles/everything-about-pte-certificates' }, { label: 'PTE vs IELTS', href: '/articles/pte-vs-ielts' }]} />} />
                <Route path="/articles/latest-ielts-updates" element={<ArticlePage title="Latest IELTS Updates" description="Stay informed about recent IELTS changes, exam updates, and practical preparation considerations." keywords="latest IELTS updates, IELTS news, IELTS exam updates" intro="Keeping up with IELTS updates can help you avoid confusion and adapt your preparation strategy when new information becomes available." sections={[{ heading: 'Why updates matter', body: 'Changes in exam process, availability, or policy can affect planning. Staying informed helps you prepare with the latest information rather than outdated assumptions.' }, { heading: 'What to watch for', body: 'Pay attention to official announcements, test format changes, and any guidance that affects registration, preparation, or score use for your case.' }, { heading: 'Preparation tip', body: 'Use official sources when possible and plan ahead so that any changes do not create unnecessary stress.' }]} relatedLinks={[{ label: 'IELTS Preparation Guide', href: '/articles/ielts-preparation-guide' }, { label: 'Common IELTS Mistakes', href: '/articles/common-ielts-mistakes' }, { label: 'PTE vs IELTS', href: '/articles/pte-vs-ielts' }]} />} />
            </Routes>
            <Footer />
            <FloatingWhatsApp />
        </div>
        <TawkMessengerReact
            propertyId="6a6486c8d0a4321d44bdecbf"
            widgetId="1jucat0ft"
        />
        </>
    )
}

export default App
