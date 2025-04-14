
import React from 'react';
import { ArrowRight, Compass, LineChart, Layers, Users, Target, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Compass,
      title: 'Strategic Planning',
      description: 'Navigate complex business landscapes with actionable strategic plans tailored to your goals.',
      link: '#contact'
    },
    {
      icon: LineChart,
      title: 'Business Analysis',
      description: 'Gain deep insights into your operations, market position, and growth opportunities.',
      link: '#contact'
    },
    {
      icon: Layers,
      title: 'Process Optimization',
      description: 'Streamline operations, reduce inefficiencies, and maximize productivity across your organization.',
      link: '#contact'
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Empower your leadership team with the skills and tools needed to drive change and growth.',
      link: '#contact'
    },
    {
      icon: Target,
      title: 'Market Entry Strategy',
      description: 'Expand into new markets with comprehensive research and strategic planning.',
      link: '#contact'
    },
    {
      icon: MessageCircle,
      title: 'Executive Coaching',
      description: 'One-on-one guidance for executives navigating complex business challenges.',
      link: '#contact'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-consultant-navy mb-4 font-bold">Our Consulting Services</h2>
          <div className="w-20 h-1 bg-consultant-gold mb-6 mx-auto"></div>
          <p className="text-lg text-gray-700">
            We offer a comprehensive range of consulting services designed to address your most pressing business challenges and capitalize on emerging opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="bg-consultant-lightBlue w-12 h-12 rounded-full flex items-center justify-center mb-4 text-consultant-navy">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl text-consultant-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <a href={service.link} className="text-consultant-navy font-medium flex items-center hover:text-consultant-gold transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
