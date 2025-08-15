import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "AI Process Audits",
      description: "Comprehensive analysis of your current workflows to identify automation opportunities and inefficiencies costing you money.",
      benefits: [
        "Complete process mapping",
        "ROI calculations for AI implementation", 
        "Priority roadmap for improvements",
        "Cost-benefit analysis"
      ]
    },
    {
      title: "AI Strategy Consulting",
      description: "Custom AI strategies aligned with your business goals, from quick wins to long-term transformation plans.",
      benefits: [
        "Tailored AI implementation roadmap",
        "Technology stack recommendations",
        "Change management planning",
        "Performance metrics & KPIs"
      ]
    },
    {
      title: "AI Implementation & Training",
      description: "End-to-end implementation of AI solutions with comprehensive team training to ensure successful adoption.",
      benefits: [
        "Full AI system deployment",
        "Team training & onboarding",
        "Ongoing support & optimization",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="text-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white heading-spacing text-shadow-lg">
            Our <span className="text-oritech-red">AI Consulting</span> Services
          </h2>
          <p className="text-base lg:text-lg text-gray-100 font-medium max-w-4xl mx-auto subheading-spacing text-shadow">
            From audit to implementation, we provide end-to-end AI solutions that deliver measurable results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black bg-opacity-80 backdrop-blur-sm card-padding rounded-xl border border-gray-600 hover:border-oritech-red transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <h3 className="text-lg lg:text-xl font-black text-white mb-4">{service.title}</h3>
                <p className="text-sm lg:text-base text-gray-100 font-medium">{service.description}</p>
              </div>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-oritech-red mt-0.5 flex-shrink-0" />
                    <span className="text-sm lg:text-base text-gray-200 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;