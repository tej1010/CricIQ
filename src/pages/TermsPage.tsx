import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions - CricIQ';
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
          <h1 className="text-3xl font-bold mb-8 text-primary">Terms and Conditions</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: June 10, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to CricIQ ("we," "our," or "us"). By accessing or using our website, mobile application, or any of our services, you agree to be bound by these Terms and Conditions ("Terms"). Please read these Terms carefully before using our services.
            </p>
            
            <h2>2. Definitions</h2>
            <p>
              <strong>"CricIQ"</strong>: Refers to our fantasy cricket platform, including our website, mobile applications, and all services provided therein.
            </p>
            <p>
              <strong>"User"</strong>: Any individual who accesses or uses CricIQ.
            </p>
            <p>
              <strong>"Content"</strong>: All information, text, graphics, photos, videos, and other materials uploaded, downloaded, or appearing on CricIQ.
            </p>
            
            <h2>3. Eligibility</h2>
            <p>
              To use CricIQ, you must be at least 18 years old and reside in a jurisdiction where fantasy sports are legal. By using CricIQ, you represent and warrant that you meet these eligibility requirements.
            </p>
            <p>
              We reserve the right to verify your eligibility at any time and to suspend or terminate your account if we have reason to believe you do not meet our eligibility requirements.
            </p>
            
            <h2>4. Account Registration</h2>
            <p>
              To access certain features of CricIQ, you must create an account. When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with this section.
            </p>
            
            <h2>5. Fantasy Contests and Payments</h2>
            <p>
              CricIQ offers various fantasy cricket contests with different entry fees and prize pools. By participating in these contests, you agree to abide by the specific rules of each contest.
            </p>
            <p>
              All payments and withdrawals are processed in accordance with our payment policies. We reserve the right to verify your identity before processing any withdrawals. All applicable taxes on prizes are the sole responsibility of the user.
            </p>
            
            <h2>6. Prohibited Conduct</h2>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul>
              <li>Using CricIQ for any illegal purpose or in violation of any laws</li>
              <li>Creating multiple accounts or sharing accounts</li>
              <li>Using automated systems or software to extract data from CricIQ</li>
              <li>Impersonating another person or entity</li>
              <li>Engaging in any form of collusion or match-fixing</li>
              <li>Using insider information to gain an unfair advantage</li>
              <li>Harassing, threatening, or intimidating other users</li>
            </ul>
            
            <h2>7. Intellectual Property</h2>
            <p>
              All content, features, and functionality of CricIQ, including but not limited to text, graphics, logos, and software, are owned by CricIQ or its licensors and are protected by intellectual property laws.
            </p>
            <p>
              You may not copy, modify, distribute, sell, or lease any part of CricIQ without our prior written consent.
            </p>
            
            <h2>8. Privacy</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using CricIQ, you agree to our Privacy Policy.
            </p>
            
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CricIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of CricIQ.
            </p>
            
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on CricIQ and updating the "Last updated" date. Your continued use of CricIQ after such changes constitutes your acceptance of the revised Terms.
            </p>
            
            <h2>11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for any reason, including but not limited to a violation of these Terms.
            </p>
            
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            
            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@criciq.com<br />
              Address: 123 Fantasy Lane, Cricket City, CC 12345, India
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;