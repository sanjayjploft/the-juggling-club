"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I upload a video?",
    answer:
      "You’ll receive feedback to help you improve, and your next recommended skills unlock so you always know what to work on next.",
  },
  {
    question: "What happens after I complete a skill?",
    answer:
      "You’ll receive feedback to help you improve, and your next recommended skills unlock so you always know what to work on next.",
  },
  {
    question: "How do I upload a video?",
    answer:
      "You’ll receive feedback to help you improve, and your next recommended skills unlock so you always know what to work on next.",
  },
  {
    question: "How do I upload a video?",
    answer:
      "You’ll receive feedback to help you improve, and your next recommended skills unlock so you always know what to work on next.",
  },
  {
    question: "How do I upload a video?",
    answer:
      "You’ll receive feedback to help you improve, and your next recommended skills unlock so you always know what to work on next.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #EAEAEA",
            padding: "20px",
            borderRadius: "10px",
            fontFamily: "Avenir",
            marginBottom: "20px",
          }}>
          <button
            onClick={() => toggleFAQ(index)}
            style={{
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              fontSize: "16.5px",
              fontFamily: "Avenir",
              fontWeight: "800",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              padding: "0",
              fontWeight: openIndex === index ? "800" : "400",
              color: openIndex === index ? "#03202F" : "#03202F",
            }}>
            {faq.question}
            <span>{openIndex === index ? "−" : "+"}</span>
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
