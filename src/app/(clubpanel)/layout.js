"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../(dashboard)/dashboard.css";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

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
    </main>
  );
}
