import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-consultant-navy to-[#06142E] text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/14fb909f-b25b-4330-8ae4-5ec585f1f778.png')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="animate-fade-in font-heading font-bold mb-6">
            Strategic Solutions for Business Growth
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Expert business consulting to transform challenges into opportunities and drive sustainable success.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button className="bg-consultant-gold hover:bg-white text-consultant-navy hover:text-consultant-navy text-lg px-8 py-6">
              Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-consultant-navy text-lg px-8 py-6">
              Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
