"use client";

import { useState } from "react";
import FaqAccordion from "./FaqAccordion";

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
      <div
        role="tablist"
        style={{ display: "block", gap: "12px", textAlign: "center" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
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
              fontWeight: "800",
              color: activeTab === tab.id ? "#FF073A" : "#03202F",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        style={{ padding: "16px 0" }}
      >
        <FaqAccordion />
      </div>
    </div>
  );
}
