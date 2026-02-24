"use client";

import { useState } from "react";
import { playerFaqs } from "../constants/faqData";

export default function FaqAccordion({ items = playerFaqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      {items.map((faq, index) => (
        <div
          key={faq.id || index}
          style={{
            border: "1px solid #EAEAEA",
            padding: "20px",
            borderRadius: "10px",
            fontFamily: "Avenir",
            marginBottom: "20px",
          }}>
          <button
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
            style={{
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              fontSize: "16.5px",
              fontFamily: "Avenir",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              padding: "0",
              fontWeight: openIndex === index ? "800" : "400",
              color: "#03202F",
            }}>
            {faq.question}
            <span aria-hidden="true">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <p style={{ marginTop: "10px", color: "#000", marginBottom: "0" }}>
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
