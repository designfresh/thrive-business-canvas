
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
          
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px]">
            <div className="absolute top-0 left-0 lg:left-[-10%] w-[80%] h-[90%]">
              <div className="relative w-full h-full">
                {/* Phone mockup */}
                <div className="absolute top-0 right-0 w-[55%] h-full bg-design-dark rounded-[40px] shadow-lg">
                  {/* Phone screen with wavy lines */}
                  <div className="absolute inset-1 rounded-[35px] overflow-hidden bg-gradient-to-br from-[#0a2540] to-[#132f4c]">
                    <div className="absolute top-0 left-0 w-full h-full opacity-40">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,50 Q30,40 50,50 T100,50" stroke="#3D8D87" strokeWidth="0.5" fill="none" />
                        <path d="M0,60 Q30,50 50,60 T100,60" stroke="#3D8D87" strokeWidth="0.5" fill="none" />
                        <path d="M0,70 Q30,60 50,70 T100,70" stroke="#3D8D87" strokeWidth="0.5" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-[10%] right-[80%] w-16 h-16 bg-design-coral rounded-lg floating-element" 
                     style={{animationDelay: '0s'}}></div>
                <div className="absolute top-[60%] right-[10%] w-20 h-20 bg-design-green rounded-full floating-element"
                     style={{animationDelay: '1s'}}></div>
                <div className="absolute top-[80%] right-[30%] w-32 h-8 bg-design-skyBlue rounded-full floating-element"
                     style={{animationDelay: '2s'}}></div>
              </div>
            </div>
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
