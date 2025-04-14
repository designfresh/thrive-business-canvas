
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Working with ThriveConsult transformed our approach to market expansion. Their strategic insights and tailored recommendations were invaluable to our success.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "The team's ability to analyze complex business challenges and deliver practical, effective solutions exceeded our expectations. I highly recommend their services.",
      author: "Michael Chen",
      position: "COO, Global Logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "Their leadership development program has been transformative for our executive team. We've seen measurable improvements in collaboration and decision-making.",
      author: "Lisa Rodriguez",
      position: "HR Director, FinServe Group",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-consultant-navy text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 font-bold">Client Testimonials</h2>
          <div className="w-20 h-1 bg-consultant-gold mb-6 mx-auto"></div>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#113055] p-8 rounded-lg relative">
              <Quote className="absolute top-4 right-4 text-consultant-gold opacity-50" size={32} />
              <p className="mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
