import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Target } from 'lucide-react';

const ProblemStatement = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/selenica3/15min', '_blank');
  };

  return (
    <section className="section-spacing">
      <div className="text-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
            Hidden Inefficiencies Are <span className="text-oritech-red">Bleeding Your Business Dry</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-100 font-medium max-w-4xl mx-auto subheading-spacing text-shadow">
            Every day your business operates without AI optimization, you're losing money to manual processes,
            human errors, and missed opportunities. Your competitors are already leveraging AI to reduce costs by
            30-50% while increasing productivity. The question isn't whether you need AI—it's how quickly you can implement it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 subheading-spacing">
            <div className="bg-black bg-opacity-70 backdrop-blur-sm card-padding rounded-lg border border-gray-600">
              <TrendingDown className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Revenue Leakage</h3>
              <p className="text-sm lg:text-base text-gray-200 font-medium">Manual processes cost you 20-40% more than automated solutions</p>
            </div>
            
            <div className="bg-black bg-opacity-70 backdrop-blur-sm card-padding rounded-lg border border-gray-600">
              <Clock className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Time Waste</h3>
              <p className="text-sm lg:text-base text-gray-200 font-medium">Staff spend 60% of time on repetitive tasks that AI could handle</p>
            </div>
            
            <div className="bg-black bg-opacity-70 backdrop-blur-sm card-padding rounded-lg border border-gray-600">
              <Target className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Missed Opportunities</h3>
              <p className="text-sm lg:text-base text-gray-200 font-medium">Lack of data insights prevents optimal decision making</p>
            </div>
          </div>
          <motion.button
            onClick={openCalendly}
            className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding rounded-lg text-lg lg:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Free AI Audit Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;