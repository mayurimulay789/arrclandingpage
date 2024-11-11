'use client';

import Home from './Home';
import Courses from './Courses';
import Placement from './Placement';
import About from './About';
import Testimonials from './Testimonials';
import Teachers from './Teachers';
import FAQ from './FAQ';
import Offer from './Offer';
import Footer from './Footer';
import Chooseus from './Chooseus';
import Banner from './Banner';
import Contact from './Contact';
import { ModalProvider } from './ModalProvider'; // Import the modal provider

export default function Landing() {
  return (
    <ModalProvider>
    <div className="min-h-screen bg-[#1e1b2e]">
      {/* Main Content */}
      <main className="space-y-0">
     

        <Home />
        <About />
        <Chooseus/>
        <Banner/>

        <Placement />
        <Courses />
        <Offer/>
        <Testimonials />
        <Teachers />
        <FAQ/>
        <Contact/>
        <Footer />
      </main>
    </div>
    </ModalProvider>

  );
}
