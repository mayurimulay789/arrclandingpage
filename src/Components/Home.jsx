import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Plane } from 'lucide-react';
import { useModal } from './ModalProvider';

export default function Home() {
  const { openModal } = useModal();
  const navItems = ['Home', 'Courses', 'Placements', 'About Us', 'Contact'];

  return (
    <div className="bg-[#1e1b2e] relative">
      <div className="relative overflow-hidden">
        <div className="container px-4 mx-auto pb-15 sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <h2 className="py-5 mb-2 text-sm font-semibold text-center text-white text-primary md:text-left">
                Unlock Your Future with Our IT Courses!
              </h2>
              <h1 className="mb-4 text-2xl font-bold text-center text-white sm:text-4xl md:text-5xl md:text-left">
                Transform Your Career with Our Cutting-Edge IT Courses!
              </h1>
              <p className="mb-6 text-lg text-center text-gray-300 sm:text-xl md:text-left">
                Unlock Your Potential and join the ARRC Technology! Whether you're a newbie or looking to upgrade your skills, our expert-led courses are designed just for you.
              </p>
              <p className="mb-6 text-lg text-center text-gray-300 sm:text-xl md:text-left">
                Choose from Full Stack Development, Python, Digital Marketing, AI/ML, Cloud Computing, and Data Science. Start your journey to a successful tech career with us!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#4b4c72' }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="px-6 py-3 mr-4 font-bold text-center text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600"
              >
                Enroll Now
              </motion.button>

              <div className="flex flex-wrap items-center mt-6">
                <div className="flex mr-2 -space-x-2">
                  {/* Student Images */}
                  {[
                    'https://img.freepik.com/premium-photo/young-indian-boy-wearing-blue-shirt-looking-smart-against-brown-background_251136-11114.jpg',
                    'https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920',
                    'https://i.pinimg.com/originals/a6/82/f0/a682f04aaa23b09cf5c3ce162fd7fc79.jpg',
                    'https://cmseducationorg.wordpress.com/wp-content/uploads/2020/08/ishita-niwas-gn-ii.jpg',
                  ].map((imageUrl, i) => (
                    <img
                      key={i}
                      src={imageUrl}
                      alt={`Student ${i + 1}`}
                      className="object-cover w-10 h-10 border-2 border-white rounded-full"
                    />
                  ))}
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <span className="mr-2 text-2xl font-bold text-white">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                        fill={i === 4 ? 'url(#halfStar)' : (i < 4 ? 'currentColor' : 'none')}
                      />
                    ))}
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="50%" stopColor="#FBBF24" />
                          <stop offset="50%" stopColor="#9CA3AF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="ml-2 text-sm text-gray-300">Engaged Students</span>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img
                  src="https://geeksui.codescandy.com/geeks/assets/images/landing-immigration/college-student-holding-laptop-pointing-right.png"
                  alt="Student"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute p-2 bg-white rounded-full shadow-lg top-4 left-4"
              >
                <Plane className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
