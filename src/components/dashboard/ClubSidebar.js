"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "/assets/image/dashboard.svg",
    activeIcon: "/assets/image/dashboard-active.svg",
  },
  {
    name: "Players",
    href: "/players",
    icon: "/assets/image/notifications-login.svg",
    activeIcon: "/assets/image/notifications-active.svg",
  },
  {
    name: "Teams",
    href: "/teams",
    icon: "/assets/image/account.svg",
    activeIcon: "/assets/image/account-active.svg",
  },
  {
    name: "Management",
    href: "/management",
    icon: "/assets/image/subscription.svg",
    activeIcon: "/assets/image/subscription-active.svg",
  },
  {
    name: "Landing Page",
    href: "/landing-page",
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
    icon: "/assets/image/settings.svg",
    activeIcon: "/assets/image/settings-active.svg",
  },
  {
    name: "Billing",
    href: "/billing",
    icon: "/assets/image/settings.svg",
    activeIcon: "/assets/image/settings-active.svg",
  },
  {
    name: "Settings",
    href: "/NotificationsSettings",
    icon: "/assets/image/settings.svg",
    activeIcon: "/assets/image/settings-active.svg",
  },
];

export default function ClubSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

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

      {/* TOGGLE */}
      <button
        className="msar-sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}>
        ☰
      </button>

      {/* LOGOUT */}
      <div className="msar-logout">
        <Image
          src="/assets/image/logout-icon.svg"
          alt=""
          width={18}
          height={18}
        />
        {!collapsed && <span>Log out</span>}
      </div>
    </aside>
  );
}
