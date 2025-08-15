import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Services from './components/Services';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import OurProcess from './components/OurProcess';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="min-h-screen relative w-full">
      {/* Background Video */}
      <VideoBackground />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <ProblemStatement />
        <Services />
        <WhyWorkWithUs />
        <OurProcess />
        <Testimonials />
        <BookingSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;