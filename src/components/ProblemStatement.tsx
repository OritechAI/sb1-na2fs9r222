import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock } from 'lucide-react';

const ProblemStatement = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <AlertTriangle className="w-80 h-80 text-oritech-red opacity-20" />
        </div>
        
        {/* Background Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AlertTriangle className="w-96 h-96 text-oritech-red opacity-10" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Hidden Inefficiencies Are <span className="text-oritech-red">Bleeding Your Business Dry</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Every day your business operates without AI optimization, you're losing money to manual processes, 
            human errors, and missed opportunities. Your competitors are already leveraging AI to reduce costs by 
            30-50% while increasing productivity. The question isn't whether you need AI—it's how quickly you can implement it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <TrendingDown className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Revenue Leakage</h3>
              <p className="text-gray-300">Manual processes cost you 20-40% more than automated solutions</p>
            </div>
            
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <Clock className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Time Waste</h3>
              <p className="text-gray-300">Staff spend 60% of time on repetitive tasks that AI could handle</p>
            </div>
            
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <AlertTriangle className="w-8 h-8 text-oritech-red mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Missed Opportunities</h3>
              <p className="text-gray-300">Lack of data insights prevents optimal decision making</p>
            </div>
          </div>
          <motion.button
            onClick={scrollToBooking}
            className="bg-oritech-red hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
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