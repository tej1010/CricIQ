import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Cuboid as Android, Play } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-primary">Fantasy Cricket</span> Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Download the CricIQ app now and join millions of cricket fans creating their dream teams. Get started in minutes and compete for amazing prizes!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
          
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
              <div className="bg-gradient-to-r from-primary/10 to-primary/30 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">Download Now and Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="bg-primary text-gray-900 rounded-full p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>₹100 Bonus on First Deposit</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="bg-primary text-gray-900 rounded-full p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Free Entry to Beginner Contests</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="bg-primary text-gray-900 rounded-full p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Exclusive Tournament Access</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-400 mb-2">Trusted by over 10 million cricket fans</p>
                <div className="flex justify-center space-x-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple_Inc._logo.svg/320px-Apple_Inc._logo.svg.png" alt="Apple" className="h-8 opacity-50" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/320px-Android_robot.svg.png" alt="Android" className="h-8 opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;