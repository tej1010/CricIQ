import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Zap, Coins, Shield } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp size={24} className="text-primary" />,
    title: 'Live Score Updates',
    description: 'Get real-time updates and live scores for all ongoing matches.'
  },
  {
    icon: <Award size={24} className="text-primary" />,
    title: 'Multiple Contests',
    description: 'Join various contests with different entry fees and prize pools.'
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: 'Create Private Leagues',
    description: 'Challenge your friends by creating private leagues and contests.'
  },
  {
    icon: <Zap size={24} className="text-primary" />,
    title: 'Smart Analytics',
    description: 'Make informed decisions with our advanced player statistics and analytics.'
  },
  {
    icon: <Coins size={24} className="text-primary" />,
    title: 'Secure Payments',
    description: 'Fast and secure payment processing for deposits and withdrawals.'
  },
  {
    icon: <Shield size={24} className="text-primary" />,
    title: 'Verified Fair Play',
    description: 'Our platform ensures fair play and follows all legal guidelines.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-primary">CricIQ</span>?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced fantasy cricket platform with features designed to enhance your gaming experience.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 p-8 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              variants={item}
            >
              <div className="p-4 bg-gray-800 inline-flex rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;