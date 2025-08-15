import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight text-shadow-lg">
            AI Consulting & Audits to{' '}
            <span className="text-oritech-red text-shadow-lg">Transform</span>{' '}
            Your Business
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-medium mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed text-shadow">
            We audit your processes, uncover automation opportunities, and implement 
            AI strategies that <span className="text-oritech-red font-bold text-shadow-lg">cut costs</span>, 
            <span className="text-oritech-red font-bold text-shadow-lg"> boost efficiency</span>, and 
            <span className="text-oritech-red font-bold text-shadow-lg"> grow revenue</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center">
            <motion.button
              onClick={scrollToBooking}
              className="bg-oritech-red hover:bg-red-700 text-white font-semibold px-8 py-4 lg:px-10 lg:py-5 rounded-lg text-lg lg:text-xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free AI Audit <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;