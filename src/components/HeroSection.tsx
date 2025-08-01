
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-design-background py-16 lg:py-0 flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="mb-2">
              <span className="text-black font-semibold">desire to</span>
              <br />
              <span className="text-design-teal">Create</span>
              <span className="text-design-coral text-6xl">.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-md">
              Creating thoughtful digital products with real world impact.
            </p>
            <a href="https://markjohnes.substack.com/p/company-info" className="details-button group">
              Details <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 w-full text-center text-sm text-gray-500">
        © 2025 The Desire to Create Limited. All rights reserved.
      </div>
    </section>
  );
};

export default HeroSection;
