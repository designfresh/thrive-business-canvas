
import React from 'react';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '95%', label: 'Success Rate' }
  ];
  
  const expertise = [
    { icon: TrendingUp, title: 'Strategic Planning', description: 'Develop comprehensive strategies to achieve long-term business goals.' },
    { icon: Users, title: 'Organizational Development', description: 'Build high-performing teams and effective operational structures.' },
    { icon: Award, title: 'Process Optimization', description: 'Streamline workflows to enhance productivity and reduce costs.' },
    { icon: CheckCircle, title: 'Risk Management', description: 'Identify, assess, and mitigate potential business risks.' }
  ];

  return (
    <section id="about" className="section-padding bg-consultant-offWhite">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-consultant-navy mb-4 font-bold">About Our Consulting Approach</h2>
            <div className="w-20 h-1 bg-consultant-gold mb-6"></div>
            <p className="mb-6 text-lg">
              With over 15 years of industry experience, we bring deep expertise in business transformation and strategic growth to every client engagement.
            </p>
            <p className="mb-8 text-lg">
              Our approach combines analytical rigor with creative problem-solving to deliver tailored solutions that address your unique business challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-consultant-navy">{stat.value}</p>
                  <p className="text-consultant-charcoal">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-consultant-navy">Our Core Expertise</h3>
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-consultant-lightBlue p-2 rounded-full text-consultant-navy">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
