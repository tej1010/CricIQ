import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Fantasy Cricket Player',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'CricIQ has completely changed my fantasy cricket experience. The analytics and player statistics helped me make better decisions, and I\'ve won over ₹50,000 in the last season!',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Cricket Enthusiast',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The interface is so intuitive and user-friendly. I love how easy it is to create and manage multiple teams. The live score updates make it exciting to follow along during matches.',
    rating: 5
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    role: 'Fantasy Sports Veteran',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'I\'ve tried many fantasy cricket platforms, but CricIQ stands out with its variety of contests and quick payouts. Their customer support is also exceptional. Highly recommended!',
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who are winning big with CricIQ.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
          
          {/* Testimonial Card */}
          <motion.div 
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl mx-10"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-20 h-20 rounded-full object-cover border-2 border-primary"
              />
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonials[currentIndex].rating ? "text-primary fill-primary" : "text-gray-500"} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6 text-gray-200">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-white text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;