"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboardclub",
    icon: "/assets/image/dashboard.svg",
    activeIcon: "/assets/image/dashboard-active.svg",
  },
  {
    name: "Players",
    href: "/club-players",
    icon: "/assets/image/notifications-login.svg",
    activeIcon: "/assets/image/notifications-active.svg",
  },
  {
    name: "Teams",
    href: "/club-teams",
    icon: "/assets/image/account.svg",
    activeIcon: "/assets/image/account-active.svg",
  },
  {
    name: "Management",
    href: "/club-management",
    icon: "/assets/image/subscription.svg",
    activeIcon: "/assets/image/subscription-active.svg",
  },
  {
    name: "Landing Page",
    href: "/landing-page-manager",
    icon: "/assets/image/billing.svg",
    activeIcon: "/assets/image/billing-active.svg",
  },
  {
    name: "Club Codes",
    href: "/club-codes",
    icon: "/assets/image/support.svg",
    activeIcon: "/assets/image/support-active.svg",
  },
  {
    name: "Reports",
    href: "/reports",
    icon: "/assets/image/report-menu-icon.svg",
    activeIcon: "/assets/image/report-menu-icon-active.svg",
  },
  {
    name: "Billing",
    href: "/billing-club",
    icon: "/assets/image/bill-menu-icon.svg",
    activeIcon: "/assets/image/bill-menu-icon-active.svg",
  },
  {
    name: "Settings",
    href: "/club-settings",
    icon: "/assets/image/settings.svg",
    activeIcon: "/assets/image/settings-active.svg",
  },
];

export default function ClubSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // ✅ AUTO COLLAPSE LOGIC
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1400) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize(); // first load check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside className={`msar-sidebar ${collapsed ? "is-collapsed" : ""}`}>
      {/* LOGO */}
      <div className="msar-logo">
        <Image
          src="/assets/image/logo-juggling.svg"
          alt="logo"
          width={60}
          height={60}
        />
      </div>

      {/* MENU */}
      <ul className="msar-menu">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.name} className={active ? "active" : ""}>
              <Link href={item.href}>
                <Image
                  src={active ? item.activeIcon : item.icon}
                  alt=""
                  width={22}
                  height={22}
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="msar-logout">
        <Image
          src="/assets/image/logout-icon.svg"
          alt=""
          width={18}
          height={18}
        />
        {!collapsed && <span>Log out</span>}
      </div>
      {/* TOGGLE */}
      <button
        className="msar-sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}>
        ☰
      </button>

      {/* LOGOUT */}
    </aside>
  );
}
