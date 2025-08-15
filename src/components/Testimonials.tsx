import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "OritechAI's audit revealed $2.3M in potential savings we never knew existed. Their implementation was flawless and the results speak for themselves.",
      author: "Michael Chen",
      role: "CEO, TechFlow Solutions",
      rating: 5
    },
    {
      quote: "The AI chatbots they built for us increased our lead qualification by 40% while reducing our support team workload. Incredible ROI in just 2 months.",
      author: "Lisa Rodriguez", 
      role: "Marketing Director, GrowthCorp",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and results-driven. OritechAI transformed our inventory management and saved us 25% on operational costs.",
      author: "David Park",
      role: "COO, Manufacturing Plus",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-oritech-gold fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            What Our <span className="text-oritech-red">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it—see what business leaders are saying about our AI consulting services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
            >
              <div className="absolute -top-4 -left-4 bg-oritech-red rounded-full p-3">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-200 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-600 pt-4">
                <cite className="not-italic">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-oritech-gold text-sm">{testimonial.role}</div>
                </cite>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;