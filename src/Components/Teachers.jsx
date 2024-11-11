'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useModal } from './ModalProvider'; // Import the modal context

const expertTeachers = [
    {
      name: 'Dr. Girish Pawar',
      role: 'Software Engineer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0fBWDQgYOiv_xBavJMBBXxWHZnIJY4Nvtg&s',
      experience: '10+ years of experience in software development and mentoring.',
      quote: 'Coding is not just a skill; it’s a way to bring ideas to life and solve real-world problems.',
    },
    {
      name: 'Prof. Akash Bhalekar',
      role: 'Data Scientist',
      image: 'https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg',
      experience: '15 years of experience in data analysis and machine learning.',
      quote: 'Data is the new oil; we must learn to refine it and extract insights that matter.',
    },
    {
      name: 'Ms. Danish Auti',
      role: 'Web Developer',
      image: 'https://i.pinimg.com/736x/ed/18/91/ed189191dc22169f0e6786a85f068616.jpg',
      experience: '8 years of experience in frontend and backend web development.',
      quote: 'Building websites is like crafting a digital experience; every detail matters.',
    },
    {
      name: 'Mr. Abhjit Khise',
      role: 'Cybersecurity Expert',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTisFL1Bf4WgPgRbbhsCWWZD2tUfGAkHpqoQ&s',
      experience: '12 years of experience in information security and risk management.',
      quote: 'Security is not a product but a process; we must be proactive in protecting our digital assets.',
    },
    {
      name: 'Ms. Charulata Deshmukh',
      role: 'Machine Learning Engineer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCZ8_n4OeIDphG4lcz61PzG1CWWPu1qtWhA&s',
      experience: '6 years of experience in artificial intelligence and machine learning.',
      quote: 'The future is AI; we must learn to harness its power responsibly.',
    },
    // New teachers with quotes
    {
      name: 'Dr. Girish Mehta',
      role: 'Blockchain Developer',
      image: 'https://i.pinimg.com/236x/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg',
      experience: '7 years of experience in blockchain technology and decentralized applications.',
      quote: 'Blockchain is more than just a technology; it’s a revolution in trust and transparency.',
    },
    {
      name: 'Mr. David Shinde',
      role: 'Mobile App Developer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkkvknfC2UhMGaAB0QjZtJQyQPIodxTzmFA&s',
      experience: '5 years of experience in creating user-friendly mobile applications.',
      quote: 'The best apps are not just built; they are crafted with care and attention to detail.',
    },
    {
      name: 'Ms. Sophia Gite',
      role: 'UX/UI Designer',
      image: 'https://msu-new-2023-ec2-ubuntu-unzip.s3.ap-south-1.amazonaws.com/asset/storage/staff_pic/Shweta_photo_passport_size.jpg',
      experience: '9 years of experience in user experience and interface design.',
      quote: 'Design is not just what it looks like; it’s how it works for the user.',
    },
    {
      name: 'Mr. Aniket Patil',
      role: 'DevOps Engineer',
      image: 'https://www.indianewscalling.com/images/article/article-139667.jpg',
      experience: '10 years of experience in automation and infrastructure management.',
      quote: 'DevOps is about culture and collaboration; it’s how we build better software together.',
    },
    {
      name: 'Ms. Sushma Shah',
      role: 'Cloud Architect',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      experience: '8 years of experience in cloud computing and architecture.',
      quote: 'Cloud computing is the future of IT; it enables us to innovate faster and scale smarter.',
    },
  ];
  

export default function Teachers() {
  const [currentTeacher, setCurrentTeacher] = useState(0);
  const { openModal } = useModal(); // Access the openModal function

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeacher((prev) => (prev + 1) % expertTeachers.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[#1E1B2E] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[#FF3294] text-lg font-semibold mb-2">OUR EXPERT TEACHERS</h2>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Meet Our Passionate Educators
          </h1>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            key={currentTeacher}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="blockquote-container"
          >
            <blockquote className="mb-4 text-xl italic">
              &ldquo;{expertTeachers[currentTeacher].quote}&rdquo;
            </blockquote>
            <div className="flex items-center mb-6">
              <img
                src={expertTeachers[currentTeacher].image}
                alt={expertTeachers[currentTeacher].name}
                width={80}
                height={80}
                className="mr-4 border-2 border-white rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">{expertTeachers[currentTeacher].name}</h3>
                <p className="text-[#FF3294]">{expertTeachers[currentTeacher].role}</p>
                <p className="text-sm">{expertTeachers[currentTeacher].experience}</p>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[400px] hidden lg:block">
            {expertTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                style={{
                  top: `${Math.random() * 70}%`,
                  left: `${Math.random() * 70}%`,
                  zIndex: Math.floor(Math.random() * 10),
                }}
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  width={60}
                  height={60}
                  className="border-2 border-white rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enroll Now Button */}
        <div className="mt-12 text-center">
          <motion.button
              onClick={openModal}

            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF3294] to-[#FFCC00] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF3294] mr-4"
          >
            Enroll Now !!! "Your path to success is guaranteed: 100% job placement or we refund your fees. Join us and thrive!"

          </motion.button>

          {/* New Contact Us Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFCC00] text-[#1E1B2E] font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFCC00]"
          >
            Secure your future with us: 100% job placement or your fees refunded! Your success is our guarantee!
          </motion.button> */}
        </div>
      </div>
    </div>
  );
}
