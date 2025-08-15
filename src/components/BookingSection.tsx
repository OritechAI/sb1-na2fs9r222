import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const BookingSection = () => {
  const benefits = [
    "Comprehensive AI readiness assessment",
    "Custom automation opportunity analysis", 
    "ROI projections for AI implementations",
    "Priority action plan with timeline",
    "No obligation consultation"
  ];

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to <span className="text-oritech-red">Transform Your Business</span> with AI?
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            Book your free AI audit call today and discover exactly how AI can cut your costs, 
            boost efficiency, and accelerate growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get in Your Free Audit:</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-oritech-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-oritech-red bg-opacity-10 rounded-lg border border-oritech-red">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-oritech-gold" />
                  <span className="font-semibold text-white">60-Minute Strategy Session</span>
                </div>
                <p className="text-gray-200 text-sm">
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
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="text-center mb-6">
                <Calendar className="w-12 h-12 text-oritech-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Free AI Audit</h3>
                <p className="text-gray-600">Choose a time that works best for you</p>
              </div>
              
              {/* Placeholder for Calendly embed - replace with your actual Calendly URL */}
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">
                    Calendly booking widget will be embedded here
                  </p>
                  <button className="bg-oritech-red hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto">
                    Book Your Call Now <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Alternative: Direct booking button */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Available Monday-Friday, 9 AM - 5 PM EST
                </p>
                <div className="flex items-center justify-center gap-2 text-oritech-red font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">100% Free • No Commitment Required</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;