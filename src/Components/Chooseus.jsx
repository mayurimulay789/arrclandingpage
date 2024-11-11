'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, Briefcase, Rocket, Target, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { useModal } from './ModalProvider'; // Import the modal context

const reasons = [
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    title: "Learn from Industry Legends",
    description: "Get taught by seasoned pros who share real-world insights and insider tips."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-400" />,
    title: "Flexible Learning",
    description: "Access online classes anytime, anywhere – perfect for your busy schedule."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-green-400" />,
    title: "Real-World Projects",
    description: "Build a portfolio that wows employers with hands-on, practical experience."
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: "Boost Your Career",
    description: "Personalized job support, from resume revamps to interview prep, designed to fast-track your success."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-400" />,
    title: "100% Job Placement – Guaranteed!",
    description: "We promise a job placement after completion, or get 100% of your fee refunded."
  },
  {
    icon: <Target className="w-8 h-8 text-indigo-400" />,
    title: "Cutting-Edge Curriculum",
    description: "Stay ahead of the curve with the latest industry trends and tools."
  },
  {
    icon: <Users className="w-8 h-8 text-pink-400" />,
    title: "Community Support",
    description: "Join a network of like-minded learners and mentors to help you succeed."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
    title: "Skill Mastery",
    description: "Our courses are designed to make you an expert in your field, giving you the edge in today's job market."
  }
]

export default function Chooseus() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { openModal } = useModal(); // Access the openModal function

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open the modal on button click
  };

  return (
    <div className="px-4 py-10 text-white bg-gradient-to-br from-gray-900 to-gray-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-extrabold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Why Choose Our Courses?
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="p-6 transition-all duration-300 transform bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:shadow-xl perspective-1000"
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: 5, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-center">{reason.title}</h3>
              </div>
              <p className="mb-4 text-center text-gray-300">{reason.description}</p>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-center text-gray-400"
                >
                  Additional details about {reason.title} go here. This content expands when clicked.
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold">Get Your FREE Consultation!</h3>
          <p className="mb-8 text-xl">No risks, just results!</p>
          <motion.button
 onClick={openModal}           
  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 font-bold text-white transition-shadow duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl"
          >
            Secure your future with us: 100% job placement or your fees refunded! Your success is our guarantee!
          </motion.button>
        </div>
      </div>
    </div>
  );
}
