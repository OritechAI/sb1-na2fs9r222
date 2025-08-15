import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const BookingSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

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
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-oritech-red mx-auto mb-4" />
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">Book a call</h3>
                <p className="text-gray-700 font-medium text-base lg:text-lg leading-relaxed">Choose a time that works best for you</p>
              </div>
              
              {/* Calendly inline widget */}
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/selenica3/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=010000&text_color=b80101&primary_color=c60303" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              {/* Calendly inline widget end */}
              
              {/* Alternative: Direct booking button */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => window.open('https://calendly.com/selenica3/30min', '_blank')}
                  className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto mb-4"
                >
                  Open in New Tab <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-2 text-oritech-red font-semibold mt-4">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-bold text-base">100% Free • No Commitment Required</span>
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