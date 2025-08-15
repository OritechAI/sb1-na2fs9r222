import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const BookingSection = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/selenica3/30min', '_blank');
  };

  const benefits = [
    "Comprehensive AI readiness assessment",
    "Custom automation opportunity analysis", 
    "ROI projections for AI implementations",
    "Priority action plan with timeline",
    "No obligation consultation"
  ];

  return (
    <section id="booking" className="section-spacing px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white heading-spacing text-shadow-lg">
            Ready to <span className="text-oritech-red">Transform Your Business</span> with AI?
          </h2>
          <p className="text-lg lg:text-xl text-gray-100 font-medium max-w-4xl mx-auto subheading-spacing leading-relaxed text-shadow">
            Book your free AI audit call today and discover exactly how AI can cut your costs, 
            boost efficiency, and accelerate growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-600">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-8">What You'll Get in Your Free Audit:</h3>
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-oritech-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-100 font-medium text-base lg:text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 lg:p-8 bg-oritech-red bg-opacity-10 rounded-lg border border-oritech-red">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-oritech-gold" />
                  <span className="font-bold text-white text-lg lg:text-xl">15-Minute Intro Call</span>
                </div>
                <p className="text-gray-100 font-medium text-base lg:text-lg leading-relaxed">
                  Get actionable insights you can implement immediately, even if you don't work with us.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Booking Form/Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-oritech-red mx-auto mb-4" />
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 font-medium text-base lg:text-lg leading-relaxed mb-8">Enough Already!</p>
              </div>
              
              {/* Calendly inline widget begin */}
              {/* Schedule Call Button */}
              <motion.button
                onClick={openCalendly}
                className="bg-oritech-red hover:bg-red-700 text-white font-bold px-8 py-4 lg:px-10 lg:py-5 rounded-lg text-lg lg:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Call Now
              </motion.button>
              
              <div className="flex items-center justify-center gap-2 text-oritech-red font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span className="font-bold text-base">100% Free • No Commitment Required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;