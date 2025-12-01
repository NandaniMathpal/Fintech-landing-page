import { useEffect } from "react";
import StackCard from "./StackCard";
import "./Stacked.css";
import "./stackcard.css";

const StackedSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".stack-card");

    window.addEventListener("scroll", () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const progress = rect.top / window.innerHeight;

        if (progress < 0) {
          card.style.transform = "scale(0.92)";
          card.style.opacity = 0.7;
        } else {
          card.style.transform = "scale(1)";
          card.style.opacity = 1;
        }
      });
    });
  }, []);

  return (
    <div className="stack-wrapper">

      {/* PAGE 1 */}
      <section className="stack-card">
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>

        <h2 className="stack-title">Accept Payments</h2>

        <div className="stack-inner-grid">
          <StackCard
            img="https://framerusercontent.com/images/JmFSeum96SLzvMFy0l45hm4J44M.webp"
            title="Create Payment Links Instantly"
            desc="Generate shareable payment links for customers—no website or app required. Track status, collect multiple UPI / card / wallet payments in real-time."
          />

          <StackCard
            img="https://www.casefox.com/new-lp/images/online-payment-cf-min.webp"
            title="One-Click Smart Checkout"
            desc="Provide a seamless checkout experience with auto-filled customer details, saved cards, and all major payment modes—UPI, Cards, Wallets, Pay-Later."
          />

          <StackCard
            img="https://carbonateapp.com/wp-content/uploads/2020/10/PSG-%E2%80%93-3-300x295@2x.png"
            title="Automated Subcription Billing"
            desc="Manage recurring payments with automatic retries, mandate creation, invoice scheduling, and real-time billing insights."
          />
        </div>
      </section>


      {/* PAGE 2 */}
      <section className="stack-card">
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>

        <h2 className="stack-title">Automate Payouts</h2>

        <div className="stack-inner-grid">
          <StackCard 
            img="https://framerusercontent.com/images/jVbRihcBbLavZtJFP0JMQCEL9ic.webp"
            title="Disburse Payments at Scale"
            desc="Upload a list or integrate via API to send thousands of UPI/Bank payouts instantly. Ideal for vendor payments, delivery partner earnings, and incentives."
          />

          <StackCard
            img="https://framerusercontent.com/images/0ano7RoWusrTbEMA5awkWosjK3o.png"
            title="Instant Refund Processing"
            desc="Trigger instant refunds for failed or canceled transactions. Improve customer experience with automated workflows and refund tracking."
          />

          <StackCard 
            img="https://techblast.co.uk/wp-content/uploads/sites/3/2022/08/Capital-On-Tap.jpg"
            title="Unified Payout Ledger"
            desc="Track outgoing payments, fees, deductions, and settlements in a clean dashboard with downloadable statements and audit-ready logs."
          />
        </div>
      </section>


      {/* PAGE 3 */}
      <section className="stack-card">
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>

        <h2 className="stack-title">Manage Business Finance</h2>

        <div className="stack-inner-grid">
          <StackCard 
            img="https://framerusercontent.com/images/viB9thn4rAyZ9RGMXGy1lbvlWs.webp"
            title="Real-Time Revenue Analytics"
            desc="Monitor transactions, payment success rates, settlement cycles, and customer purchasing patterns—all in one analytics dashboard."
          />

          <StackCard
            img="https://framerusercontent.com/images/VXAd05JEl4oxCIetZENhpjV32pM.png"
            title="Auto-Reconciliation With Virtual Accounts"
            desc="Assign unique virtual UPI/Bank accounts to each customer for automatic payment matching and error-free reconciliation."
          />

          <StackCard 
            img="https://framerusercontent.com/images/BYutblMFbMxB80J6U4H4Kobvhg.png"
            title="Instant Working Capital"
            desc="Get short-term credit based on transaction volume, with quick onboarding and flexible repayment—perfect for cash-flow management."
          />
        </div>
      </section>

    </div>
  );
}

export default StackedSection;