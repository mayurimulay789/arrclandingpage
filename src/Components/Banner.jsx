'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Input, Modal } from 'antd'
import { useModal } from './ModalProvider'; // Import the modal context

export default function Banner() {
  const { openModal } = useModal(); // Access the openModal function

 

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl p-6 mx-auto rounded-lg shadow-lg bg-gradient-to-r from-orange-100 to-orange-200 sm:p-8 md:p-12"
    >
      <div className="flex flex-col items-center justify-between space-y-6 md:space-y-2 md:flex-row">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-2xl font-bold text-center text-orange-800 sm:text-3xl md:text-left"
          >
            Get 100% Job Assistance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-lg text-center text-orange-700 md:text-left"
          >
            & get placed in your dream company
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center mb-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:items-start"
          >
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span className="text-orange-700">Job Assistance</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-orange-700">3000+ Companies Tie-Ups</span>
            </div>
          </motion.div>
          <div className="flex justify-center md:justify-start">
            <Button type="primary"                
 className="bg-orange-500 hover:bg-orange-600"  onClick={openModal}>
              Enter Your Details Now
            </Button>
          </div>
          
                
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img 
            src="https://www.tops-int.com/images/placement-banner-mob.jpg" 
            alt="Happy student" 
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
