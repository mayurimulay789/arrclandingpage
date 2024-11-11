import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

function EnrollNowModal({ isOpen, onClose, buttonLabel }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    course: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbwcDypDuyTapeZJFPlzb4XFSG82CTSrELKs3i6vyWBQzlm6LW1zQ532K6RHaeuHJz4YgA/exec";
    try {
      await fetch(Sheet_Url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
        mode: "no-cors",
      });

      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: '',
        course: ''
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-2xl"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <div className="relative">
              <img 
                src="https://www.shutterstock.com/image-photo/young-asian-indian-college-students-600nw-1843680601.jpg" 
                alt="Enrollment Banner" 
                className="object-cover w-full h-40"
              />
              <div className="absolute inset-0"></div>
            </div>
            <div className="relative px-6 pt-4 pb-8">
              <motion.button
                className="absolute text-gray-500 top-2 right-2 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">Enroll Now</h2>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    Your response was submitted successfully!
                  </motion.div>
                )}
              </AnimatePresence>
              <form onSubmit={handleSubmit} className="space-y-3">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="relative">
                    <label className="block mb-1 text-xs font-medium text-gray-700" htmlFor={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    {key === 'course' ? (
                      <select
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-sm text-gray-700 transition duration-200 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a course</option>
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Python">Python</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Data Science">Data Science</option>
                      </select>
                    ) : (
                      <input
                        type={key === 'email' ? 'email' : key === 'phoneNumber' ? 'tel' : 'text'}
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        required
                        className="w-full p-2 text-sm text-gray-700 transition duration-200 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Enter your ${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim().toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}
                <motion.button 
                  type="submit" 
                  className="w-full p-2 text-sm font-medium text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {buttonLabel || 'Submit'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EnrollNowModal;