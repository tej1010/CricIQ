import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const RefundPage = () => {
  useEffect(() => {
    document.title = 'Refund Policy - CricIQ';
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
          <h1 className="text-3xl font-bold mb-8 text-primary">Refund Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: June 10, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              This Refund Policy outlines the terms and conditions for refunds on CricIQ. We strive to ensure transparency and fairness in all our transactions. Please read this policy carefully to understand your rights and our obligations regarding refunds.
            </p>
            
            <h2>2. Contest Entry Fees</h2>
            <p>
              Once you have entered a contest by paying the entry fee, the following conditions apply:
            </p>
            <ul>
              <li>
                <strong>Cancelled Contests:</strong> If CricIQ cancels a contest before it begins, the entry fee will be automatically refunded to your CricIQ wallet within 24 hours.
              </li>
              <li>
                <strong>Postponed Matches:</strong> If a cricket match is postponed, the corresponding contests will remain active until the match is played. No refunds will be issued for postponed matches unless the postponement exceeds 72 hours, in which case the contest may be cancelled and entry fees refunded.
              </li>
              <li>
                <strong>Abandoned/No Result Matches:</strong> If a match is abandoned or results in no result due to weather or other circumstances, and if less than 5 overs have been played in each innings, the contest will be cancelled and entry fees refunded. If more than 5 overs have been played, the contest will be settled based on the official result or Duckworth-Lewis method.
              </li>
            </ul>
            
            <h2>3. Deposits</h2>
            <p>
              Refunds for deposits made to your CricIQ wallet are subject to the following conditions:
            </p>
            <ul>
              <li>
                <strong>Unused Deposits:</strong> Refunds for unused deposits may be requested within 48 hours of making the deposit. A processing fee of 2% may be deducted from the refund amount.
              </li>
              <li>
                <strong>Technical Errors:</strong> If a deposit fails due to technical errors but your account is still debited, the amount will be automatically refunded to your source account within 5-7 business days. If you do not receive the refund within this timeframe, please contact our customer support.
              </li>
              <li>
                <strong>Double Charges:</strong> In case of double charges for a single deposit, the duplicate amount will be refunded to your source account within 5-7 business days. Please provide transaction details when reporting such issues.
              </li>
            </ul>
            
            <h2>4. Promotional Credits and Bonuses</h2>
            <p>
              Promotional credits, bonuses, and cashback offers are subject to the following refund conditions:
            </p>
            <ul>
              <li>Promotional credits and bonuses are non-refundable and cannot be withdrawn as cash.</li>
              <li>Promotional credits can only be used to enter contests on CricIQ.</li>
              <li>Unused promotional credits will expire as per the terms specified at the time of issuance.</li>
            </ul>
            
            <h2>5. Subscription Services</h2>
            <p>
              For premium subscription services offered by CricIQ:
            </p>
            <ul>
              <li>
                <strong>Cancellation Within 7 Days:</strong> If you cancel your subscription within 7 days of purchase and have not used any premium features, you are eligible for a full refund.
              </li>
              <li>
                <strong>Cancellation After 7 Days:</strong> No refunds will be provided for subscription cancellations after 7 days.
              </li>
              <li>
                <strong>Auto-Renewal:</strong> You can cancel auto-renewal at any time, but no refund will be issued for the current billing period.
              </li>
            </ul>
            
            <h2>6. Refund Process</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol>
              <li>Log in to your CricIQ account.</li>
              <li>Navigate to the "Help & Support" section.</li>
              <li>Select "Request a Refund" and fill out the refund request form.</li>
              <li>Provide all necessary details, including transaction ID, date, and reason for the refund.</li>
              <li>Submit the form and wait for our customer support team to review your request.</li>
            </ol>
            <p>
              We will process valid refund requests within 5-7 business days. The refund will be issued to the original payment method used for the transaction.
            </p>
            
            <h2>7. Refund Rejection</h2>
            <p>
              CricIQ reserves the right to reject refund requests under the following circumstances:
            </p>
            <ul>
              <li>Violation of CricIQ's Terms and Conditions</li>
              <li>Suspicious or fraudulent activity</li>
              <li>Abuse of refund policy</li>
              <li>Requests made outside the specified timeframes</li>
            </ul>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions regarding our Refund Policy or need assistance with a refund request, please contact us at:
            </p>
            <p>
              Email: refunds@criciq.com<br />
              Customer Support: +1 (555) 123-4567<br />
              Address: 123 Fantasy Lane, Cricket City, CC 12345, India
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPage;