import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - CricIQ';
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">About CricIQ</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing fantasy cricket with cutting-edge technology and an unmatched gaming experience.
          </p>
        </motion.div>
        
        {/* Our Story */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded in 2022 by a team of cricket enthusiasts and tech innovators, CricIQ was born from a simple idea: to create the most engaging, fair, and rewarding fantasy cricket platform in India.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              What started as a small project quickly gained momentum as cricket fans across the country discovered our innovative approach to fantasy sports. Today, we're proud to have over 10 million registered users who trust CricIQ for their fantasy cricket experience.
            </p>
            <p className="text-lg text-gray-300">
              Our mission is to bring cricket fans closer to the game they love through technology, data analytics, and community engagement. We're committed to constant innovation, ensuring CricIQ remains at the forefront of fantasy sports.
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cricket match" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
        
        {/* Our Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="bg-gray-700 p-4 rounded-full inline-flex mb-6">
                <Shield size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-400">
                We operate with complete transparency and adhere to all legal guidelines. Fair play is at the core of everything we do.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="bg-gray-700 p-4 rounded-full inline-flex mb-6">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-400">
                We foster a vibrant community of cricket enthusiasts, bringing fans together through their shared passion for the game.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="bg-gray-700 p-4 rounded-full inline-flex mb-6">
                <Award size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in every aspect of our platform, constantly innovating to provide the best possible user experience.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Team */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team members here */}
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Vikram Singh</h3>
                <p className="text-primary mb-3">Founder & CEO</p>
                <p className="text-gray-400">
                  Cricket enthusiast and tech entrepreneur with over 15 years of experience in the gaming industry.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Ananya Sharma</h3>
                <p className="text-primary mb-3">Chief Technology Officer</p>
                <p className="text-gray-400">
                  Former national-level cricketer with a background in data science and machine learning.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Rajiv Mehta</h3>
                <p className="text-primary mb-3">Head of Product</p>
                <p className="text-gray-400">
                  Product visionary with extensive experience in gaming and sports applications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Achievements */}
        <motion.div 
          className="bg-gray-800 rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <p className="text-lg text-gray-300">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹500M+</div>
              <p className="text-lg text-gray-300">Prize Money Awarded</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-lg text-gray-300">App Store Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-lg text-gray-300">Customer Support</p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Recognition & Awards</h3>
            <ul className="space-y-4 max-w-2xl mx-auto">
              <li className="flex items-start space-x-3">
                <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" />
                <span>Best Fantasy Sports Platform - Indian Gaming Awards 2023</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" />
                <span>Most Innovative Gaming App - Tech Innovators Summit 2022</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" />
                <span>Excellence in Customer Satisfaction - Digital Experience Awards 2023</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" />
                <span>Top 10 Fastest Growing Tech Startups - Business Today, 2022</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;