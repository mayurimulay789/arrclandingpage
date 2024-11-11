'use client'

import { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
import { useModal } from './ModalProvider'; // Import the modal context

export default function Contact() {
  const { openModal } = useModal(); // Access the openModal function

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7098989191 ', 'ARRC Technology')
  }

  
  

  return (
    <div className="relative max-w-4xl p-6 mx-auto mb-5 rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-green-400 md:p-7 lg:p-8">
      <h2 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Contact Us</h2>
      <p className="mb-6 text-lg text-center text-white md:text-xl">Get in touch with us for any queries or support.</p>
      
      <Button type="primary" onClick={openModal} className="w-full mb-4 md:w-auto">
        Send Inquiry
      </Button>

      
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
        <Button
          onClick={handleWhatsAppClick}
          type="primary"
          shape="circle"
          icon={<MessageOutlined />}
          style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
          size="large"
        />
      </div>
    </div>
  )
}
