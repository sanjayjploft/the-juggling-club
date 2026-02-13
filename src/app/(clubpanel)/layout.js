"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../(dashboard)/dashboard.css";
import { usePathname } from "next/navigation";
import Chatbot from "../../components/dashboard/Chatbot";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [showChat, setShowChat] = useState(false);

  // pages jahan special layout chahiye
  const noDashboardMainPages = [
    "/brand-identity",
    "/club-information",
    "/contact-information",
    "/subscription-tier",
    "/terms-confirmation",
    "/welcome-juggling-club",
  ];

  const isSpecialPage = noDashboardMainPages.includes(pathname);

  return (
    <main
      className={`
        ${!isSpecialPage ? "dashboard-main" : ""}
        ${isSpecialPage ? "onboarding-pages" : ""}
      `}>
      {children}

      <Chatbot />
      {showChat && <Chatbot showButton={false} />}
    </main>
  );
}
