import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Target } from 'lucide-react';

const ProblemStatement = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/selenica3/30min', '_blank');
  };

  return (
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
            Hidden Inefficiencies Are <span className="text-oritech-red">Bleeding Your Business Dry</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-100 font-medium max-w-4xl mx-auto subheading-spacing leading-relaxed text-shadow">
            Every day your business operates without AI optimization, you're losing money to manual processes, 
            human errors, and missed opportunities. Your competitors are already leveraging AI to reduce costs by 
            30-50% while increasing productivity. The question isn't whether you need AI—it's how quickly you can implement it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <div className="bg-black bg-opacity-70 backdrop-blur-sm card-padding rounded-lg border border-gray-600">
              <TrendingDown className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Revenue Leakage</h3>
              <p className="text-gray-200 font-medium leading-relaxed">Manual processes cost you 20-40% more than automated solutions</p>
            </div>
            
            <div className="bg-black bg-opacity-70 backdrop-blur-sm card-padding rounded-lg border border-gray-600">
              <Clock className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Time Waste</h3>
              <p className="text-gray-200 font-medium leading-relaxed">Staff spend 60% of time on repetitive tasks that AI could handle</p>
            </div>
            
            <div className="bg-black bg-opacity-70 backdrop-blur-sm card-padding rounded-lg border border-gray-600">
              <Target className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Missed Opportunities</h3>
              <p className="text-gray-200 font-medium leading-relaxed">Lack of data insights prevents optimal decision making</p>
            </div>
          </div>
          <motion.button
            onClick={openCalendly}
            className="bg-oritech-red hover:bg-red-700 text-white font-bold button-padding lg:px-12 lg:py-5 rounded-lg text-xl lg:text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Audit Call →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;