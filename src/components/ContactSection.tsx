
import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you'd handle the form submission to a server
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-consultant-offWhite">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-consultant-navy mb-4 font-bold">Get In Touch</h2>
            <div className="w-20 h-1 bg-consultant-gold mb-6"></div>
            <p className="mb-8 text-lg">
              Ready to transform your business? Contact us to schedule a consultation 
              and discover how our expertise can help you achieve your goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-consultant-navy p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-600">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-consultant-navy p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600">info@thriveconsult.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-consultant-navy p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-consultant-navy">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your project or inquiry..." className="h-32" required />
              </div>
              
              <Button type="submit" className="bg-consultant-navy hover:bg-consultant-gold text-white hover:text-consultant-navy w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
