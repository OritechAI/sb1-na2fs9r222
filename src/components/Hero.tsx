import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/selenica3/15min', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 overlay-dark"></div>
      <div className="relative z-10 text-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white heading-spacing leading-tight text-shadow-lg">
            AI Consulting & Audits to
            <span className="text-oritech-red text-shadow-lg">Transform</span>{' '}
            Your Business
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 font-medium subheading-spacing max-w-4xl mx-auto text-shadow">
            We audit your processes, uncover automation opportunities, and implement
            AI strategies that <span className="text-oritech-red font-bold text-shadow-lg">cut costs</span>,{' '}
            <span className="text-oritech-red font-bold text-shadow-lg"> boost efficiency</span>, and 
            <span className="text-oritech-red font-bold text-shadow-lg"> grow revenue</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center">
            <motion.button
              onClick={openCalendly}
              className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free AI Audit <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;