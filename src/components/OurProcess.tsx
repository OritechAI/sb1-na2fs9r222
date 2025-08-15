import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Cog, TrendingUp } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-oritech-red" />,
      title: "Audit",
      description: "Comprehensive analysis of your current processes to identify AI opportunities and efficiency gaps."
    },
    {
      icon: <FileText className="w-12 h-12 text-oritech-red" />,
      title: "Plan", 
      description: "Create a detailed AI implementation roadmap with ROI projections and timeline milestones."
    },
    {
      icon: <Cog className="w-12 h-12 text-oritech-red" />,
      title: "Implement",
      description: "Deploy AI solutions with minimal business disruption and comprehensive team training."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-oritech-red" />,
      title: "Optimize",
      description: "Monitor performance, make data-driven improvements, and scale successful implementations."
    }
  ];

  return (
    <section id="process" className="section-spacing px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white heading-spacing">
            Our <span className="text-oritech-red">Proven</span> Process
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            A systematic approach to AI transformation that ensures success at every stage.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Step Number */}
              <div className="bg-black bg-opacity-60 backdrop-blur-sm card-padding lg:p-10 rounded-xl border border-gray-700 h-full">
                {/* Step Number inside the box */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-oritech-red text-white w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-bold text-sm lg:text-base">
                  {index + 1}
                </div>
                
                <div className="flex justify-center mb-4 lg:mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">{step.title}</h3>
                <p className="text-gray-200 text-base lg:text-lg leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow connector (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-oritech-red"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-oritech-red border-y-2 border-y-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;