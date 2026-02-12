"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard-coach",
    icon: "/assets/image/dashboard.svg",
    activeIcon: "/assets/image/dashboard-active.svg",
  },
  {
    name: "Teams/Groups",
    href: "/teams-groups",
    icon: "/assets/image/teams-groups-menu.svg",
    activeIcon: "/assets/image/teams-groups-menu-active.svg",
  },
  {
    name: "Player Progress",
    href: "/player-progress",
    icon: "/assets/image/player-progress-menu.svg",
    activeIcon: "/assets/image/player-progress-menu-active.svg",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "/assets/image/analytics-menu.svg",
    activeIcon: "/assets/image/analytics-menu-active.svg",
  },
  {
    name: "Messages",
    href: "/coach-messages",
    icon: "/assets/image/messages-menu.svg",
    activeIcon: "/assets/image/messages-menu-active.svg",
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: "/assets/image/leaderboard-menu.svg",
    activeIcon: "/assets/image/leaderboard-menu-active.svg",
  },
  {
    name: "Organizations",
    href: "/organizations",
    icon: "/assets/image/organizations.svg",
    activeIcon: "/assets/image/organizations-active.svg",
  },
  {
    name: "Rewards",
    href: "/coach-rewards",
    icon: "/assets/image/rewards-menu.svg",
    activeIcon: "/assets/image/rewards-menu-active.svg",
  },
  {
    name: "Settings",
    href: "/club-settings",
    icon: "/assets/image/settings.svg",
    activeIcon: "/assets/image/settings-active.svg",
  },
];

export default function CoachSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // ✅ AUTO COLLAPSE LOGIC
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300) {
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
