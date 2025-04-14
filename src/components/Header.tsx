
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-consultant-navy text-2xl font-heading font-bold">Thrive<span className="text-consultant-gold">Consult</span></span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-consultant-gold transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-consultant-gold hover:bg-consultant-navy text-consultant-navy hover:text-white transition-colors">
            Book a Call
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-consultant-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg">
          <nav className="container mx-auto flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-consultant-gold px-2 py-1 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="bg-consultant-gold hover:bg-consultant-navy text-consultant-navy hover:text-white transition-colors mt-2 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
