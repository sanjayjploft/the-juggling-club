"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../(dashboard)/dashboard.css";
import Chatbot from "../../components/dashboard/Chatbot";

export default function DashboardLayout({ children }) {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <main className="dashboard-main">
        {children}
        <Chatbot />

        {showChat && <Chatbot showButton={false} />}
      </main>
    </>
  );
}
