import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Wrench } from 'lucide-react';

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: <Trophy className="w-12 h-12 text-oritech-red" />,
      title: "Proven Results",
      description: "Our AI implementations have delivered an average of 35% cost reduction and 50% efficiency gains for our clients."
    },
    {
      icon: <Users className="w-12 h-12 text-oritech-red" />,
      title: "Industry Experience", 
      description: "Over 5 years of AI consulting experience across manufacturing, healthcare, finance, and e-commerce sectors."
    },
    {
      icon: <Wrench className="w-12 h-12 text-oritech-red" />,
      title: "End-to-End Support",
      description: "From initial audit to full implementation and ongoing optimization—we're with you every step of the way."
    }
  ];

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
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white heading-spacing">
            Why Work With <span className="text-oritech-red">OritechAI</span>?
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We don't just implement AI—we transform businesses with strategic, results-driven solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center card-padding lg:p-10"
            >
              <div className="flex justify-center mb-6 lg:mb-8">
                {reason.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">{reason.title}</h3>
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;