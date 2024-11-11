'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useModal } from './ModalProvider'; // Import the modal context

export default function About() {
  const { openModal } = useModal(); // Access the openModal function

  return (
    <div className="bg-[rgb(30,27,46)] text-white overflow-hidden">
      <div className="container px-4 py-4 mx-auto md:py-20">
        <div className="flex flex-col items-center md:flex-row">
          {/* Left side - Illustration */}
          <motion.div
            className="w-full mb-6 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
              <motion.img
                src="https://digikull.com/_next/static/media/Web%20development%20with%20front%20end%20development.6860147d.webp"
                alt="Student learning online"
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/2 md:pl-8 md:items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-[#FF3294] text-lg font-semibold mb-1 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.h1
              className="mb-4 text-2xl font-bold text-center md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Welcome to the ARRC Technology Learning Center
            </motion.h1>
            <motion.p
              className="mb-4 text-center text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              At ARRC Technology, we empower learners to enhance their skills in the rapidly evolving world of technology. Our platform offers a wide range of courses designed to keep you at the forefront of the industry.
            </motion.p>
            <motion.p
              className="mb-4 text-center text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We are so confident in our training that we offer a 100% Job Placement Guarantee or 100% Your Money Back. If you don’t land a job in the IT field, we’ll refund your fees.
            </motion.p>
            {['Explore a variety of fresh educational technologies', 'Engage with hands-on projects and real-world scenarios', 'Join a community of like-minded learners and professionals'].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-3 text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <CheckCircle2 className="text-[#6C5CE7] mr-2" />
                <span>{item}</span>
              </motion.div>
            ))}
            <div className="flex flex-col items-center mt-4 space-x-0 space-y-3 md:flex-row md:space-x-3 md:space-y-0">
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-[#6C5CE7] to-[#FFCC00] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
>
                Register Here
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
