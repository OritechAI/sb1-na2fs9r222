import React from 'react';
import { motion } from 'framer-motion';
import { Search, Vibrate as Strategy, Cog, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-oritech-gold" />,
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
      icon: <Strategy className="w-12 h-12 text-oritech-gold" />,
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
      icon: <Cog className="w-12 h-12 text-oritech-gold" />,
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our <span className="text-oritech-red">AI Consulting</span> Services
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            From audit to implementation, we provide end-to-end AI solutions that deliver measurable results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-oritech-red transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-white mt-4 mb-4">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-oritech-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
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