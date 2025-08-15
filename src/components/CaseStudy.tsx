import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

const CaseStudy = () => {
  const metrics = [
    {
      icon: <DollarSign className="w-8 h-8 text-oritech-gold" />,
      value: "30%",
      label: "Cost Reduction"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-oritech-gold" />,
      value: "18%", 
      label: "Lead Conversion Boost"
    },
    {
      icon: <Clock className="w-8 h-8 text-oritech-gold" />,
      value: "60%",
      label: "Time Savings"
    },
    {
      icon: <Users className="w-8 h-8 text-oritech-gold" />,
      value: "45%",
      label: "Team Productivity"
    }
  ];

  return (
    <section id="case-study" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            <span className="text-oritech-red">Real Results</span> for Real Businesses
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            See how we transformed a mid-size manufacturing company's operations with AI automation.
          </p>
        </motion.div>
        
        <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Case Study Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Manufacturing Company Transformation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-oritech-gold mb-2">Challenge:</h4>
                  <p className="text-gray-200">Manual inventory management, inefficient quality control, and high labor costs were impacting profitability.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-oritech-gold mb-2">Solution:</h4>
                  <p className="text-gray-200">Implemented AI-powered inventory optimization, automated quality control systems, and predictive maintenance scheduling.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-oritech-gold mb-2">Timeline:</h4>
                  <p className="text-gray-200">Full implementation completed in 3 months with immediate ROI visible within 6 weeks.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-oritech-black bg-opacity-40 rounded-xl border border-gray-600">
                  <div className="flex justify-center mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 p-6 bg-oritech-red bg-opacity-10 rounded-xl border border-oritech-red"
          >
            <blockquote className="text-center">
              <p className="text-lg text-white italic mb-4">
                "OritechAI didn't just implement AI—they transformed how we think about our business operations. 
                The ROI was immediate and the long-term impact has been game-changing."
              </p>
              <cite className="text-oritech-gold font-semibold">
                — Sarah Johnson, Operations Director
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;