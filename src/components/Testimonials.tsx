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
    <section id="testimonials" className="section-spacing px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white heading-spacing text-shadow-lg">
            What Our <span className="text-oritech-red">Clients Say</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-100 font-medium max-w-4xl mx-auto leading-relaxed text-shadow">
            Don't just take our word for it—see what business leaders are saying about our AI consulting services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black bg-opacity-80 backdrop-blur-sm card-padding lg:p-10 rounded-xl border border-gray-600 relative"
            >
              <div className="absolute -top-4 -left-4 lg:-top-5 lg:-left-5 bg-oritech-red rounded-full p-3 lg:p-4">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-100 font-medium text-base lg:text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-600 pt-6">
                <cite className="not-italic">
                  <div className="font-bold text-white text-lg lg:text-xl mb-2">{testimonial.author}</div>
                  <div className="text-oritech-red font-semibold text-sm lg:text-base">{testimonial.role}</div>
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