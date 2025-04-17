import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-consultant-navy text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Mark Johnes</h3>
            <p className="mb-6 text-gray-300">
              Strategic business consulting services to help your organization grow and succeed in today's competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#113055] p-2 rounded-full hover:bg-consultant-gold hover:text-consultant-navy transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#113055] p-2 rounded-full hover:bg-consultant-gold hover:text-consultant-navy transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-[#113055] p-2 rounded-full hover:bg-consultant-gold hover:text-consultant-navy transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-[#113055] p-2 rounded-full hover:bg-consultant-gold hover:text-consultant-navy transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-consultant-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-consultant-gold transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-consultant-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-consultant-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-consultant-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-consultant-gold transition-colors">Strategic Planning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-consultant-gold transition-colors">Business Analysis</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-consultant-gold transition-colors">Process Optimization</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-consultant-gold transition-colors">Leadership Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-consultant-gold transition-colors">Executive Coaching</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex">
                <span className="mr-3">📍</span>
                123 Business Avenue, Suite 500<br />New York, NY 10001
              </li>
              <li className="flex">
                <span className="mr-3">📱</span>
                +1 (555) 123-4567
              </li>
              <li className="flex">
                <span className="mr-3">✉️</span>
                info@thriveconsult.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mark Johnes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
