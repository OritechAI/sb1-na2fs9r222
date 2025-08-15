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
            Why Work With <span className="text-oritech-red">OritechAI</span>?
          </h2>
          <p className="text-base lg:text-lg text-gray-100 font-medium max-w-4xl mx-auto subheading-spacing text-shadow">
            We don't just implement AI—we transform businesses with strategic, results-driven solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center card-padding"
            >
              <div className="flex justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-black text-white mb-4 text-shadow">{reason.title}</h3>
              <p className="text-sm lg:text-base text-gray-100 font-medium text-shadow-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;