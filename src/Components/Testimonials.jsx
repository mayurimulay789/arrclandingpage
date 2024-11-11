'use client'

import { Star } from 'lucide-react'
import { useModal } from './ModalProvider'; // Import the modal context

const reviews = [
  {
    id: 1,
    name: 'Sheetal Shinde',
    role: 'Software Engineer',
    image: 'https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/girl-image.png',
    rating: 5,
    quote: 'The courses at ARRCTech have been life-changing. The hands-on approach and real-world projects helped me transition seamlessly into a Software Engineering role. The instructors are incredibly supportive and knowledgeable.',
  },
  {
    id: 2,
    name: 'Amit Kumar',
    role: 'Recent Graduate',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w1%20(1)-UesuVzCe56VDHIxExqDPZYZtcCJnoW.jpeg',
    type: 'whatsapp',
    quote: 'The training at Arrc Technology was exceptional. The instructors were knowledgeable, and the placement team was really supportive in helping me land my first job',
  },
  {
    id: 3,
    name: 'Aniket Patil',
    role: 'Graphic Designer',
    image: 'https://geeksui.codescandy.com/geeks/assets/images/landing-immigration/front-view-young-man-going-university-with-bag.png',
    rating: 4.5,
    quote: 'The Graphic Design program at ARRCTech is top-notch! The classes are well-structured, and the practical assignments challenged me to improve my skills. The environment encourages creativity, and I am now working on projects I never thought I could.',
  },
  {
    id: 4,
    name: 'Atharva Joshi',
    role: 'IT Professional',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w1%20(2)-OhjVrl9A50BKEs4fUigRAzal1NJhVO.jpeg',
    type: 'whatsapp',
    quote: 'Arrc Technology चे IT ट्रेनिंग खूपच सखोल आणि प्रॅक्टिकल होते. मला त्यांच्या प्लेसमेंट टीमच्या मदतीने माझा पहिला जॉब मिळाला',
  },
  {
    id: 5,
    name: 'Sakshi Khose',
    role: 'Web Developer',
    image: 'https://geeksui.codescandy.com/geeks/assets/images/landing-immigration/testimonial-img.png',
    rating: 5,
    quote: 'I was impressed by the quality of training at ARRCTech. The courses covered everything from basic to advanced topics in web development. Thanks to the mentors who guided me every step of the way, I was able to land my first job as a Web Developer.',
  },
  {
    id: 6,
    name: 'Ankita Singh',
    role: 'MNC Employee',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w1%20(3)-MiUj2WOfMpz6nDbpSNZwJhv0wGN43U.jpeg',
    type: 'whatsapp',
    quote: 'मैंने Arrc Technology से कोर्स किया और अब मुझे एक MNC में जॉब मिल गई है. यहां की प्लेसमेंट सर्विस बहुत ही प्रोफेशनल है',
  },
  {
    id: 7,
    name: 'Akshay Khose',
    role: 'Data Analyst',
    image: 'https://dukaan.b-cdn.net/700x700/webp/projecteagle/images/0949be2c-426f-450f-ae6b-642dcd79d557.jpg',
    rating: 4,
    quote: 'The Data Analytics course at ARRCTech provided the skills I needed to transition from a beginner to a professional. The practical sessions and real-world data analysis projects were particularly helpful in preparing me for my current role.',
  },
  {
    id: 8,
    name: 'Pranav Deshmukh',
    role: 'Successful Graduate',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w1%20(4)-3thxIGiLBkG79uKQdn0XjmovG1P2Y1.jpeg',
    type: 'whatsapp',
    quote: 'माझं अनुभव Arrc Technology मध्ये खूप चांगला होता. टीचर्स खूपच समजावून शिकवतात आणि मला ह्या कोर्समुळे चांगल्या पगाराची नोकरी मिळाली.',
  },
]

export default function Testimonial() {
  const { openModal } = useModal(); // Access the openModal function

  const realReviews = reviews.filter((review) => !review.type)
  const whatsappReviews = reviews.filter((review) => review.type === 'whatsapp')

  return (
    <div className="bg-[#1e1b2e] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 sm:text-5xl">
            Success Stories From Our Students
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Hear what our students have to say about their experiences at ARRCTech, where our courses and training programs prepare them for real-world challenges.
          </p>
          <button onClick={openModal}
className="inline-flex items-center px-6 py-3 mt-8 text-base font-semibold text-white transition-transform duration-300 ease-in-out transform border border-transparent rounded-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-green-500 hover:to-purple-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Achieve your career goals risk-free: 100% job placement or a full fee refund. We invest in your success!
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Render real reviews first */}
          {realReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 transition-transform duration-300 transform border-2 border-gray-200 shadow-lg bg-gradient-to-r from-white to-blue-200 rounded-xl hover:scale-105 hover:shadow-2xl hover:rotate-2"
            >
              <div className=" h-[250px] overflow-hidden">
                <p className="italic text-gray-700">"{review.quote}"</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 mr-2 rounded-full" // Reduced margin here
                  src={review.image}
                  alt={review.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mt-2"> {/* Adjusted margin here */}
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(review.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    } ${
                      i === Math.floor(review.rating) && review.rating % 1 !== 0
                        ? 'text-yellow-400 fill-current'
                        : ''
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Render WhatsApp reviews next */}
          {whatsappReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 transition-transform duration-300 transform border-2 border-gray-200 shadow-lg bg-gradient-to-r from-white to-blue-200 rounded-xl hover:scale-105 hover:shadow-2xl hover:rotate-2"
            >
              <div className="flex flex-col items-center">
                <img
                  src={review.image}
                  alt={`WhatsApp conversation with ${review.name}`}
                  className="w-full mb-4 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
