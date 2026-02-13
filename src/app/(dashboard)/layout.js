"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../(dashboard)/dashboard.css";
import Chatbot from "../../components/dashboard/Chatbot";

export default function DashboardLayout({ children }) {
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Back/Forward cache se aaya page
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);
  return (
    <>
      <main className="dashboard-main">
        {children}
        <Chatbot />
        <button onClick={() => setShowChat(true)}>Open Chatbot</button>

        {showChat && <Chatbot showButton={false} />}
      </main>
    </>
  );
}
