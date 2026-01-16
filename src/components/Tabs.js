"use client";

import { useState } from "react";
import FaqAccordion from "../components/FaqAccordion";

const tabs = [
  { id: "tab1", label: "Players" },
  { id: "tab2", label: "Parents" },
  { id: "tab3", label: "Coaches" },
  { id: "tab4", label: "Clubs" },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      {/* Tabs Header */}
      <div style={{ display: "block", gap: "12px", textAlign: "center" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 16px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontFamily: "Avenir",
              fontSize: "16px",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #FF073A"
                  : "2px solid transparent",
              fontWeight: activeTab === tab.id ? "800" : "800",
              color: activeTab === tab.id ? "#FF073A" : "#03202F",
            }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div style={{ padding: "16px 0" }}>
        {activeTab === "tab1" && (
          <p>
            <FaqAccordion />
          </p>
        )}
        {activeTab === "tab2" && (
          <p>
            <FaqAccordion />
          </p>
        )}
        {activeTab === "tab3" && (
          <p>
            <FaqAccordion />
          </p>
        )}
        {activeTab === "tab4" && (
          <p>
            <FaqAccordion />
          </p>
        )}
      </div>
    </div>
  );
}
