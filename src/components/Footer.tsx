import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-oritech-black border-t border-gray-700 py-12 lg:py-16">
      <div className="text-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-oritech-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-lg lg:text-xl font-black text-white">OritechAI</span>
            </div>
            <p className="text-sm lg:text-base text-gray-200 font-medium mb-6">
              Transforming businesses through strategic AI consulting and implementation.
              Your partner in the AI revolution.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-oritech-red transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-oritech-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm lg:text-base text-gray-200 font-medium hover:text-oritech-red transition-colors">
                  AI Consulting Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm lg:text-base text-gray-200 font-medium hover:text-oritech-red transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#booking" className="text-sm lg:text-base text-gray-200 font-medium hover:text-oritech-red transition-colors">
                  Book Free Audit
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-base lg:text-lg font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-oritech-red" />
                <span className="text-sm lg:text-base text-gray-200 font-medium">info@oritechai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-oritech-red" />
                <span className="text-sm lg:text-base text-gray-200 font-medium">+1 (407) 406-9101</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-oritech-red" />
                <span className="text-sm lg:text-base text-gray-200 font-medium">San Francisco, CA • Tirana, Albania</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm lg:text-base text-gray-300 font-medium mb-6 md:mb-0">
            © 2025 OritechAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm lg:text-base text-gray-300 font-medium hover:text-oritech-red transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm lg:text-base text-gray-300 font-medium hover:text-oritech-red transition-colors">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="text-sm lg:text-base text-gray-300 font-medium hover:text-oritech-red transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;