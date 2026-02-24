"use client"; 
import "../(dashboard)/dashboard.css";
import { usePathname } from "next/navigation";
import Chatbot from "../../components/dashboard/Chatbot";

export default function DashboardLayout({ children }) {
  const pathname = usePathname(); 
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
     
    </main>
  );
}
