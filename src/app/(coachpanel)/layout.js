"use client"; 
import "../(dashboard)/dashboard.css";
import { usePathname } from "next/navigation";
import Chatbot from "../../components/dashboard/Chatbot";

export default function DashboardLayout({ children }) {
  const pathname = usePathname(); 


  const noDashboardMainPages = ["/signup-coach"];

  const shouldRemoveClass = noDashboardMainPages.includes(pathname);

  return (
    <main className={shouldRemoveClass ? "" : "dashboard-main"}>
      {children}
      <Chatbot />

      
    </main>
  );
}
