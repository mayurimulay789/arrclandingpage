'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import logo from '../assets/logo.png'
import { useModal } from './ModalProvider'; // Import the modal context

const features = [
  "100% Job Placement Guarantee",
  "Industry-Relevant Curriculum",
  "Hands-On Training with Real Projects",
  "Experienced Instructors from the Industry",
  "Personalized Career Counseling and Support"
]

export default function Placement() {
  const { openModal } = useModal(); // Access the openModal function

  return (
    <div className="bg-[#1e1b2e] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-center text-white sm:text-4xl">
              <span className="block text-cyan-400">Why Choose ARRC Technology?</span>
              <span className="block mt-1 text-gray-300">Your Future Starts Here<span className="text-cyan-400">!</span></span>
            </h2>
            <p className="max-w-3xl mt-3 text-lg text-center text-gray-400">
              At ARRC Technology, we provide a unique blend of theoretical knowledge and practical skills that are essential for your success in the IT industry. Our training programs are tailored to meet the needs of both beginners and experienced professionals, ensuring everyone can enhance their skills and advance their careers.
            </p>
            
            <div className="mt-6 text-center">
              <button                 onClick={openModal}

                className="inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Limited Slots Available! Register Now!
              </button>
            </div>
            <dl className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  <span className="ml-2 text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </dl>
            <div className="mt-8 text-center">
              <button                 onClick={openModal}

                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white transition duration-300 border border-transparent rounded-md bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600"
              >
                🌟 Join ARRC Technology and Secure Your Future! 🌟
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Replace these with your image components as needed */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden transform rounded-lg rotate-3"
              >
                <img src="https://img.freepik.com/premium-photo/group-young-indian-students-using-laptop-computer-smiling-camera_979520-50816.jpg" alt="Students collaborating" className="object-cover w-full h-full" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden transform rounded-lg -rotate-3"
              >
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/coaching.jpeg" alt="Student studying" className="object-cover w-full h-full" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden transform rounded-lg -rotate-3"
              >
                <img src="https://img.freepik.com/premium-photo/happy-young-asian-indian-college-students-reading-generative-ai_849906-11044.jpg" alt="Group discussion" className="object-cover w-full h-full" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden transform rounded-lg rotate-3"
              >
                <img src="https://img.freepik.com/premium-photo/group-indian-people-are-using-computer-laptop_53876-84315.jpg" alt="Students with laptops" className="object-cover w-full h-full" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-16 overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-center text-white">
              Transform Your Career with ARRC Technology's Cutting-Edge IT Courses!
            </h3>
            <div className="flex items-center justify-center mt-4">
             
              <p className="text-sm text-center text-gray-300">
                Our expert-led courses equip you with the skills needed to excel in today's competitive IT job market. Join now and unlock your potential!
              </p>
            </div>
            <p className="mt-4 text-sm text-center text-gray-300">
              **100% Job Placement Guarantee:** We're committed to your success. If you don't secure a job in the IT field within six months of completing your course, we'll refund your fees!
            </p>
            <div className="mt-5 text-center">
              <button onClick={openModal}
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-transform duration-300 ease-in-out transform border border-transparent rounded-md shadow-sm bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                🚀 Start Your Journey Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
