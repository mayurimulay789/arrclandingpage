import React, { useState } from 'react';
import { Star } from 'lucide-react'; // Ensure you have lucide-react installed
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon from react-icons
import DidImage from '../assets/Did.jpeg'; // Path for Did.jpeg
import FulImage from '../assets/FUL.jpeg'; // Path for FUL.jpeg
import SOT from '../assets/SOT.jpeg'; // Path for the placeholder image
import Python from '../assets/python.jpeg';
import cloud from '../assets/cloud.jpeg';
import DiD from '../assets/DID.jpeg';
import FullStack from '../assets/Ful2.jpeg';
import PythonAI from '../assets/AI.jpeg';
import AI from '../assets/CLOUDS.jpeg';
import { useModal } from './ModalProvider'; // Import the modal context

const courses = [
  {
    title: "Data Science",
    description: "Learn to analyze and interpret complex data.",
    rating: 4.8,
    views: 800,
    image: "https://images.prismic.io/turing/652ec29afbd9a45bcec8194c_shutterstock_1247255884_4afac53e02.webp?auto=format,compress"
  },
  {
    title: "MERN Stack",
    description: "Build web developer applications using MERN stack.",
    rating: 4.7,
    views: 700,
    image: FullStack
  },
  {
    title: "Java & Advanced Java",
    description: "Master Java programming and advanced concepts.",
    rating: 4.5,
    views: 450,
    image: Python
  },
  {
    title: "Web Development",
    description: "Learn HTML, CSS, and JavaScript to create stunning websites.",
    rating: 4.3,
    views: 900,
    image: FulImage
  },
  {
    title: "Artificial Intelligence",
    description: "Explore AI concepts and build intelligent applications.",
    rating: 4.9,
    views: 1100,
    image: PythonAI
  },
  {
    title: "Machine Learning",
    description: "Understand machine learning algorithms and how to apply them.",
    rating: 4.8,
    views: 950,
    image: "https://cdn.prod.website-files.com/6583e2b6af21ee3aa85c3013/666b1e59baaf5f85fb223bf3_machine%20learning.jpg"
  },
  {
    title: "Cloud Computing",
    description: "Learn about cloud services and deployment.",
    rating: 4.4,
    views: 500,
    image: AI
  },
  {
    title: "Prompt Engineering",
    description: "Learn how to create effective prompts for AI models.",
    rating: 4.2,
    views: 300,
    image: "https://av-eks-lekhak.s3.amazonaws.com/media/__sized__/article_images/960x0_1-thumbnail_webp-600x300.webp"
  },
  {
    title: "Digital Marketing",
    description: "Master digital marketing strategies and tools.",
    rating: 4.6,
    views: 850,
    image: DiD
  },
  {
    title: "UI/UX Design",
    description: "Understand user interface and user experience design principles.",
    rating: 4.5,
    views: 780,
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=900&t=st=1729063213~exp=1729063813~hmac=31c27c6447e2a91687a21ad5bdc517a676d7aa5db5bb6ec520d7676165599296"
  },
  {
    title: "Software Testing",
    description: "Learn software testing techniques and best practices.",
    rating: 4.3,
    views: 450,
    image: SOT
  }
];

const Courses = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const { openModal } = useModal(); // Access the openModal function

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image
  };

  const handleClosePreview = () => {
    setSelectedImage(null); // Close the image preview
  };

  return (
    <div className="px-4 py-16 text-white bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-16 text-4xl font-bold text-center sm:text-5xl">
          Our Most <span className="text-blue-400">Popular And Trending</span> Courses
        </h1>

        {/* Hurry Up Now Button */}
        <div className="flex justify-center mb-8">
          <button onClick={openModal} className="px-6 py-3 font-bold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 hover:shadow-xl">
            Hurry Up Now!!!
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.slice(0, courses.length - 3).map((course, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="relative cursor-pointer" onClick={() => handleImageClick(course.image)}>
                <img src={course.image} alt={course.title} className="object-cover w-full h-48" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-400'} ${i === Math.floor(course.rating) && course.rating % 1 !== 0 ? 'text-yellow-200' : ''}`}
                      fill="currentColor"
                    />
                  ))}
                  <span className="ml-2 text-gray-400">{course.rating.toFixed(1)}</span>
                  <span className="ml-4 text-gray-400">{course.views} views</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                <p className="mb-4 text-gray-400">{course.description}</p>
                <button onClick={openModal} className="w-full px-4 py-2 font-bold text-white transition-transform duration-300 ease-in-out rounded bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 focus:outline-none">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Center Last Three Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 md:gap-8">
  {courses.slice(-3).map((course, index) => (
    <div
      key={index}
      className="w-full overflow-hidden transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <div
        className="relative cursor-pointer"
        onClick={() => handleImageClick(course.image)}
      >
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(course.rating)
                  ? "text-yellow-400"
                  : "text-gray-400"
              } ${
                i === Math.floor(course.rating) && course.rating % 1 !== 0
                  ? "text-yellow-200"
                  : ""
              }`}
              fill="currentColor"
            />
          ))}
          <span className="ml-2 text-gray-400">
            {course.rating.toFixed(1)}
          </span>
          <span className="ml-4 text-gray-400">{course.views} views</span>
        </div>
        <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
        <p className="mb-4 text-gray-400">{course.description}</p>
        <button
          onClick={openModal}
          className="w-full px-4 py-2 font-bold text-white transition-transform duration-300 ease-in-out rounded bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 focus:outline-none"
        >
          Enroll Now
        </button>
      </div>
    </div>
  ))}
</div>


        {/* Render Selected Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative p-4 bg-white rounded-lg">
              <button onClick={handleClosePreview} className="absolute top-2 right-2">
                <AiOutlineClose className="w-6 h-6 text-gray-600" />
              </button>
              <img src={selectedImage} alt="Selected" className="object-cover h-64 rounded-lg w-96" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
