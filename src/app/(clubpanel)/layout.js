"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../(dashboard)/dashboard.css";
import { usePathname } from "next/navigation";
import Chatbot from "../../components/dashboard/Chatbot";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [showChat, setShowChat] = useState(false);

  // pages jahan dashboard-main nahi chahiye
  const noDashboardMainPages = [
    "/brand-identity",
    "/club-information",
    "/contact-information",
    "/subscription-tier",
    "/terms-confirmation",
    "/welcome-juggling-club",
  ];

  const shouldRemoveClass = noDashboardMainPages.includes(pathname);

  return (
    <main className={shouldRemoveClass ? "" : "dashboard-main"}>
      {children}
      <Chatbot />
      <button onClick={() => setShowChat(true)}>Open Chatbot</button>

      {showChat && <Chatbot showButton={false} />}
    </main>
  );
}
