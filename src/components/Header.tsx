
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { label: 'Products', href: '#services' },
    { label: 'Team', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-design-dark text-2xl font-heading font-bold">
            <span className="text-design-teal">D</span>
            <span className="text-design-dark">2C</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-design-dark hover:text-design-teal transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-design-coral rounded-full text-white px-6 py-2 hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-design-dark"
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
                className="text-design-dark hover:text-design-teal px-2 py-1 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-design-coral text-white rounded-full px-4 py-2 text-center hover:bg-opacity-90 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
