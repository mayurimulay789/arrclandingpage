// LimitedTimeOffer.tsx
'use client'

import { useEffect, useState } from 'react'
import { Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useModal } from './ModalProvider'; // Import the modal context

export default function Offer() {
  const { openModal } = useModal(); // Access the openModal function

  const [timeLeft, setTimeLeft] = useState({ minutes: 16, seconds: 20 })
  const [rating, setRating] = useState(0) // State for star rating
  const [hoverRating, setHoverRating] = useState(0) // State for hover effect

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          clearInterval(timer)
          return prev
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRatingClick = (value) => {
    setRating(value)
  }

  return (
    <div className="mt-12 text-center bg-[#111827] py-8 px-4 rounded-lg">
      <h3 className="mb-4 text-3xl font-bold text-yellow-300">Limited Time Offer!</h3>
      <p className="mb-4 text-xl text-white">
        Kickstart Your Career in IT with Our Premium Training and Placement Program!
      </p>
      <div className="flex items-center justify-center mb-4 space-x-4">
        <div className="text-4xl font-bold text-white">
          {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <Clock className="w-8 h-8 text-yellow-400 animate-pulse" />
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mb-4 space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-8 h-8 cursor-pointer transition-colors ${
              (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-400'
            }`}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRatingClick(star)}
          />
        ))}
      </div>
      <p className="mb-4 text-sm text-gray-300">
        {rating > 0 ? `You rated this offer ${rating} out of 5 stars.` : 'Rate this offer'}
      </p>

      <div className="flex flex-col items-center space-y-4">
        {/* Register Now Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={openModal}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-8 py-3 font-bold text-gray-900 transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 hover:shadow-xl"
        >
          Register Now - Free Demo Session
        </motion.button>

        {/* Register Before Deadline */}
        <div className="p-4 mt-4 text-sm text-center text-white rounded-md bg-gradient-to-r from-pink-500 to-purple-500">
          <p>
          No job placement? No problem! Get 100% of your fees back. Your success is our commitment!"
          </p>
        </div>
      </div>

      <div className="mt-8 text-white">
        <p className="mb-4 text-lg">✨ Join our IT Placement & Training Center to:</p>
        <ul className="mb-4 space-y-2">
          <li>🚀 Master the latest tech skills from industry experts.</li>
          <li>💼 Get guaranteed placement assistance with top IT companies.</li>
          <li>📈 Boost your career prospects with hands-on training and real-world projects.</li>
          <li>🌐 Network with peers and professionals in the tech industry.</li>
        </ul>
        <p className="text-lg">"Success is where preparation and opportunity meet."</p>
      </div>

      <div className="p-4 mt-4 text-white rounded-md bg-gradient-to-r from-gray-800 to-gray-600">
  <p className="mb-2">⚡ Limited spots available. Don’t miss out on this opportunity!</p>
  <p>👨‍🎓 Join over 10,000 successful students who’ve kickstarted their IT careers with us!</p>


  {/* Animated Button */}
  <motion.button
    whileHover={{ scale: 1.1, backgroundColor: "#f59e0b", color: "#111827" }} // Button scales up and changes color on hover
    whileTap={{ scale: 0.95 }} // Button scales down slightly on click
    initial={{ opacity: 0, y: 20 }} // Initial state before animation
    animate={{ opacity: 1, y: 0 }} // Animation to final state
    transition={{ duration: 0.5, ease: "easeInOut" }}
    onClick={openModal} // Smooth transition
    className="px-6 py-3 mt-4 font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-green-400 to-blue-500"
  >
    Grab Your Spot Now!
  </motion.button>
</div>

    </div>
  )
}
