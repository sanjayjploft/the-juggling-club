import React from "react";
import Tabs from "../components/Tabs";

export default function Page() {
  return (
    <main className="page">
      <div className="section">
        <div className="container faq-tabs">
          <h1>Frequently Asked Questions</h1>
            <Tabs />          
        </div>
      </div>
    </main>
  );
}
