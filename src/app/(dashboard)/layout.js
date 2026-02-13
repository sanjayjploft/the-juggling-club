"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../(dashboard)/dashboard.css";
import { usePathname } from "next/navigation";
import Chatbot from "../../components/dashboard/Chatbot";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [showChat, setShowChat] = useState(false);

  // pages jahan special layout chahiye
  const noDashboardMainPages = [
    "/forgot-password",
    "/login",
    "/reset-password",
    "/signup",
    "/verify-email",
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
