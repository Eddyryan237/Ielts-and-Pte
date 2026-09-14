import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = () =>
{
    const [activeId, setActiveId] = useState(1)

    const faqs = [
        {
            id: 1,
            question: 'What is IELTS?',
            answer: 'IELTS is an English proficiency test used by universities, employers, and migration authorities to assess listening, reading, writing, and speaking skills. It is widely recognised for academic and migration pathways.',
        },
        {
            id: 2,
            question: 'What is PTE?',
            answer: 'PTE Academic is a computer-based English test that evaluates communication skills in an integrated digital format. It is commonly used for academic admissions and other professional or migration requirements.',
        },
        {
            id: 3,
            question: 'What is the difference between IELTS and PTE?',
            answer: 'IELTS is known for a traditional test format, while PTE is usually delivered digitally with integrated tasks. The best choice depends on your comfort with the exam format, your target score, and the exact requirements of your institution or program.',
        },
        {
            id: 4,
            question: 'How does the service work?',
            answer: 'The process begins with understanding your goals, timeline, and exam requirements. We then provide practical guidance, answer your questions, and help you move toward the next step with a clearer plan.',
        },
        {
            id: 5,
            question: 'Can I get support for both IELTS and PTE?',
            answer: 'Yes. We provide guidance for both IELTS and PTE planning, allowing you to compare your options and choose the route that fits your academic or migration needs best.',
        },
        {
            id: 6,
            question: 'What should I know before taking an English proficiency test?',
            answer: 'Before booking a test, it helps to confirm the score requirement, understand the exam format, and create a preparation plan that focuses on your weak areas. Clear preparation reduces stress and improves performance.',
        },
    ]

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <section id="faq" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">Frequently Asked Questions</h2>
                    <p className="section-subtitle mx-auto">
                        Everything you need to know about our service
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    {faqs.map((faq) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="glass-effect rounded-lg overflow-hidden hover:border-orange-500 hover:border-opacity-30 transition-all duration-300"
                        >
                            {/* Question */}
                            <button
                                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                                className="w-full px-6 py-4 md:px-8 md:py-6 flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors duration-200"
                            >
                                <span className="text-left font-semibold text-white text-sm md:text-base">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-4 flex-shrink-0"
                                >
                                    {activeId === faq.id ? (
                                        <FiMinus className="text-orange-400 text-xl" />
                                    ) : (
                                        <FiPlus className="text-orange-400 text-xl" />
                                    )}
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {activeId === faq.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t border-white border-opacity-10"
                                    >
                                        <p className="px-6 py-4 md:px-8 md:py-6 text-muted leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

                {/* Additional Help */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center glass-effect p-8 rounded-lg border-orange-500 border-opacity-20"
                >
                    <h3 className="text-xl font-bold mb-2 text-white">Still have questions?</h3>
                    <p className="text-muted mb-6">
                        Our support team is ready to help. Contact us anytime!
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://wa.me/61489926983?text=Hi%20I%20have%20questions%20about%20your%20service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block btn-primary"
                    >
                        Chat with us on WhatsApp
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ
