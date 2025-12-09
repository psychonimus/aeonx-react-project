export default function TermsOfUse() {
  return (
    <>
      <style>{`
        
        .terms-container {
          
          margin: 7rem auto;
          padding: 40px 20px;
          background-color: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .terms-header {
        
          margin-bottom: 50px;
          padding-bottom: 30px;
          border-bottom: 3px solid #0066cc;
        }

        .terms-header h1 {
          font-size: 2.5rem;
          color: #0066cc;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .terms-intro {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 40px;
          padding: 20px;
          background-color: #f0f7ff;
          border-left: 4px solid #0066cc;
        }

        .terms-section {
          margin-bottom: 45px;
        }

        .terms-section h2 {
          font-size: 1.9rem;
          color: #0066cc;
          margin-bottom: 25px;
          padding-bottom: 12px;
          border-bottom: 2px solid #e0e0e0;
        }

        .terms-item {
          margin-bottom: 30px;
          padding-left: 20px;
          border-left: 3px solid #e8f4ff;
        }

        .terms-item h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .terms-item p {
          margin-bottom: 12px;
          color: #555;
          line-height: 1.8;
        }

        .terms-item ul {
          margin: 15px 0 15px 25px;
          list-style-type: disc;
        }

        .terms-item li {
          margin-bottom: 10px;
          color: #555;
          line-height: 1.7;
        }

        .subsection-title {
          font-weight: 600;
          color: #444;
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .highlight-box {
          background-color: #fff9e6;
          border-left: 4px solid #ffc107;
          padding: 20px;
          margin: 25px 0;
        }

        .highlight-box p {
          margin: 0;
          color: #666;
        }

        .info-box {
          background-color: #e8f5e9;
          border-left: 4px solid #4caf50;
          padding: 20px;
          margin: 25px 0;
        }

        .info-box p {
          margin-bottom: 8px;
          color: #555;
        }

        .info-box p:last-child {
          margin-bottom: 0;
        }

        .warning-box {
          background-color: #ffebee;
          border-left: 4px solid #f44336;
          padding: 20px;
          margin: 25px 0;
        }

        .warning-box p {
          margin: 0;
          color: #555;
          font-weight: 500;
        }

        .contact-section {
          background-color: #f0f7ff;
          padding: 35px;
          border-radius: 8px;
          margin-top: 50px;
        }

        .contact-section h3 {
          color: #0066cc;
          font-size: 1.5rem;
          margin-bottom: 20px;
          
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 500px;
          
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-label {
          font-weight: 600;
          color: #333;
          min-width: 80px;
        }

        .contact-value {
          color: #555;
        }

        .contact-value a {
          color: #0066cc;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-value a:hover {
          text-decoration: underline;
        }

        .divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #e0e0e0, transparent);
          margin: 40px 0;
        }

        @media (max-width: 768px) {
          .terms-container {
            padding: 20px 15px;
          }

          .terms-header h1 {
            font-size: 2rem;
          }

          .terms-section h2 {
            font-size: 1.6rem;
          }

          .terms-item {
            padding-left: 15px;
          }

          .terms-item h3 {
            font-size: 1.15rem;
          }

          .contact-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-label {
            min-width: auto;
          }
        }
      `}</style>

      <div className="container terms-container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
        </div>

        <div className="terms-intro">
          <p>
            Please read these Terms & Conditions carefully before using our website or services. By accessing or using this website, you agree to be bound by these terms. If you do not agree with any part of these terms, please discontinue use of our website immediately.
          </p>
        </div>

        <div className="terms-section">
          <h2>Terms & Conditions</h2>

          <div className="terms-item">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to comply with all Terms & Conditions outlined here. If you disagree with any part of these terms, you must not use this website.
            </p>
          </div>

          <div className="terms-item">
            <h3>2. User Obligations</h3>
            <ul>
              <li>Users must provide accurate, complete, and updated information during transactions.</li>
              <li>You agree not to misuse the website by intentionally introducing viruses, Trojans, worms, or other harmful materials.</li>
              <li>Unauthorized access or attempts to access secure portions of the website are strictly prohibited.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>3. Services & Payment</h3>
            <ul>
              <li>Payments for services and products are processed securely through Razorpay. Users explicitly authorize Razorpay and this website to handle transactions as per Razorpay's policies.</li>
              <li>The website reserves the right to modify, temporarily suspend, or permanently discontinue any services without prior notice.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>4. Pricing & Transaction Fees</h3>
            <ul>
              <li>Prices listed are inclusive of applicable taxes unless explicitly stated otherwise.</li>
              <li>Razorpay transaction fees, if any, will be displayed at checkout, and you acknowledge your responsibility to review these charges before payment.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>5. Intellectual Property Rights</h3>
            <p>
              All content, trademarks, logos, and intellectual property rights available on this website are owned exclusively by our company or licensors. Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div className="terms-item">
            <h3>6. Privacy & Security</h3>
            <ul>
              <li>Razorpay handles your payment details securely. Our website does not store sensitive payment information.</li>
              <li>For more details, review our comprehensive Privacy Policy regarding how your data is collected, used, and secured.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>7. Limitation of Liability</h3>
            <ul>
              <li>We are not liable for any interruptions, delays, unauthorized access, or technical issues encountered during your use of the website or payment processing.</li>
              <li>Our maximum liability to users is limited to the amount paid by the user for the relevant transaction.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>8. Third-Party Links & Services</h3>
            <p>
              Our website may include links or references to third-party websites. We are not responsible for the content, privacy policies, or practices of third-party websites.
            </p>
          </div>

          <div className="terms-item">
            <h3>9. Governing Law & Dispute Resolution</h3>
            <ul>
              <li>These terms are governed by the laws applicable in Mumbai.</li>
              <li>Any disputes arising under these terms should first be addressed through direct negotiation. Unresolved disputes shall be resolved by binding arbitration or judicial proceedings within the jurisdiction of Mumbai.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>10. Amendments & Updates</h3>
            <p>
              We reserve the right to amend these Terms & Conditions at any time. Users should regularly review these terms for updates.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="terms-section">
          <h2>Refund & Cancellation Policy</h2>

          <div className="terms-item">
            <h3>1. Cancellation Policy</h3>
            <ul>
              <li>Orders may be cancelled prior to payment confirmation. Post-payment cancellations must be communicated via email within 24 hours of the transaction.</li>
              <li>Cancellations after the initiation of service delivery are evaluated on a case-by-case basis and may not qualify for a refund.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>2. Refund Policy</h3>
            <p>
              Refunds will be considered in accordance with the criteria outlined below and, if approved, processed through Razorpay to the original payment source within 7-14 business days.
            </p>
          </div>

          <div className="terms-item">
            <h3>3. Criteria for Refunds</h3>
            
            <div className="info-box">
              <p className="subsection-title">Eligible Circumstances:</p>
              <ul>
                <li>Duplicate or erroneous transactions clearly documented and reported immediately.</li>
                <li>Service not provided due to administrative, technical, or delivery failures.</li>
                <li>Cancellation within the stipulated timeframe before service commencement.</li>
              </ul>
            </div>

            <div className="warning-box">
              <p className="subsection-title">Ineligible Circumstances:</p>
              <ul style={{ marginTop: '10px', marginBottom: '0' }}>
                <li>User dissatisfaction unrelated to the stated scope or quality of service.</li>
                <li>Requests submitted after service delivery or beyond the allowed cancellation period.</li>
                <li>Change of mind after purchase or acceptance of service delivery.</li>
              </ul>
            </div>
          </div>

          <div className="terms-item">
            <h3>4. Refund Request Procedure</h3>
            <ul>
              <li>Submit refund requests via email detailing the transaction ID, date, reason for the refund, and supporting documents.</li>
              <li>Refund requests will be acknowledged within 48 hours, with final resolution communicated promptly after review.</li>
            </ul>
          </div>

          <div className="terms-item">
            <h3>5. Partial Refunds</h3>
            <p>
              Partial refunds may be granted at our sole discretion for services partially delivered or under exceptional circumstances.
            </p>
          </div>

          <div className="terms-item">
            <h3>6. Policy Amendments</h3>
            <p>
              We reserve the right to modify this Refund & Cancellation Policy without prior notice. Users should review this policy periodically for updates.
            </p>
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact Information</h3>
          <p style={{ marginBottom: '20px', color: '#555' }}>
            For cancellations, refund requests, transaction queries, or general inquiries, reach us at:
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">
                <a href="mailto:support@aeonx.digital">support@aeonx.digital</a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">
                <a href="tel:022-66221640">022-66221640</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}