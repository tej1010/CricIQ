import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play, Cuboid as Android } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#EEC76A_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build Your <span className="text-primary">Dream Team</span> &<br />
              Win Big!
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Join millions of cricket fans in India's fastest growing fantasy cricket platform.
              Create your perfect team and compete for glory!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#" className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-gray-900 font-medium py-3 px-6 rounded-full transition-colors">
                <Apple size={20} />
                <span>Download for iOS</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
                <Android size={20} />
                <span>Download for Android</span>
              </a>
              <a href="#" className="flex items-center justify-center space-x-2 border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-6 rounded-full transition-colors">
                <Play size={20} />
                <span>Play on Web</span>
              </a>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cricket player in action" 
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;