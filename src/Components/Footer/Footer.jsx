import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
     
      <div className="footer-col about-pay">
        <div className="footer-logo">
          <h1>LOGO</h1>
        </div>
        <p>
          Razorpay is the only payments solution in India that allows businesses
          to accept, process and disburse payments with its product suite. It
       gives you access to all payment modes including credit card, debit
          card, netbanking, UPI and major wallets.
        </p>
        <p>
          RazorpayX supercharges your business banking experience with automated
          payouts, payroll and powerful financial dashboards.
        </p>
        <p>
          Disclaimer: RazorpayX powered current accounts and cards are provided
          by RBI licensed partner banks and are governed by applicable
          regulations.
        </p>
      </div>

      <div className="footer-col accept-pay">
        <h2>ACCEPT PAYMENTS</h2>
        <nav className="footer-links">
          <Link to="/">Payment Gateway</Link>
          <Link to="/">Payment Pages</Link>
          <Link to="/">Optimizer</Link>
          <Link to="/">QR Codes</Link>
          <Link to="/">Subscriptions</Link>
          <Link to="/">Small Collect</Link>
          <Link to="/">Instant Settlement</Link>
        </nav>

        <h2>PAYROLL</h2>
        <nav className="footer-links">
          <Link to="/">RazorpayX Payroll</Link>
        </nav>

        <h2>BECOME A PARTNER</h2>
        <nav className="footer-links">
          <Link to="/">Refer and Earn</Link>
          <Link to="/">Onboarding APIs</Link>
        </nav>

        <h2>MORE</h2>
        <nav className="footer-links">
          <Link to="/">Route</Link>
          <Link to="/">Invoices</Link>
          <Link to="/">Freelancer Payments</Link>
          <Link to="/">International Payments</Link>
          <Link to="/">Flash Checkout</Link>
          <Link to="/">UPI</Link>
          <Link to="/">Checkout Demo</Link>
          <Link to="/">ePOS</Link>
        </nav>
      </div>

      <div className="footer-col business-pay">
        <h2>BANKING PLUS</h2>
        <nav className="footer-links">
          <Link to="/">RazorpayX</Link>
          <Link to="/">Source to pay</Link>
          <Link to="/">Current Accounts</Link>
          <Link to="/">Payouts</Link>
          <Link to="/">Payout Links</Link>
          <Link to="/">Corporate Credit Card</Link>
        </nav>

        <h2>DEVELOPERS</h2>
        <nav className="footer-links">
          <Link to="/">Docs</Link>
          <Link to="/">Integrations</Link>
          <Link to="/">API Reference</Link>
        </nav>

        <h2>RESOURCES</h2>
        <nav className="footer-links">
          <Link to="/">Blog</Link>
          <Link to="/">Learn</Link>
          <Link to="/">Customer Stories</Link>
          <Link to="/">Events</Link>
          <Link to="/">Chargeback Guide</Link>
          <Link to="/">Settlement Guide</Link>
        </nav>

        <h2>SOLUTIONS</h2>
        <nav className="footer-links">
          <Link to="/">Education</Link>
          <Link to="/">E-commerce</Link>
          <Link to="/">SaaS</Link>
          <Link to="/">BFSI</Link>
        </nav>

        <h2>FREE TOOLS</h2>
        <nav className="footer-links">
          <Link to="/">GST Calculator</Link>
          <Link to="/">GST Number Search</Link>
          <Link to="/">GST Search by PAN</Link>
          <Link to="/">ROI Calculator</Link>
          <Link to="/">CAGR Calculator</Link>
        </nav>
      </div>

      <div className="footer-col about-cmp">
        <h2>COMPANY</h2>
        <nav className="footer-links">
          <Link to="/">About Us</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Grievance Redressal</Link>
          <Link to="/">Responsible Disclosure</Link>
          <Link to="/">Partners</Link>
          <Link to="/">White papers</Link>
          <Link to="/">Corporate Information</Link>
        </nav>

        <h2>HELP & SUPPORT</h2>
        <nav className="footer-links">
          <Link to="/">Support</Link>
          <Link to="/">Knowledge base</Link>
        </nav>

        <h2>REGD. OFFICE ADDRESS</h2>
        <pre>
          Razorpay Software Limited,
          1st Floor, SJR Cyber,
          Adugodi, Bengaluru - 560030,
          Karnataka, India

          © Razorpay 2025  
          All Rights Reserved.

          Razorpay Software Limited is an RBI authorized Online Payment Aggregator.
        </pre>
      </div>

      <div className="footer-bottom">
        <p>copyright @ 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
