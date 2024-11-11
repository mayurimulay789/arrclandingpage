// FAQSection.js
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "When does the next batch of courses start?",
    answer: "Our next batch of courses starts on November 1, 2024. Early bird registrations are open now!"
  },
  {
    question: "What is the duration of the courses?",
    answer: "Course durations vary from 3 to 6 months, depending on the program you choose."
  },
  {
    question: "Do you offer job placement assistance?",
    answer: "Yes, we offer 100% job placement assistance to all our students who successfully complete the course."
  },
  {
    question: "Are the courses live or pre-recorded?",
    answer: "We offer a blend of live online classes and pre-recorded sessions for flexibility."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course."
  },
  {
    question: "Can I switch between different courses?",
    answer: "Yes, you can switch between courses within the first 14 days of starting your program."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null) // Removed type annotation

  return (
    <div className="bg-[#111827] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-8 text-4xl font-extrabold text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="overflow-hidden bg-white rounded-lg bg-opacity-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
