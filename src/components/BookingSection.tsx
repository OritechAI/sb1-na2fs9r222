import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BookingSection = () => {
  const benefits = [
    "Comprehensive AI readiness assessment",
    "Custom automation opportunity analysis", 
    "ROI projections for AI implementations",
    "Priority action plan with timeline",
    "No obligation consultation"
  ];

  return (
    <>
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
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
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-xl border border-gray-600">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-8 text-center">What You'll Get in Your Free Audit:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-oritech-red mt-0.5 flex-shrink-0" />
                    <span className="text-gray-100 font-medium text-base lg:text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section id="booking" style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ 
            color: '#fff', 
            margin: '0 0 2rem', 
            textAlign: 'center',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '900',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
          }}>
            Schedule Your 30-Minute AI Audit
          </h2>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/selenica3/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=010000&text_color=b80101&primary_color=c60303"
            style={{
              minWidth: '320px',
              height: '700px',
              border: '0',
              borderRadius: '12px',
              background: 'rgba(0,0,0,0.2)',
              width: '100%'
            }}
          ></div>
          <noscript>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
              <a 
                href="https://calendly.com/selenica3/30min" 
                target="_blank" 
                rel="noopener"
                style={{ 
                  color: '#E41E26', 
                  textDecoration: 'underline',
                  fontSize: '1.125rem',
                  fontWeight: '600'
                }}
              >
                Open in Calendly
              </a>
            </p>
          </noscript>
        </div>
      </section>
    </>
  );
};

export default BookingSection;