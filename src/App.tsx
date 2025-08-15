import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Services from './components/Services';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import OurProcess from './components/OurProcess';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <VideoBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ProblemStatement />
        <Services />
        <WhyWorkWithUs />
        <OurProcess />
        <CaseStudy />
        <Testimonials />
        <BookingSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;