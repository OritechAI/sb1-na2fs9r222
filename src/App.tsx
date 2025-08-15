import React from 'react';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Services from './components/Services';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import OurProcess from './components/OurProcess';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="min-h-screen relative z-0">
      <VideoBackground />
      <div className="relative z-10">
        <Hero />
        <ProblemStatement />
        <Services />
        <WhyWorkWithUs />
        <OurProcess />
        <BookingSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;