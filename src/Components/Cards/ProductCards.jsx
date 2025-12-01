import React from 'react';
import "./productcards.css";

const ProductCards = () => {
  const items = [
    { 
      title: "Payment Gateway", 
      desc: "Accept payments online easily" 
    },
    { 
      title: "POS Billing", 
      desc: "Smart POS machines" 
    },
    { 
      title: "Subscriptions", 
      desc: "Automate recurring payments" 
    },
    { 
      title: "Payouts", 
      desc: "Send money instantly" 
    },
    { 
      title: "Invoicing", 
      desc: "Send GST invoices fast" 
    },
    { 
      title: "UPI AutoPay", 
      desc: "Next-gen autopay" 
    }
  ];

  return (
    <section className="products">
      <h2>Our Powerful Features</h2>

      <div className="product-grid">
        {items.map((x, i) => (
          <div key={i} className="product-card">
            <h3>{x.title}</h3>
            <p>{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCards;



