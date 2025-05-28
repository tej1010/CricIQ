import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - CricIQ';
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8 text-primary">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: June 10, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              At CricIQ, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fantasy cricket platform.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using CricIQ, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
            
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>
              We may collect the following personal information when you register for an account, participate in contests, or use our services:
            </p>
            <ul>
              <li>Name, email address, phone number, and date of birth</li>
              <li>Profile information such as username and password</li>
              <li>Financial information, including payment details and transaction history</li>
              <li>Identity verification documents, such as government-issued ID</li>
              <li>Social media information when you connect your social media accounts</li>
            </ul>
            
            <h3>2.2 Usage Information</h3>
            <p>
              We automatically collect certain information about how you interact with CricIQ, including:
            </p>
            <ul>
              <li>Device information, such as your IP address, browser type, and operating system</li>
              <li>Usage patterns, including pages visited, time spent on the platform, and actions taken</li>
              <li>Location information based on your IP address or GPS data (if permitted)</li>
              <li>Log data, such as access times and referral URLs</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing transactions and managing your account</li>
              <li>Verifying your identity and preventing fraud</li>
              <li>Communicating with you about your account, contests, and promotions</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Complying with legal obligations and resolving disputes</li>
              <li>Personalizing content and recommendations</li>
            </ul>
            
            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Financial institutions to process payments</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners for joint promotions (with your consent)</li>
              <li>Other users, but only limited information as part of contest leaderboards</li>
            </ul>
            <p>
              We do not sell your personal information to third parties for marketing purposes.
            </p>
            
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>6. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing consent for processing your information</li>
              <li>Objecting to certain processing activities</li>
              <li>Requesting a copy of your personal information</li>
              <li>Opting out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
            
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on CricIQ. These technologies help us understand how you use our platform, remember your preferences, and deliver personalized content.
            </p>
            <p>
              You can manage your cookie preferences through your browser settings. However, disabling cookies may affect the functionality of CricIQ.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              CricIQ is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
            </p>
            
            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We will take appropriate measures to ensure that your personal information remains protected in accordance with this Privacy Policy.
            </p>
            
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our platform and updating the "Last updated" date.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              Email: privacy@criciq.com<br />
              Address: 123 Fantasy Lane, Cricket City, CC 12345, India
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;